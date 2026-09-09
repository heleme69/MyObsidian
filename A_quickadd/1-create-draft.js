module.exports = async (params) => {
    const { app, quickAddApi } = params;
    
    // 1. Nhắc người dùng nhập tên note
    const noteName = await quickAddApi.inputPrompt("Enter note title:");
    if (!noteName) {
        new Notice("Note creation cancelled.");
        return;
    }

    const folderPath = "Content/Main";

    // 2. Kiểm tra thư mục đích
    const folderExists = await app.vault.adapter.exists(folderPath);
    if (!folderExists) {
        new Notice(`Directory not found: "${folderPath}"`);
        return;
    }

    // 3. Chuẩn hóa tên và tạo đường dẫn đầy đủ kèm đuôi _draft
    const trimmedName = noteName.trim();
    const fullPath = `${folderPath}/${trimmedName}_draft.md`;

    // 4. Tạo note mới và tự động mở lên màn hình ngay lập tức
    try {
        const newFile = await app.vault.create(fullPath, "");
        await app.workspace.getLeaf().openFile(newFile);
        new Notice(`Created and opened: ${trimmedName}_draft.md`);
    } catch (error) {
        new Notice("Error: File already exists or filename contains invalid characters.");
    }
};