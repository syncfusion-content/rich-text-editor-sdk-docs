import { RichTextEditorUI, SlashCommand } from '@syncfusion/ej2-richtexteditor-ui';

RichTextEditorUI.Inject(SlashCommand);

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['Table']
    },
    tableSettings: {
        resize: false
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');