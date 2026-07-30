import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'CollapsibleHeading',
        content: [
            {
                contentType: ContentType.Text,
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
                        contentType: ContentType.Text,
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
                contentType: ContentType.Text,
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
                        contentType: ContentType.Text,
                        content: 'This content is initially hidden because isExpanded is set to false.'
                    }
                ]
            }
        ]
    }
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
