let isRunning = false;

module.exports = async (params) => {
    // Chống kích hoạt đúp (debounce lock) do phím tắt nảy liên tiếp
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

        // Tách tên sạch không đuôi và lấy đường dẫn thư mục hiện tại
        const cleanBaseName = currentName.replace(/_draft$/, "");
        const currentParentPath = activeFile.parent ? activeFile.parent.path : "";

        // 3. Quét danh sách các thư mục hiện có trong vault
        const allFolders = app.vault.getAllLoadedFiles()
            .filter(item => item.children !== undefined)
            .map(folder => folder.path)
            .filter(path => path && path !== "/" && path.trim() !== "")
            .sort();

        // Thêm tùy chọn tạo folder mới và root folder lên đầu danh sách
        const CREATE_NEW_OPTION = "➕ Create new folder...";
        const displayList = [CREATE_NEW_OPTION, "/ (Root Folder)", ...allFolders];
        const valueList = [CREATE_NEW_OPTION, "/", ...allFolders];

        // 4. Hiển thị menu gợi ý (Suggester) chọn thư mục
        let targetFolder = await quickAddApi.suggester(displayList, valueList);
        if (!targetFolder) {
            new Notice("Operation cancelled.");
            return "";
        }

        // 5. Xử lý khi người dùng chọn tạo folder mới
        if (targetFolder === CREATE_NEW_OPTION) {
            const newFolderName = await quickAddApi.inputPrompt(
                "Enter new folder path (e.g., Content/Subject):",
                "Content/"
            );

            if (!newFolderName || !newFolderName.trim()) {
                new Notice("Folder creation cancelled.");
                return "";
            }

            targetFolder = newFolderName.trim().replace(/\/+$/, ""); // Chuẩn hóa bỏ dấu gạch chéo cuối

            // Tạo thư mục nếu chưa tồn tại trên hệ thống
            const folderExists = await app.vault.adapter.exists(targetFolder);
            if (!folderExists) {
                await app.vault.createFolder(targetFolder);
                new Notice(`Folder created: ${targetFolder}`);
            }
        }

        // 6. Đọc nội dung từ bản nháp
        const content = await app.vault.read(activeFile);
        
        // Xác định đường dẫn file đích
        const cleanFilePath = (targetFolder === "/") 
            ? `${cleanBaseName}.md` 
            : `${targetFolder}/${cleanBaseName}.md`;
            
        const existingFile = app.vault.getAbstractFileByPath(cleanFilePath);
        let targetFileToOpen = null;

        // 7. Xử lý phân nhánh: Cập nhật (Update) hoặc Tạo mới (Publish)
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

        // 8. Đổi tên file nháp thành _backup
        const backupPath = (currentParentPath && currentParentPath !== "/") 
            ? `${currentParentPath}/${cleanBaseName}_backup.md` 
            : `${cleanBaseName}_backup.md`;

        await app.fileManager.renameFile(activeFile, backupPath);

        // 9. Mở bản chính thức sạch sẽ vừa xử lý
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