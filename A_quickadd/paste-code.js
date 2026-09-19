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

    // 1. Ưu tiên plain text từ LLM interfaces
    try {
        clip = await navigator.clipboard.readText();
    } catch (e) {
        console.log("Cannot read plain text", e);
    }

    // 2. Fallback: thử HTML chỉ nếu plain text trống
    if (!clip || clip.trim() === "") {
        try {
            const clipboardItems = await navigator.clipboard.read();
            for (const item of clipboardItems) {
                if (item.types.includes("text/html")) {
                    const htmlBlob = await item.getType("text/html");
                    let html = await htmlBlob.text();
                    // Tiền xử lý: chuyển visual breaks thành <p> tags
                    html = html.replace(/\n(?=\S)/g, " "); // Gộp soft breaks
                    clip = params.obsidian.htmlToMarkdown(html);
                    break;
                }
            }
        } catch (e) {
            console.log("Fallback to plain text failed", e);
        }
    }

    if (!clip || clip.trim() === "") {
        new Notice("Clipboard is empty!");
        return;
    }

    // 3. Chuẩn hóa xuống dòng toàn cục
    clip = clip.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
    
    // 4. Xử lý math blocks
    clip = clip.replace(/\\\$/g, "$");
    clip = clip.replace(/([^\n])\s*(\$\$)/g, "$1\n$2");
    clip = clip.replace(/(\$\$)\s*([^\n])/g, "$1\n$2");

    // 5. Xóa existing blockquote prefixes trước khi áp dụng user prefix
    const stripBlockquotes = (text) => {
        return text.split("\n")
            .map(line => {
                // Xóa leading > symbols nhưng giữ content
                return line.replace(/^(>\s*)+/, "");
            })
            .join("\n");
    };

    clip = stripBlockquotes(clip);

    // 6. Phát hiện structural markdown elements
    const isStructuralLine = (line) => {
        const trimmed = line.trim();
        return (
            trimmed.startsWith("$$") ||          // Block math
            trimmed.startsWith("#") ||           // Headings
            trimmed.match(/^\[\![\w]+\]/) ||     // Callout markers
            trimmed.startsWith("```") ||         // Code blocks
            trimmed.startsWith("-") ||           // Lists
            trimmed.startsWith("*") ||
            trimmed.startsWith("+") ||
            /^\d+\./.test(trimmed) ||           // Numbered lists
            trimmed === ""                       // Empty lines
        );
    };

    const fence = "```";
    const prefix = levelStr;
    let out = "";
    const lines = clip.split("\n");

    // 7. Output generation
    if (useCodeBlock) {
        const lang = await params.quickAddApi.inputPrompt("Language (matlab, python, js, ...)") || "";
        out += prefix + fence + lang + "\n";
        lines.forEach(l => {
            out += prefix + l + "\n";
        });
        out += prefix + fence + "\n";
    } else {
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const isLast = i === lines.length - 1;
            const isEmpty = line.trim() === "";
            const isStructural = isStructuralLine(line);

            // Bỏ qua empty line cuối
            if (isLast && isEmpty) continue;

            if (isEmpty) {
                // Empty lines: giữ full prefix để Obsidian không gộp paragraphs
                out += prefix + "\n";
            } else if (isStructural) {
                // Structural lines: chỉ dùng soft break (\n)
                out += prefix + line + "\n";
            } else {
                // Regular prose: hard break (two spaces + \n)
                out += prefix + line.trimEnd() + "  \n";
            }
        }
    }

    const view = app.workspace.getActiveViewOfType(params.obsidian.MarkdownView);
    if (!view) {
        new Notice("Open a Markdown note first!");
        return;
    }

    view.editor.replaceSelection(out);
};