var blocksData = [
    {
        blockType: 'CollapsibleHeading',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Collapsible Section'
            }
        ],
        properties:{
        level: 1,
        isExpanded: true,
        children: [
            {
                blockType: 'Paragraph',
                content: [
                    {
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'This content is inside a toggle section and can be collapsed.'
                    }
                ]
            }
        ]
    }
    },
    {
        blockType: 'CollapsibleParagraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Toggle paragraph section'
            }
        ],
        properties:{
        isExpanded: false,
        children: [
            {
                blockType: 'Paragraph',
                content: [
                    {
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'This content is initially hidden because isExpanded is set to false.'
                    }
                ]
            }
        ]
    }
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
