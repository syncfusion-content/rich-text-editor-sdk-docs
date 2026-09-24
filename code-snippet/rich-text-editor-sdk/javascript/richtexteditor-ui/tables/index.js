var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['Bold', 'Italic', '|', 'Table', '|', 'Undo', 'Redo']
    },
    tableSettings: {
        resize: true
    },
    resizing: function (args) {
        console.log('Resizing:', args.source);
    },
    resizeStop: function (args) {
        console.log('Resize finished:', args.source);
    }
});
editor.appendTo('#editor');
