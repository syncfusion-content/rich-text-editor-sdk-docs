var blocksData = [
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'The Block Editor supports various content types. When the readOnly property is set to true, it prevents users from editing the content, making the editor display-only.'
            }
        ]
    }
];

var blockeditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData,
    readOnly: true
});
blockeditor.appendTo('#blockEditor');
