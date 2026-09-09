module.exports = async (params) => {
    const { app, quickAddApi } = params;

    // 1. Nhắc người dùng nhập tên thư mục mới cần tạo dưới Content/
    const folderName = await quickAddApi.inputPrompt("Enter new folder name (inside Content/):");
    if (!folderName || !folderName.trim()) {
        new Notice("Folder creation cancelled.");
        return;
    }

    // 2. Tự động nối tiền tố Content/ và chuẩn hóa đường dẫn
    const sanitizedName = folderName.trim().replace(/^\/+|\/+$/g, "");
    const fullPath = `Content/${sanitizedName}`;

    // 3. Kiểm tra xem thư mục này đã tồn tại trên vault chưa
    const exists = await app.vault.adapter.exists(fullPath);
    if (exists) {
        new Notice(`Folder already exists: ${fullPath}`);
        return;
    }

    // 4. Tạo thư mục mới trong hệ thống file của Obsidian
    try {
        await app.vault.createFolder(fullPath);
        new Notice(`Created folder: ${fullPath}`);
    } catch (e) {
        new Notice(`Error creating folder: ${e.message}`);
    }
};