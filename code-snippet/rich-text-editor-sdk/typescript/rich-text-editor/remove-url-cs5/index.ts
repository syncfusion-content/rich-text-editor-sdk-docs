import { RichTextEditor, HtmlEditor, Toolbar, QuickToolbar, Video } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(HtmlEditor, Toolbar, QuickToolbar, Video);

let editor: RichTextEditor = new RichTextEditor({
    value: `<p>Rich Text Editor allows inserting video and audio from online sources and the local computers where you want to insert a video and audio into your content.</p>`,
    toolbarSettings: {
        items: ['Video']
    }
});
editor.appendTo('#editor');