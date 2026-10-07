// Customize Quick Toolbar Items
var editor = new ej.richtexteditorui.RichTextEditorUI({
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
