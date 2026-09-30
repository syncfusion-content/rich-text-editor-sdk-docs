import { RichTextEditorUI, SlashCommand } from '@syncfusion/ej2-richtexteditor-ui';

RichTextEditorUI.Inject(SlashCommand);

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            'Callout',
            '|',
            'Undo', 'Redo'
        ]
    },
    slashCommandSettings: {
        enable: true,
        items: [
            'Info', 'Success', 'Warning', 'Error', 'Note'
        ]
    },
    placeholder: 'Type / for slash commands...'
});

editor.appendTo('#editor');