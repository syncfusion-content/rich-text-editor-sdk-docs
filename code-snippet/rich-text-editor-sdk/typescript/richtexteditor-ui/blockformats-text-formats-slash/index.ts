import { RichTextEditorUI, SlashCommand } from '@syncfusion/ej2-richtexteditor-ui';

RichTextEditorUI.Inject(SlashCommand);

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['Formats', 'Alignment', 'Quote', 'CodeBlock', 'HorizontalLine', 'Callout']
    },
    slashCommandSettings: {
        enable: true,
        items: [
            'Paragraph',
            'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4',
            'Blockquote',
            'Info', 'Success', 'Warning', 'Error', 'Note',
            'Collapsible Paragraph',
            'Collapsible Heading 1', 'Collapsible Heading 2',
            'Collapsible Heading 3', 'Collapsible Heading 4'
        ]
    }
});

editor.appendTo('#editor');