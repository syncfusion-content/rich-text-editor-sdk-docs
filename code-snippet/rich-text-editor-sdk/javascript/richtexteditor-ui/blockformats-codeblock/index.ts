import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            'Formats', 'Alignment', '|',
            'CodeBlock', 'Quote', 'HorizontalLine', '|',
            'Undo', 'Redo'
        ]
    },
    placeholder: 'Insert code snippets...'
});

editor.appendTo('#editor');
