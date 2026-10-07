var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['NumberFormatList']
    },
    listSettings: {
        numberFormatListItems: [
            { text: 'Decimal', listType: 'decimal' },
            { text: 'Roman', listType: 'upper-roman' },
            { text: 'Alpha', listType: 'upper-alpha' }
        ]
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');
