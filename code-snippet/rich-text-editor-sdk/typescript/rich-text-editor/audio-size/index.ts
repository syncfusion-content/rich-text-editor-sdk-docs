import { RichTextEditor, Toolbar, Link, Audio, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { UploadingEventArgs } from '@syncfusion/ej2-inputs';
RichTextEditor.Inject(Toolbar, Link, Audio, Count, HtmlEditor, QuickToolbar);

let editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['Audio']
    },
    insertAudioSettings: {
        saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
        path: "../Files/",
        maxFileSize: 30000000
    }
});
editor.appendTo('#editor');