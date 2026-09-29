import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

// Customize Quick Toolbar Items
const editor = new RichTextEditorUI({
    quickToolbarSettings: {
        image: [
            'AltText',
            'Caption',
            '|',
            'Align',
            'Display',
            'WrapText',
            '|',
            'Dimension',
            'Replace',
            'Remove'
        ]
    }
});

editor.appendTo('#editor');
