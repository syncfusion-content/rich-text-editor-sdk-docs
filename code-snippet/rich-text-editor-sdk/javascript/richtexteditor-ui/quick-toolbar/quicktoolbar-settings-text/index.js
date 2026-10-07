var editor = new ej.richtexteditorui.RichTextEditorUI({
    quickToolbarSettings: {
        enable: true,
        text: [
            'Undo', 'Redo', '|',
            'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
            'FontColor', 'BackgroundColor', '|',
            'Formats', '|',
            'NumberedList', 'BulletList'
        ]
    }
});

editor.appendTo('#editor');
