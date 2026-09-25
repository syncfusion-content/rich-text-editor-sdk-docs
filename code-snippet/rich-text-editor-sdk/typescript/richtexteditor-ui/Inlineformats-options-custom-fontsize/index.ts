import { RichTextEditorUI, SlashCommand } from '@syncfusion/ej2-richtexteditor-ui';

RichTextEditorUI.Inject(SlashCommand);

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['FontSize']
    },
    placeholder: 'Type something ...',
    fontSize: {
        items: [
            { text: 'Default', value: 'Default' },
            { text: '10', value: '10px' },
            { text: '12', value: '12px' },
            { text: '14', value: '14px' },
            { text: '16', value: '16px' },
            { text: '18', value: '18px' },
            { text: '24', value: '24px' },
            { text: '32', value: '32px' }
        ]
    }
});

editor.appendTo('#editor');