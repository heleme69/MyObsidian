module.exports = async (params) => {
    const { app, quickAddApi } = params;
    
    // 1. Nhắc người dùng nhập tên note
    const noteName = await quickAddApi.inputPrompt("Enter title name (inside /Content/Main):");
    if (!noteName || !noteName.trim()) {
        new Notice("Note creation cancelled.");
        return;
    }

    const folderPath = "Content/Main";

    // 2. Lấy đối tượng thư mục Content/Main
    const mainFolder = app.vault.getAbstractFileByPath(folderPath);
    if (!mainFolder || !mainFolder.children) {
        new Notice(`Directory not found: "${folderPath}"`);
        return;
    }

    // 3. Chuẩn hóa tên nhập vào
    const cleanName = noteName.trim().replace(/(_draft|_backup)$/, "");

    // 4. Quét toàn bộ file hiện có trong Content/Main để kiểm tra va chạm
    const existingDraft = `${cleanName}_draft`;
    const existingBackup = `${cleanName}_backup`;

    const hasConflict = mainFolder.children.find(file => 
        file.basename === existingDraft || file.basename === existingBackup
    );

    // 5. Nếu phát hiện đã có file mang đuôi _draft hoặc _backup thì dừng ngay lập tức
    if (hasConflict) {
        new Notice(`File already exists in Main: "${hasConflict.name}"`);
        return;
    }

    // 6. Tạo file _draft mới và mở lên màn hình
    const draftPath = `${folderPath}/${cleanName}_draft.md`;
    try {
        const newFile = await app.vault.create(draftPath, "");
        await app.workspace.getLeaf().openFile(newFile);
        new Notice(`Created and opened: ${cleanName}_draft.md`);
    } catch (error) {
        new Notice(`Error creating file: ${error.message}`);
    }
};