var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', 'Strikethrough',
            '|',
            'FontSize', 'FontName', 'FontColor', 'BackgroundColor',
            '|',
            'InlineCode', 'ClearFormat'
        ]
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');

document.getElementById('boldBtn').onclick = function () {
    editor.commands().bold().apply();
};

document.getElementById('underlineBtn').onclick = function () {
    editor.commands().underline().apply();
};

document.getElementById('fontSizeBtn').onclick = function () {
    editor.commands().fontSize().size('18px').apply();
};

document.getElementById('fontColorBtn').onclick = function () {
    editor.commands().fontColor().color('#00A3FF').apply();
};

document.getElementById('highlightBtn').onclick = function () {
    editor.commands().backgroundColor().color('#FFF7C7').apply();
};

document.getElementById('clearFormatBtn').onclick = function () {
    editor.commands().clearFormat().apply();
};
