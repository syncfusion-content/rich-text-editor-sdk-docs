var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['Bold', 'Italic', '|', 'Link', '|', 'Undo', 'Redo']
    },
    linkSettings: {
        linkOnPaste: true,
        defaultTarget: '_blank',
        autoPrependProtocol: true,
        defaultProtocol: 'https',
        allowedProtocols: ['http', 'https', 'mailto', 'tel']
    }
});
editor.appendTo('#editor');

// Programmatic link commands
// editor.commands().link().url('https://www.syncfusion.com').text('Syncfusion').target('_blank').operation('insert').apply();
// editor.commands().link().operation('remove').apply();
