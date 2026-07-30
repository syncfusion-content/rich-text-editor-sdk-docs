var editor = new ej.richtexteditor.RichTextEditor({
    beforeClipboardWrite: onBeforeClipboardWrite,
});
editor.appendTo('#editor');

function onBeforeClipboardWrite(args) {
    if (args.operation === 'copy') {
        args.htmlContent = '<h1>This is customized content triggered while copy event</h1>';
        args.plainTextContent = 'This is customized content triggered while copy event';
    }
}
