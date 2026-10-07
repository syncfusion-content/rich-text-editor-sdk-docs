import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
            'Formats', 'Alignment', 'BulletList', 'NumberedList', '|',
            'Quote', 'CodeBlock', 'HorizontalLine', 'Callout', '|',
            'Undo', 'Redo'
        ]
    },
    placeholder: 'Type something...'
});

editor.appendTo('#editor');