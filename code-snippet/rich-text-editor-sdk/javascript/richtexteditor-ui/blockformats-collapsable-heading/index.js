var editor = new ej.richtexteditorui.RichTextEditorUI({
    slashCommandSettings: {
        enable: true,
        items: [
            'Collapsible Paragraph',
            'Collapsible Heading 1',
            'Collapsible Heading 2',
            'Collapsible Heading 3',
            'Collapsible Heading 4'
        ]
    },
    placeholder: 'Type / for collapsible sections...'
});

editor.appendTo('#editor');
