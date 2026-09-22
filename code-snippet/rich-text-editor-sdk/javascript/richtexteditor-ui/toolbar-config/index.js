var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'Formats', 'Alignment', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo'],
        type: 'MultiRow',
        position: 'Top',
        enableFloating: true,
        floatingOffset: 0
    },
    itemClicked: function (args) {
        console.log('Toolbar item clicked:', args);
    },
    updatedToolbarStatus: function (args) {
        console.log('Toolbar status updated:', args);
    }
});
editor.appendTo('#editor');
