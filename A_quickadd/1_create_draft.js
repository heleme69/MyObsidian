module.exports = async (params) => {
    const { app, quickAddApi } = params;
    
    // 1. Nhắc người dùng nhập tên file
    const noteName = await quickAddApi.inputPrompt("Enter note title:");
    if (!noteName) {
        new Notice("Note creation cancelled.");
        return;
    }

    // Đường dẫn thư mục làm việc mặc định
    const folderPath = "Content/Main";

    // 2. Kiểm tra xem thư mục có tồn tại trên hệ thống không
    const folderExists = await app.vault.adapter.exists(folderPath);
    if (!folderExists) {
        new Notice(`Directory not found: "${folderPath}"`);
        return;
    }

    // 3. Chuẩn hóa tên và tạo đường dẫn đầy đủ kèm đuôi _draft
    const trimmedName = noteName.trim();
    const fullPath = `${folderPath}/${trimmedName}_draft.md`;

    // 4. Tạo file và mở tab mới
    try {
        const newFile = await app.vault.create(fullPath, "");
        await app.workspace.getLeaf().openFile(newFile);
        new Notice(`Created: ${trimmedName}_draft.md`);
    } catch (error) {
        new Notice("Error: File already exists or filename contains invalid characters.");
    }
};