var blocksData = [
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Task List:'
            }
        ]
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Completed task (checked)'
            }
        ],
        properties: {isChecked: true}
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Pending task (unchecked)'
            }
        ],
        properties: {isChecked: false}
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'High priority task'
            }
        ],
        properties: {isChecked: true}
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Low priority task'
            }
        ],
        properties:{ isChecked: false}
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
