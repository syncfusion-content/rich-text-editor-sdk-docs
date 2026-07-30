var blocksData = [
    {
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Sample Heading'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'This is a sample paragraph block.'
            }
        ]
    }
];

var blockeditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData,
    enableRtl: true
});
blockeditor.appendTo('#blockeditor_rtl');
