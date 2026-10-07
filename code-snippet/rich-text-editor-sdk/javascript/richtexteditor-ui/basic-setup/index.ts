import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    value: '<p>Getting started with the Rich Text Editor UI.</p>',
    valueFormat: 'html',
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
    },
    imageSettings: {
        allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
        maxFileSize: 30000000
    }
});
editor.appendTo('#editor');

