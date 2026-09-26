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
            { text: 'Segoe UI', value: 'Segoe UI, sans-serif' },
            { text: 'Roboto', value: 'Roboto, sans-serif' },
            { text: 'Georgia', value: 'Georgia, serif' },
            { text: 'Courier New', value: 'Courier New, monospace' }
        ]
    }
});

editor.appendTo('#editor');