let isRunning = false;

module.exports = async (params) => {
    // Chống kích hoạt đúp (debounce lock)
    if (isRunning) return "";
    isRunning = true;

    try {
        const { app, quickAddApi } = params;
        const activeFile = app.workspace.getActiveFile();

        // 1. Kiểm tra trạng thái file đang mở
        if (!activeFile) {
            new Notice("No active file detected.");
            return "";
        }

        // 2. Xác thực hậu tố: Bắt buộc file phải mang đuôi _draft
        const currentName = activeFile.basename;
        if (!currentName.endsWith("_draft")) {
            new Notice("Current file is not a draft (missing '_draft' suffix).");
            return "";
        }

        const cleanBaseName = currentName.replace(/_draft$/, "");
        const currentParentPath = activeFile.parent ? activeFile.parent.path : "";

        // 3. Quét danh sách các thư mục hiện có trong vault
        const allFolders = app.vault.getAllLoadedFiles()
            .filter(item => item.children !== undefined)
            .map(folder => folder.path)
            .filter(path => path && path !== "/" && path.trim() !== "")
            .sort();

        const CREATE_NEW_OPTION = "➕ Create new folder inside Content/...";
        const displayList = [CREATE_NEW_OPTION, "/ (Root Folder)", ...allFolders];
        const valueList = [CREATE_NEW_OPTION, "/", ...allFolders];

        // 4. Hiển thị menu gợi ý (Suggester)
        let targetFolder = await quickAddApi.suggester(displayList, valueList);
        if (!targetFolder) {
            new Notice("Operation cancelled.");
            return "";
        }

        // 5. Xử lý khi chọn tạo folder mới
        if (targetFolder === CREATE_NEW_OPTION) {
            const newFolderName = await quickAddApi.inputPrompt("Enter new folder name (inside Content/):");

            if (!newFolderName || !newFolderName.trim()) {
                new Notice("Folder creation cancelled.");
                return "";
            }

            const sanitized = newFolderName.trim().replace(/^\/+|\/+$/g, "");
            targetFolder = `Content/${sanitized}`;

            const folderExists = await app.vault.adapter.exists(targetFolder);
            if (!folderExists) {
                await app.vault.createFolder(targetFolder);
                new Notice(`Created folder: ${targetFolder}`);
            }
        }

        // 6. Đọc nội dung từ bản nháp
        const content = await app.vault.read(activeFile);
        
        const cleanFilePath = (targetFolder === "/") 
            ? `${cleanBaseName}.md` 
            : `${targetFolder}/${cleanBaseName}.md`;
            
        const existingFile = app.vault.getAbstractFileByPath(cleanFilePath);
        let targetFileToOpen = null;

        // 7. Xử lý phân nhánh: Cập nhật hoặc Tạo mới
        if (existingFile) {
            await app.workspace.getLeaf().openFile(existingFile);

            const confirm = await quickAddApi.inputPrompt(
                "Do you want to update the existing file?",
                "Yes"
            );
            
            if (confirm === undefined || confirm === null) {
                await app.workspace.getLeaf().openFile(activeFile);
                new Notice("Update cancelled. Draft unchanged.");
                return "";
            }
            
            await app.vault.modify(existingFile, content);
            targetFileToOpen = existingFile;
            new Notice(`Updated: ${cleanFilePath}`);
            
        } else {
            targetFileToOpen = await app.vault.create(cleanFilePath, content);
            new Notice(`Published: ${cleanFilePath}`);
        }

        // 8. Xử lý đồng bộ file đính kèm (Attachments Upsert & Merge)
        const cache = app.metadataCache.getFileCache(activeFile);
        const embeds = cache?.embeds || [];
        
        const sourceAttachmentsFolder = currentParentPath ? `${currentParentPath}/attachments` : "attachments";
        const targetAttachmentsFolder = targetFolder === "/" ? "attachments" : `${targetFolder}/attachments`;

        for (const embed of embeds) {
            const file = app.metadataCache.getFirstLinkpathDest(embed.link, activeFile.path);
            
            // Chỉ thao tác nếu file tồn tại và nằm trong folder attachments nguồn của bản nháp
            if (file && file.parent && file.parent.path === sourceAttachmentsFolder) {
                
                const targetFolderExists = await app.vault.adapter.exists(targetAttachmentsFolder);
                if (!targetFolderExists) {
                    await app.vault.createFolder(targetAttachmentsFolder);
                }

                const newAttachmentPath = `${targetAttachmentsFolder}/${file.name}`;
                const existingDest = app.vault.getAbstractFileByPath(newAttachmentPath);

                if (existingDest && existingDest.path !== file.path) {
                    // Nếu ở đích đã có file trùng tên -> Cập nhật nội dung binary từ file mới ở Main sang
                    const newBinaryData = await app.vault.readBinary(file);
                    await app.vault.modifyBinary(existingDest, newBinaryData);
                    // Dọn dẹp bản tạm ở Main để không rác ổ cứng
                    await app.vault.trash(file, true);
                } else if (!existingDest) {
                    // Nếu ở đích chưa có -> Di chuyển sang
                    await app.fileManager.renameFile(file, newAttachmentPath);
                }
            }
        }

        // 9. Đổi tên file nháp thành _backup
        const backupPath = (currentParentPath && currentParentPath !== "/") 
            ? `${currentParentPath}/${cleanBaseName}_backup.md` 
            : `${cleanBaseName}_backup.md`;

        await app.fileManager.renameFile(activeFile, backupPath);

        // 10. Mở bản chính thức
        if (targetFileToOpen) {
            await app.workspace.getLeaf().openFile(targetFileToOpen);
        }

    } catch (err) {
        new Notice(`Error: ${err.message}`);
    } finally {
        setTimeout(() => { isRunning = false; }, 500);
    }

    return "";
};