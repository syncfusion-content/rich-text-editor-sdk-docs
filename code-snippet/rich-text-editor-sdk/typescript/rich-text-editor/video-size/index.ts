import { RichTextEditor, Toolbar, HtmlEditor, Video } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, HtmlEditor, Video);

let editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['Video']
    },
    insertVideoSettings: {
        saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
        path: "../Files/",
        maxFileSize: 30000000
    }
});
editor.appendTo('#editor');
