


import { RichTextEditor, HtmlEditor, Toolbar, QuickToolbar, Video } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(HtmlEditor, Toolbar, QuickToolbar, Video);

let editor: RichTextEditor = new RichTextEditor({
    insertVideoSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    toolbarSettings: {
        items: ['Video']
    }
});
editor.appendTo('#editor');



