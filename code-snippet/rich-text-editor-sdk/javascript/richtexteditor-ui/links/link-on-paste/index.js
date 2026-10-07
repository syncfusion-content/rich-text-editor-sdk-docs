var editor = new ej.richtexteditorui.RichTextEditorUI({
    linkSettings: {
        linkOnPaste: true,
        defaultTarget: '_blank',
        autoPrependProtocol: true,
        defaultProtocol: 'https',
        allowedProtocols: ['http', 'https', 'mailto', 'tel']
    }
});

editor.appendTo('#editor');
