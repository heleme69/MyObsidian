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

        // Tách lấy tên gốc không chứa hậu tố và lấy đường dẫn thư mục hiện tại
        const cleanBaseName = currentName.replace(/_draft$/, "");
        const currentParentPath = activeFile.parent ? activeFile.parent.path : "";

        // 3. Quét toàn bộ vault để xây dựng danh sách thư mục đích
        const allFolders = app.vault.getAllLoadedFiles()
            .filter(item => item.children !== undefined)
            .map(folder => folder.path)
            .filter(path => path && path !== "/" && path.trim() !== "")
            .sort();

        const displayList = ["/ (Root Folder)", ...allFolders];
        const valueList = ["/", ...allFolders];

        // 4. Hiển thị menu gợi ý (Suggester) để người dùng chọn thư mục cần đưa file vào
        const targetFolder = await quickAddApi.suggester(displayList, valueList);
        if (!targetFolder) {
            new Notice("Operation cancelled.");
            return "";
        }

        // 5. Đọc toàn bộ nội dung từ bản nháp hiện tại
        const content = await app.vault.read(activeFile);
        
        // Xác định đường dẫn file đích (không chứa hậu tố _draft)
        const cleanFilePath = (targetFolder === "/") 
            ? `${cleanBaseName}.md` 
            : `${targetFolder}/${cleanBaseName}.md`;
            
        const existingFile = app.vault.getAbstractFileByPath(cleanFilePath);
        let targetFileToOpen = null;

        // 6. Xử lý phân nhánh: Cập nhật (Update) hoặc Tạo mới (Publish)
        if (existingFile) {
            // Nhánh A: File đã tồn tại -> Mở file lên để xem trước (Peek) và hỏi xác nhận ghi đè
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
            
            // Tiến hành ghi đè nội dung mới vào file đích có sẵn
            await app.vault.modify(existingFile, content);
            targetFileToOpen = existingFile;
            new Notice(`Updated: ${cleanFilePath}`);
            
        } else {
            // Nhánh B: Chưa có file trùng tên -> Tạo mới bản chính thức tại thư mục đích
            targetFileToOpen = await app.vault.create(cleanFilePath, content);
            new Notice(`Published: ${cleanFilePath}`);
        }

        // 7. Đổi tên file nháp gốc thành _backup (giữ nguyên vị trí trong Content/Main)
        const backupPath = (currentParentPath && currentParentPath !== "/") 
            ? `${currentParentPath}/${cleanBaseName}_backup.md` 
            : `${cleanBaseName}_backup.md`;

        await app.fileManager.renameFile(activeFile, backupPath);

        // 8. Chuyển tab làm việc sang bản chính thức sạch sẽ vừa xử lý
        if (targetFileToOpen) {
            await app.workspace.getLeaf().openFile(targetFileToOpen);
        }

    } catch (err) {
        new Notice(`Error: ${err.message}`);
    } finally {
        // Mở lại khóa bảo vệ sau 500ms
        setTimeout(() => { isRunning = false; }, 500);
    }

    return "";
};