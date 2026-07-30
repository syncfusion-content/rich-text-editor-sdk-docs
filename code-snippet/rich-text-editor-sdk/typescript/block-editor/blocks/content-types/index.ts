import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'Heading',
        properties: {level : 2},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Different Content Types'  
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'The Block Editor supports various content types: '
            },
            {
                contentType: ContentType.Link,
                content: 'hyperlinks',
                properties: {
                    url: 'https://ej2.syncfusion.com/documentation/'
                }
            },
            {
                contentType: ContentType.Text,
                content: ', inline '
            },
            {
                contentType: ContentType.Text,
                content: 'code snippets.'
            },
            {
                contentType: ContentType.Text,
                content: '\nUser mentions like'
            },
            {
                contentType: ContentType.Mention,
                properties: { userId: "user1" }
            },
            {
                contentType: ContentType.Text,
                content: ', and labels such as'
            },
            {
                contentType: ContentType.Label,
                properties: {labelId: "label1"}
            },
            {
                contentType: ContentType.Text,
                content: '.'
            }
        ]
    }
];

const blockEditor = new BlockEditor({
    users: [
        { id: 'user1', user: 'John Doe' }
    ],
    labelSettings: {
        items: [
            { id: 'label1', text: 'Bug', labelColor: '#ff5252', groupBy: 'Status' }
        ]
    },
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
