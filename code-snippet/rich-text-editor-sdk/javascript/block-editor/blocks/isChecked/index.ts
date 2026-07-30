import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Task List:'
            }
        ]
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Completed task (checked)'
            }
        ],
        properties: {isChecked: true}
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Pending task (unchecked)'
            }
        ],
        properties: {isChecked: false}
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'High priority task'
            }
        ],
        properties: {isChecked: true}
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Low priority task'
            }
        ],
        properties: {isChecked: false}
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
