var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', 'CodeBlock', '|', 'Undo', 'Redo'],
        keyBindings: {
            link: 'ctrl+alt+k',
            image: 'ctrl+alt+i',
            'code-block': 'ctrl+shift+c'
        }
    }
});
editor.appendTo('#editor');
