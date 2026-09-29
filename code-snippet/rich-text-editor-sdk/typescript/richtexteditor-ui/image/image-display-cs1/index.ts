import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

// Enable Display in quick toolbar
const editor = new RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/upload',
        imageUrl: '/uploads/'
    },
    quickToolbarSettings: {
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove']
    }
});

editor.appendTo('#editor');
