var editor = new ej.richtexteditorui.RichTextEditorUI({
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
