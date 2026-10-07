var editor = new ej.richtexteditorui.RichTextEditorUI({
    linkSettings: {
        allowedProtocols: ['https'],
        defaultProtocol: 'https',
        autoPrependProtocol: true
    }
});

editor.appendTo('#editor');
