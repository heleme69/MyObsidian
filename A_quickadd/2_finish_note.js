let isRunning = false;

module.exports = async (params) => {
    // Chống nảy phím kép
    if (isRunning) return "";
    isRunning = true;

    try {
        const { app, quickAddApi } = params;
        const activeFile = app.workspace.getActiveFile();

        // 1. Kiểm tra file đang thao tác
        if (!activeFile) {
            new Notice("No active file detected.");
            return "";
        }

        // 2. Xác thực hậu tố _draft
        const currentName = activeFile.basename;
        if (!currentName.endsWith("_draft")) {
            new Notice("Current file is not a draft (missing '_draft' suffix).");
            return "";
        }

        const cleanBaseName = currentName.replace(/_draft$/, "");
        const currentParentPath = activeFile.parent ? activeFile.parent.path : "";

        // 3. Lấy danh sách folder đích
        const allFolders = app.vault.getAllLoadedFiles()
            .filter(item => item.children !== undefined)
            .map(folder => folder.path)
            .filter(path => path && path !== "/" && path.trim() !== "")
            .sort();

        const displayList = ["/ (Root Folder)", ...allFolders];
        const valueList = ["/", ...allFolders];

        const targetFolder = await quickAddApi.suggester(displayList, valueList);
        if (!targetFolder) {
            new Notice("Operation cancelled.");
            return "";
        }

        const content = await app.vault.read(activeFile);
        
        const cleanFilePath = (targetFolder === "/") 
            ? `${cleanBaseName}.md` 
            : `${targetFolder}/${cleanBaseName}.md`;
            
        const existingFile = app.vault.getAbstractFileByPath(cleanFilePath);
        let targetFileToOpen = null;

        if (existingFile) {
            // Mở trước file đích để hỗ trợ tính năng Peek
            await app.workspace.getLeaf().openFile(existingFile);

            // Prompt xác nhận ngắn gọn và tự nhiên
            const confirm = await quickAddApi.inputPrompt(
                "Do you want to update the existing file?",
                "Yes"
            );
            
            // Nếu bấm Esc hoặc Cancel
            if (confirm === undefined || confirm === null) {
                await app.workspace.getLeaf().openFile(activeFile);
                new Notice("Update cancelled. Draft unchanged.");
                return "";
            }
            
            // Ghi đè nội dung mới
            await app.vault.modify(existingFile, content);
            targetFileToOpen = existingFile;
            new Notice(`Updated: ${cleanFilePath}`);
            
        } else {
            // Tạo mới nếu chưa tồn tại
            targetFileToOpen = await app.vault.create(cleanFilePath, content);
            new Notice(`Published: ${cleanFilePath}`);
        }

        // Đổi tên file nháp thành _backup (giữ tại Content/Main)
        const backupPath = (currentParentPath && currentParentPath !== "/") 
            ? `${currentParentPath}/${cleanBaseName}_backup.md` 
            : `${cleanBaseName}_backup.md`;

        await app.fileManager.renameFile(activeFile, backupPath);

        // Mở bản chính thức
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