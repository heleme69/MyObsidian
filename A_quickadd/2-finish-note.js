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

        const cleanBaseName = currentName.replace(/_draft$/, "");
        const currentParentPath = activeFile.parent ? activeFile.parent.path : "";

        // 3. Quét danh sách các thư mục hiện có trong vault
        const allFolders = app.vault.getAllLoadedFiles()
            .filter(item => item.children !== undefined)
            .map(folder => folder.path)
            .filter(path => path && path !== "/" && path.trim() !== "")
            .sort();

        // Ghim tùy chọn tạo folder mới và root folder lên đầu menu
        const CREATE_NEW_OPTION = "➕ Create new folder inside Content/...";
        const displayList = [CREATE_NEW_OPTION, "/ (Root Folder)", ...allFolders];
        const valueList = [CREATE_NEW_OPTION, "/", ...allFolders];

        // 4. Hiển thị menu gợi ý (Suggester) chọn thư mục đích
        let targetFolder = await quickAddApi.suggester(displayList, valueList);
        if (!targetFolder) {
            new Notice("Operation cancelled.");
            return "";
        }

        // 5. Xử lý khi chọn tạo folder mới: Mặc định nằm trong Content/
        if (targetFolder === CREATE_NEW_OPTION) {
            const newFolderName = await quickAddApi.inputPrompt("Enter new folder name (inside Content/):");

            if (!newFolderName || !newFolderName.trim()) {
                new Notice("Folder creation cancelled.");
                return "";
            }

            const sanitized = newFolderName.trim().replace(/^\/+|\/+$/g, "");
            targetFolder = `Content/${sanitized}`;

            // Tạo thư mục nếu chưa có
            const folderExists = await app.vault.adapter.exists(targetFolder);
            if (!folderExists) {
                await app.vault.createFolder(targetFolder);
                new Notice(`Created folder: ${targetFolder}`);
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
            // Mở trước file đích để hỗ trợ tính năng Peek
            await app.workspace.getLeaf().openFile(existingFile);

            const confirm = await quickAddApi.inputPrompt(
                "Do you want to update the existing file?",
                "Yes"
            );
            
            // Nếu người dùng hủy hoặc nhấn ESC -> Hoàn tác góc nhìn về file nháp và dừng
            if (confirm === undefined || confirm === null) {
                await app.workspace.getLeaf().openFile(activeFile);
                new Notice("Update cancelled. Draft unchanged.");
                return "";
            }
            
            // Ghi đè nội dung mới vào file đích có sẵn
            await app.vault.modify(existingFile, content);
            targetFileToOpen = existingFile;
            new Notice(`Updated: ${cleanFilePath}`);
            
        } else {
            // Tạo mới bản chính thức tại thư mục đích
            targetFileToOpen = await app.vault.create(cleanFilePath, content);
            new Notice(`Published: ${cleanFilePath}`);
        }

        // 8. Đổi tên file nháp thành _backup (giữ nguyên vị trí trong Content/Main)
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