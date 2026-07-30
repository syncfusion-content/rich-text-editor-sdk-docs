var blocksData = [
    {
        blockType: 'Heading',
        properties: {level: 1},
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Custom CSS Classes in Block Editor'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Default paragraph block'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'This is an info block'
            }
        ],
        cssClass: 'info-block'
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'This is a warning block'
            }
        ],
        cssClass: 'warning-block'
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'This is a success block'
            }
        ],
        cssClass: 'success-block'
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'This is an error block'
            }
        ],
        cssClass: 'error-block'
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'This is a custom font block'
            }
        ],
        cssClass: 'custom-font'
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
