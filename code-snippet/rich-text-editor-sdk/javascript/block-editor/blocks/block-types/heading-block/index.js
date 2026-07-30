var blocksData = [
    {
        blockType: 'Heading',
        properties: { level: 1 },
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Main Document Title'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level: 2 },
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Chapter Overview'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level: 3 },
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Section Introduction'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level: 4 },
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Sub-section Details'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
