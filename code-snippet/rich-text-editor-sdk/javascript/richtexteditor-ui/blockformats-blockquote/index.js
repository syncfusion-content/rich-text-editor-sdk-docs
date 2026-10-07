var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            'Formats', 'Alignment', '|',
            'Quote', 'CodeBlock', '|',
            'Undo', 'Redo'
        ]
    },
    slashCommandSettings: {
        enable: true,
        items: ['Blockquote']
    },
    placeholder: 'Quote a passage...'
});

editor.appendTo('#editor');
