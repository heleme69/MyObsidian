module.exports = async (params) => {
    const { app, quickAddApi } = params;
    
    const noteName = await quickAddApi.inputPrompt("Enter note title:");
    if (!noteName) {
        new Notice("Note creation cancelled.");
        return;
    }

    const folderPath = "Content/Main";
    const folderExists = await app.vault.adapter.exists(folderPath);
    if (!folderExists) {
        new Notice(`Directory not found: "${folderPath}"`);
        return;
    }

    const trimmedName = noteName.trim();
    const fullPath = `${folderPath}/${trimmedName}_draft.md`;

    try {
        await app.vault.create(fullPath, "");
        // Đã xóa lệnh tự động open/peek tại đây
        new Notice(`Created: ${trimmedName}_draft.md`);
    } catch (error) {
        new Notice("Error: File already exists or filename contains invalid characters.");
    }
};