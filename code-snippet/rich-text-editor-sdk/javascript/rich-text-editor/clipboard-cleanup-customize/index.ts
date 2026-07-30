import { RichTextEditor, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, ClipboardCleanup, ClipboardWriteEventArgs } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Image,  Link, HtmlEditor, QuickToolbar, ClipboardCleanup, ClipboardWriteEventArgs );

let editor: RichTextEditor = new RichTextEditor({
    beforeClipboardWrite: onBeforeClipboardWrite,
});
editor.appendTo('#editor');

function onBeforeClipboardWrite(args: ClipboardWriteEventArgs) {
    if (args.operation === 'copy') {
        args.htmlContent = '<h1>This is customized content triggered while copy event</h1>';
        args.plainTextContent = 'This is customized content triggered while copy event';
    }
}
