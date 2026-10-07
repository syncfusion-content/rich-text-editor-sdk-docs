var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['Table']
    },
    tableSettings: {
        resize: false
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');
