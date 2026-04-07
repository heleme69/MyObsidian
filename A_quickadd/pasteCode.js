module.exports = async (params) => {
    const useCodeBlock = await params.quickAddApi.suggester(
        ["Plain text (no code block)", "Code block"],
        [false, true]
    );

    const levelStr = await params.quickAddApi.suggester(
        ["No prefix", "One level (> )", "Two levels (> >)"],
        ["", "> ", "> > "]
    );

    const clip = await navigator.clipboard.readText();
    const b = String.fromCharCode(96);
    const fence = b+b+b;
    const prefix = levelStr;
    let out = "";

    if (useCodeBlock) {
        const lang = await params.quickAddApi.inputPrompt("Language (matlab, python, js, ...)");
        out += prefix + fence + lang + "\n";
        clip.split("\n").forEach(l => out += prefix + l + "\n");
        out += prefix + fence;
    } else {
        clip.split("\n").forEach(l => out += prefix + l + "\n");
    }

    const view = app.workspace.getActiveViewOfType(params.obsidian.MarkdownView);
    const editor = view.editor;
    editor.replaceRange(out, editor.getCursor());
}