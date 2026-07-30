var blocksData = [
    {
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Undo/Redo Demo'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Try adding new blocks or modifying content below:'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: '1. Undo stack set to maximum 40 actions\n2. Press Ctrl+Z to undo\n3. Press Ctrl+Y to redo\n4. Actions include text edits, block moves, additions, deletions'
            }
        ]
    }
];

var blockeditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData,
    undoRedoStack: 20
});
blockeditor.appendTo('#blockeditor_undo');
