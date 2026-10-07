var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            'Callout',
            '|',
            'Undo', 'Redo'
        ]
    },
    slashCommandSettings: {
        enable: true,
        items: [
            'Info', 'Success', 'Warning', 'Error', 'Note'
        ]
    },
    placeholder: 'Type / for slash commands...'
});

editor.appendTo('#editor');
