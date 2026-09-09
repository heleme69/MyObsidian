module.exports = async (params) => {
    const useCodeBlock = await params.quickAddApi.suggester(
        ["Plain text (no code block)", "Code block"],
        [false, true]
    );
    if (useCodeBlock === undefined) return;

    const levelStr = await params.quickAddApi.suggester(
        ["No prefix", "One level (> )", "Two levels (> >)"],
        ["", "> ", "> > "]
    );
    if (levelStr === undefined) return;

    let clip = "";

    // 1. Đọc HTML và cấu trúc văn bản
    try {
        const clipboardItems = await navigator.clipboard.read();
        for (const item of clipboardItems) {
            if (item.types.includes("text/html")) {
                const htmlBlob = await item.getType("text/html");
                const html = await htmlBlob.text();
                clip = params.obsidian.htmlToMarkdown(html);
                break;
            }
        }
    } catch (e) {
        console.log("Không thể đọc HTML, fallback sang Plain Text", e);
    }

    // 2. Fallback về plain text nếu không có HTML
    if (!clip) {
        clip = await navigator.clipboard.readText();
    }

    if (!clip || clip.trim() === "") {
        new Notice("Clipboard đang trống!");
        return; 
    }

    // 3. Chuẩn hóa xuống dòng
    clip = clip.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    clip = clip.replace(/\\\$/g, "$");
    clip = clip.replace(/([^\n])(\$\$)/g, "$1\n$2");
    clip = clip.replace(/(\$\$)([^\n])/g, "$1\n$2");

    const fence = "```";
    const prefix = levelStr;
    let out = "";
    const lines = clip.split("\n");

    // 4. Xuất ra editor
    if (useCodeBlock) {
        const lang = await params.quickAddApi.inputPrompt("Language (matlab, python, js, ...)") || "";
        out += prefix + fence + lang + "\n";
        lines.forEach(l => {
            out += prefix + l + "\n";
        });
        out += prefix + fence + "\n";
    } else {
        lines.forEach((l, index) => {
            if (index === lines.length - 1 && l === "") return;
            
            if (l.trim() === "") {
                out += prefix + "\n";
            } else {
                out += prefix + l + "  \n";
            }
        });
    }

    const view = app.workspace.getActiveViewOfType(params.obsidian.MarkdownView);
    if (!view) {
        new Notice("Hãy mở một file Markdown để paste!");
        return;
    }
    
    view.editor.replaceSelection(out);
};