import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const hostUrl: string = 'https://services.syncfusion.com/js/production/';
const editor: RichTextEditorUI = new RichTextEditorUI({
    value: '<p>Getting started with the Rich Text Editor UI.</p>',
    valueFormat: 'html',
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
    },
    imageSettings: {
        allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
        maxFileSize: 30000000,
        uploadUrl: hostUrl + 'api/RichTextEditor/SaveFile',
        imageUrl: hostUrl + 'RichTextEditor/'
    }
});

editor.appendTo('#editor');