import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'Heading',
        properties: { level: 1 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Main Document Title'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level: 2 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Chapter Overview'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level: 3 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Section Introduction'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level: 4 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Sub-section Details'
            }
        ]
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
