var editor = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['aicommands', 'aiquery']
    },
    aiAssistantSettings: {
        popupMaxHeight: 500,
        popupWidth: 500
    }
});

editor.appendTo('#editor');