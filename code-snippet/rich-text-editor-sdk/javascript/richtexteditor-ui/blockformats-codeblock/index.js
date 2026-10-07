var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            'Formats', 'Alignment', '|',
            'CodeBlock', 'Quote', 'HorizontalLine', '|',
            'Undo', 'Redo'
        ]
    },
    placeholder: 'Insert code snippets...'
});

editor.appendTo('#editor');
