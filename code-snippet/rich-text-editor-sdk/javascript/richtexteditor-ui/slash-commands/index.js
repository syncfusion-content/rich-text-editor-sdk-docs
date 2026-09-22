ej.richtexteditorui.RichTextEditorUI.Inject(ej.richtexteditorui.SlashCommand);

var editor = new ej.richtexteditorui.RichTextEditorUI({
    slashCommandSettings: {
        enable: true,
        popupWidth: '300px',
        popupHeight: '320px'
    },
    itemSelect: function (args) {
        console.log('Slash command selected:', args);
    }
});
editor.appendTo('#editor');
