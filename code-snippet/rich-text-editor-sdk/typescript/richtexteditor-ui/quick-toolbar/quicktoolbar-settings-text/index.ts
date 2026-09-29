import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    quickToolbarSettings: {
        enable: true,
        text: [
            'Undo', 'Redo', '|',
            'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
            'FontColor', 'BackgroundColor', '|',
            'Formats', '|',
            'NumberedList', 'BulletList'
        ]
    }
});

editor.appendTo('#editor');