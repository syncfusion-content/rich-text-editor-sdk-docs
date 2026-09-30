import { RichTextEditorUI, SlashCommand } from '@syncfusion/ej2-richtexteditor-ui';

RichTextEditorUI.Inject(SlashCommand);

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['FontName']
    },
    placeholder: 'Type something ...',
    fontFamily: {
        items: [
            { text: 'Default', value: 'Default' },
            { text: 'Roboto', value: 'Roboto, sans-serif' },
            { text: 'Great Vibes', value: '"Great Vibes", cursive' }
        ]
    }
});

editor.appendTo('#editor');