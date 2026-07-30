import { RichTextEditor, HtmlEditor, Toolbar, QuickToolbar, Audio } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(HtmlEditor, Toolbar, QuickToolbar, Audio);

let editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['Audio']
    },
    value: `<p>Rich Text Editor allows inserting video and audio from online sources and the local computers where you want to insert a video and audio into your content.</p>`,
});
editor.appendTo('#editor');