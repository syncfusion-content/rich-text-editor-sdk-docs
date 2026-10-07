import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            {
                id: 'WordCount',
                actionId: 'wordCount',
                prefixIcon: 'e-icons e-numbering-list',
                tooltipText: 'Word count',
                align: 'Left'
            },
            '|', 'Undo', 'Redo'
        ],
        itemClicked: (args: any): void => {
            if (args.item) {
                const words: number = editor.getText().trim().split(/\s+/).filter(Boolean).length;
                alert('Word count: ' + words);
            }
        }
    }
});

editor.appendTo('#editor');