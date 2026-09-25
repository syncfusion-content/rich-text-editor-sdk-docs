import { RichTextEditorUI, SlashCommand } from '@syncfusion/ej2-richtexteditor-ui';

RichTextEditorUI.Inject(SlashCommand);

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            'Formats', 'Alignment', '|',
            'Quote', 'CodeBlock', '|',
            'Undo', 'Redo'
        ]
    },
    slashCommandSettings: {
        enable: true,
        items: ['Blockquote']
    },
    placeholder: 'Quote a passage...'
});

editor.appendTo('#editor');