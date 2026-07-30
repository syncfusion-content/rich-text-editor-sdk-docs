var blocksData = [
    {
        blockType: 'Heading',
        properties: {level: 2},
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Different Content Types'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'The Block Editor supports various content types: '
            },
            {
                contentType: ej.blockeditor.ContentType.Link,
                content: 'hyperlinks',
                properties: {
                    url: 'https://ej2.syncfusion.com/documentation/'
                }
            },
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: ', inline '
            },
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'code snippets.'
            },
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: '\nUser mentions like'
            },
            {
                contentType: ej.blockeditor.ContentType.Mention,
                properties: { userId: "user1" }
            },
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: ', and labels such as'
            },
            {
                contentType: ej.blockeditor.ContentType.Label,
                properties: {labelId: "label1"}
            },
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: '.'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    users: [
        { id: 'user1', user: 'John Doe' }
    ],
    labelSettings: {
        items: [
            { id: 'label1', text: 'Bug', labelColor: '#ff5252', groupHeader: 'Status' }
        ]
    },
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
