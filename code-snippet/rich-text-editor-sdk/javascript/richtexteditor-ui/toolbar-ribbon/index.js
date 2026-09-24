var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        enable: false
    },
    updatedToolbarStatus: function (args) {
        document.getElementById('ribbonBold').classList.toggle('e-active', args.activeMarks.bold);
        document.getElementById('ribbonItalic').classList.toggle('e-active', args.activeMarks.italic);
        document.getElementById('ribbonUnderline').classList.toggle('e-active', args.activeMarks.underline);

        document.getElementById('ribbonHeading').value = args.blockFormats.heading || 'paragraph';

        if (args.styles.fontColor) {
            document.getElementById('ribbonColor').value = args.styles.fontColor;
        }
    }
});
editor.appendTo('#editor');

document.getElementById('ribbonBold').addEventListener('click', function () {
    editor.commands().bold().apply();
});
document.getElementById('ribbonItalic').addEventListener('click', function () {
    editor.commands().italic().apply();
});
document.getElementById('ribbonUnderline').addEventListener('click', function () {
    editor.commands().underline().apply();
});
document.getElementById('ribbonHeading').addEventListener('change', function (e) {
    var value = e.target.value;
    if (value === 'paragraph') {
        editor.commands().paragraph().apply();
    } else {
        editor.commands()[value]().apply();
    }
});
document.getElementById('ribbonColor').addEventListener('input', function (e) {
    editor.commands().fontColor().color(e.target.value).apply();
});
