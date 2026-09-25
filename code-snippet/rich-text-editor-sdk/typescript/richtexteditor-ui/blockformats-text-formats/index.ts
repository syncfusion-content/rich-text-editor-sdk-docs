import { RichTextEditorUI, SlashCommand } from '@syncfusion/ej2-richtexteditor-ui';

RichTextEditorUI.Inject(SlashCommand);

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