import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['BulletFormatList']
    },
    listSettings: {
        bulletFormatListItems: [
            { text: 'Thumbs-Up', listType: '\u{1F44D}' }
        ]
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');