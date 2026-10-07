import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

// Enable Dimension in quick toolbar
const editor = new RichTextEditorUI({
    imageSettings: {
        uploadUrl: 'https://api.example.com/upload',
        imageUrl: '/uploads/',
        dimension: {
            width: '300px',
            height: 'auto',
            minWidth: '50px',
            maxWidth: '1000px',
            minHeight: '50px',
            maxHeight: '800px'
        }
    },
    quickToolbarSettings: {
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove']
    }
});

editor.appendTo('#editor');
