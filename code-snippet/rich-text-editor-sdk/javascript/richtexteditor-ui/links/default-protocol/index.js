var editor = new ej.richtexteditorui.RichTextEditorUI({
    linkSettings: {
        autoPrependProtocol: true,
        defaultProtocol: 'https',
        allowedProtocols: ['http', 'https', 'mailto', 'tel']
    }
});

editor.appendTo('#editor');
