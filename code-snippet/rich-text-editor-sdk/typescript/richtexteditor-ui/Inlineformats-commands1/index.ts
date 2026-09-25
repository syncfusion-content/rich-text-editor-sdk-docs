import { RichTextEditorUI, SlashCommand } from '@syncfusion/ej2-richtexteditor-ui';

RichTextEditorUI.Inject(SlashCommand);

const editor: RichTextEditorUI = new RichTextEditorUI({
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

(document.getElementById('boldBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().bold().apply();
};

(document.getElementById('underlineBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().underline().apply();
};

(document.getElementById('fontSizeBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().fontSize().size('18px').apply();
};

(document.getElementById('fontColorBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().fontColor().color('#00A3FF').apply();
};

(document.getElementById('highlightBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().backgroundColor().color('#FFF7C7').apply();
};

(document.getElementById('clearFormatBtn') as HTMLButtonElement).onclick = () => {
    editor.commands().clearFormat().apply();
};