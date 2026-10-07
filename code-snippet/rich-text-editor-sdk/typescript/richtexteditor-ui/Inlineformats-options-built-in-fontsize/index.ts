import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['FontSize']
    },
    placeholder: 'Type something ...'
});

editor.appendTo('#editor');