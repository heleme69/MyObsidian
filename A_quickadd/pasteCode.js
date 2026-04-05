module.exports = async (params) => {
    const lang = await params.quickAddApi.inputPrompt("Ngôn ngữ (matlab, python, js, ...)");
    const levelStr = await params.quickAddApi.suggester(
        ["Không có >", "Một cấp (> )", "Hai cấp (> >)"],
        ["", "> ", "> > "]
    );
    
    const clip = await navigator.clipboard.readText();
    const b = String.fromCharCode(96);
    const fence = b+b+b;
    const prefix = levelStr;
    let out = prefix + fence + lang + "\n";
    clip.split("\n").forEach(l => out += prefix + l + "\n");
    out += prefix + fence;
    
    const view = app.workspace.getActiveViewOfType(params.obsidian.MarkdownView);
    const editor = view.editor;
    editor.replaceRange(out, editor.getCursor());
}