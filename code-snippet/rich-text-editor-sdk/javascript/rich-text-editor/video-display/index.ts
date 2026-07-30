import { RichTextEditor, Toolbar, HtmlEditor, Video } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, HtmlEditor, Video);

let editor: RichTextEditor = new RichTextEditor({
    insertVideoSettings: {
        layoutOption: 'Inline'
    }
});
editor.appendTo('#editor');