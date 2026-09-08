let isRunning = false;

module.exports = async (params) => {
    // Ngăn chặn script chạy 2 lần liên tiếp do phím nảy đúp
    if (isRunning) return "";
    isRunning = true;

    try {
        const { app, quickAddApi } = params;
        const activeFile = app.workspace.getActiveFile();

        // 1. Kiểm tra file đang mở
        if (!activeFile) {
            new Notice("No active file detected.");
            return "";
        }

        const currentName = activeFile.basename;
        if (!currentName.endsWith("_draft")) {
            new Notice("Current file is not a draft (missing '_draft' suffix).");
            return "";
        }

        const cleanBaseName = currentName.replace(/_draft$/, "");
        const currentParentPath = activeFile.parent ? activeFile.parent.path : "";

        // 2. Chuẩn bị danh sách thư mục
        const allFolders = app.vault.getAllLoadedFiles()
            .filter(item => item.children !== undefined)
            .map(folder => folder.path)
            .filter(path => path && path !== "/" && path.trim() !== "")
            .sort();

        const displayList = ["/ (Root Folder)", ...allFolders];
        const valueList = ["/", ...allFolders];

        // Mở bảng chọn thư mục
        const targetFolder = await quickAddApi.suggester(displayList, valueList);
        if (!targetFolder) {
            new Notice("Operation cancelled.");
            return "";
        }

        // 3. Đọc nội dung file draft hiện tại
        const content = await app.vault.read(activeFile);
        
        // 4. Tính toán đường dẫn file đích và kiểm tra xem nó đã tồn tại chưa
        const cleanFilePath = (targetFolder === "/") 
            ? `${cleanBaseName}.md` 
            : `${targetFolder}/${cleanBaseName}.md`;
            
        const existingFile = app.vault.getAbstractFileByPath(cleanFilePath);
        let targetFileToOpen = null;

        if (existingFile) {
            // TRƯỜNG HỢP A: File đã tồn tại -> Hỏi ý kiến ghi đè (Update)
            const confirmUpdate = await quickAddApi.yesNoPrompt(
                "Update existing note?", 
                `File "${cleanFilePath}" already exists. Do you want to overwrite it with current draft?`
            );
            
            if (!confirmUpdate) {
                new Notice("Update cancelled. Draft unchanged.");
                return "";
            }
            
            // Tiến hành ghi đè nội dung mới vào file cũ
            await app.vault.modify(existingFile, content);
            targetFileToOpen = existingFile;
            new Notice(`Updated successfully: ${cleanFilePath}`);
            
        } else {
            // TRƯỜNG HỢP B: File chưa tồn tại -> Tạo mới (Publish)
            targetFileToOpen = await app.vault.create(cleanFilePath, content);
            new Notice(`Published new note to: ${cleanFilePath}`);
        }

        // 5. Sau khi Publish/Update thành công, đổi tên bản draft thành _backup
        const backupPath = (currentParentPath && currentParentPath !== "/") 
            ? `${currentParentPath}/${cleanBaseName}_backup.md` 
            : `${cleanBaseName}_backup.md`;

        await app.fileManager.renameFile(activeFile, backupPath);

        // 6. Mở file sạch (vừa tạo hoặc vừa update) lên màn hình
        if (targetFileToOpen) {
            await app.workspace.getLeaf().openFile(targetFileToOpen);
        }

    } catch (err) {
        new Notice(`Error: ${err.message}`);
    } finally {
        // Giải phóng khóa bảo vệ sau 500ms
        setTimeout(() => { isRunning = false; }, 500);
    }

    return "";
};