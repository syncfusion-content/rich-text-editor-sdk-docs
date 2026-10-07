var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['BulletFormatList']
    },
    listSettings: {
        bulletFormatListItems: [
            { text: 'Thumbs-Up', listType: '\u{1F44D}' }
        ]
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');
