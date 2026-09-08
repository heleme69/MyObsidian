module.exports = async (params) => {
    // 1. Chọn chế độ Code Block
    const useCodeBlock = await params.quickAddApi.suggester(
        ["Plain text (no code block)", "Code block"],
        [false, true]
    );
    // Hủy nếu user bấm ESC
    if (useCodeBlock === undefined) return;

    // 2. Chọn Level Blockquote (Thụt lề)
    const levelStr = await params.quickAddApi.suggester(
        ["No prefix", "One level (> )", "Two levels (> >)"],
        ["", "> ", "> > "]
    );
    if (levelStr === undefined) return;

    let clip = "";
    
    // 3. ĐỌC CLIPBOARD VÀ GIỮ FORMAT (HTML to Markdown)
    try {
        const clipboardItems = await navigator.clipboard.read();
        for (const item of clipboardItems) {
            // Nếu phát hiện user bôi đen copy từ Web (chứa HTML)
            if (item.types.includes("text/html")) {
                const htmlBlob = await item.getType("text/html");
                const html = await htmlBlob.text();
                // Dùng trình biên dịch nội bộ của Obsidian để dịch HTML sang Markdown chuẩn
                clip = params.obsidian.htmlToMarkdown(html);
                break;
            }
        }
    } catch (e) {
        console.log("Không thể đọc HTML, fallback sang Plain Text", e);
    }

    // Fallback: Nếu user bấm nút "Copy" của LLM (thường trả về sẵn Markdown trong plain text)
    if (!clip) {
        clip = await navigator.clipboard.readText();
    }
    if (!clip) {
        new Notice("Clipboard đang trống!");
        return; 
    }

    // 4. CHUẨN HÓA NGẮT DÒNG (Rất quan trọng để tránh lỗi format trên Windows)
    clip = clip.replace(/\r\n/g, "\n").replace(/\r/g, "\n");

    const b = String.fromCharCode(96);
    const fence = b + b + b;
    const prefix = levelStr;
    let out = "";

    const lines = clip.split("\n");

    // 5. XỬ LÝ VĂN BẢN
    if (useCodeBlock) {
        // Nhập ngôn ngữ nếu dùng code block
        const lang = await params.quickAddApi.inputPrompt("Language (matlab, python, js, ...)") || "";
        out += prefix + fence + lang + "\n";
        lines.forEach(l => {
            out += prefix + l + "\n";
        });
        out += prefix + fence + "\n";
    } else {
        lines.forEach((l, index) => {
            // Bỏ qua dòng trống cuối cùng để tránh thừa dấu prefix
            if (index === lines.length - 1 && l === "") return;
            
            // Nếu dòng hoàn toàn trống, ta xóa khoảng trắng thừa ở đuôi (vd "> " thành ">")
            if (l.trim() === "" && prefix.trim() !== "") {
                out += prefix.trimEnd() + "\n";
            } else {
                out += prefix + l + "\n";
            }
        });
    }

    // 6. GHI VÀO EDITOR
    const view = app.workspace.getActiveViewOfType(params.obsidian.MarkdownView);
    if (!view) {
        new Notice("Hãy mở một file Markdown để paste!");
        return;
    }
    
    const editor = view.editor;
    // Dùng replaceSelection tốt hơn replaceRange: sẽ ghi đè nếu bạn đang bôi đen text cũ
    editor.replaceSelection(out);
}