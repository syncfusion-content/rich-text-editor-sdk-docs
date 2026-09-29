import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    quickToolbarSettings: {
        enable: true,
        enableAppendToBody: true,
        text: ['Bold', 'Italic', 'Underline', '|', 'Formats', '|', 'NumberedList', 'BulletList'],
        image: ['AltText', 'Caption', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove'],
        link:  ['Open', 'Copy', 'Edit', 'Remove'],
        table: ['Header', 'Remove', '|', 'Row', 'Column', '|', 'CellBackgroundColor', 'Align', 'VerticalAlign']
    }
});

editor.appendTo('#editor');