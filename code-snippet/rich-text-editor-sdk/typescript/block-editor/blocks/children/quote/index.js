var blocksData = [
    {
        id: 'security-quote',
        blockType: 'Quote',
        properties:{
        children: [
                { 
                    parentId: 'security-quote',
                    blockType: 'Heading',
                    properties: { level: 3},
                    content: [{
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'Security Notice'
                    }]
                },
                { 
                    parentId: 'security-quote',
                    blockType: 'Paragraph',
                    content: [{
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'Always validate user input before processing to prevent security vulnerabilities.'
                    }]
                },
                { 
                    parentId: 'security-quote',
                    blockType: 'Paragraph',
                    content: [{
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'Use HTTPS for all data transmission'
                    }],
                },
                { 
                    parentId: 'security-quote',
                    blockType: 'Paragraph',
                    content: [{
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'Implement proper authentication mechanisms'
                    }],
                },
                { 
                    parentId: 'security-quote',
                    blockType: 'Paragraph',
                    content: [{
                        contentType: ej.blockeditor.ContentType.Text,
                        content: 'Regularly update dependencies and libraries'
                    }],
                }
            ]
        }
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
