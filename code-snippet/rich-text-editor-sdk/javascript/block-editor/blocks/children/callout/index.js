var blocksData = [
    {
        id: 'security-callout',
        blockType: 'Callout',
        properties:{
        children: [
                { 
                    parentId: 'security-callout',
                    blockType: 'Heading',
                    properties: { level: 3},
                    content: [{
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'Security Notice'
                    }]
                },
                { 
                    parentId: 'security-callout',
                    blockType: 'Paragraph',
                    content: [{
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'Always validate user input before processing to prevent security vulnerabilities.'
                    }]
                },
                { 
                    parentId: 'security-callout',
                    blockType: 'Paragraph',
                    content: [{
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'Use HTTPS for all data transmission'
                    }],
                    indent: 1
                },
                { 
                    parentId: 'security-callout',
                    blockType: 'Paragraph',
                    content: [{
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'Implement proper authentication mechanisms'
                    }],
                    indent: 1
                },
                { 
                    parentId: 'security-callout',
                    blockType: 'Paragraph',
                    content: [{
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'Regularly update dependencies and libraries'
                    }],
                    indent: 1
                }
            ]
        }
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
