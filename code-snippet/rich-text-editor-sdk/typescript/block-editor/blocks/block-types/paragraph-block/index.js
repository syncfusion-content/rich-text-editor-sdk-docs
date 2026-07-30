var paragraphBlock = [
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'This is a paragraph block example.'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: paragraphBlock
});
blockEditor.appendTo('#blockEditor');