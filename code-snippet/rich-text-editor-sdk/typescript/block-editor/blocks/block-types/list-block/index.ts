import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Features of the Block Editor'
            }
        ]
    },
    {
        blockType: 'NumberedList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Step 1: Initialize the Block Editor'
            }
        ]
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Review documentation'
            }
        ],
       properties:{isChecked: true}
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Implement drag and drop functionality'
            }
        ],
        properties:{isChecked: false}
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
