var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'Formats', 'FontName', 'FontSize', '|', 'FontColor', 'BackgroundColor', '|', 'Alignment', '|', 'Undo', 'Redo']
    }
});
editor.appendTo('#editor');

// Programmatic formatting via the fluent commands() API
// editor.commands().bold().apply();
// editor.commands().italic().apply();
// editor.commands().heading1().apply();
// editor.commands().blockQuote().apply();
// editor.commands().codeBlock().apply();
// editor.commands().callout().variant('info').apply();
// editor.commands().setTextAlign().align('center').apply();
// editor.commands().fontColor().color('#FF0000').apply();
// editor.commands().fontSize().size('16px').apply();
