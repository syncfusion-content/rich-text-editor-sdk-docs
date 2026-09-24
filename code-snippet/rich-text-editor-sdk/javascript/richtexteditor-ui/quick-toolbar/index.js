var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['Bold', 'Italic', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
    },
    quickToolbarSettings: {
        enable: true,
        text: ['Bold', 'Italic', 'Underline', '|', 'FontColor', 'BackgroundColor'],
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove'],
        link: ['Open', 'Copy', 'Edit', 'Remove'],
        table: ['Header', 'Remove', '|', 'Row', 'Column', '|', 'CellBackgroundColor', 'Align', 'VerticalAlign'],
        enableAppendToBody: false
    }
});
editor.appendTo('#editor');
