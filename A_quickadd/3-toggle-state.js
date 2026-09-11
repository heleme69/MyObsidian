module.exports = async (params) => {
    const { app } = params;
    const activeFile = app.workspace.getActiveFile();

    // 1. Kiểm tra file đang mở
    if (!activeFile) {
        new Notice("No active file detected.");
        return;
    }

    const name = activeFile.basename;
    let newName = "";

    // 2. Đảo đuôi giữa _draft và _backup
    if (name.endsWith("_draft")) {
        newName = name.replace(/_draft$/, "_backup");
    } else if (name.endsWith("_backup")) {
        newName = name.replace(/_backup$/, "_draft");
    } else {
        new Notice("File does not have a '_draft' or '_backup' suffix.");
        return;
    }

    // 3. Xác định đường dẫn mới trong cùng thư mục hiện tại
    const parentPath = activeFile.parent.path;
    const newPath = parentPath === "/" 
        ? `${newName}.md` 
        : `${parentPath}/${newName}.md`;

    // 4. Thực thi đổi tên file
    await app.fileManager.renameFile(activeFile, newPath);
    new Notice(`Renamed to: ${newName}.md`);
};