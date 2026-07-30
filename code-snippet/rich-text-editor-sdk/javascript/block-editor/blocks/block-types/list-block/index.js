var blocksData = [
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Features of the Block Editor'
            }
        ]
    },
    {
        blockType: 'NumberedList',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Step 1: Initialize the Block Editor'
            }
        ]
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Review documentation'
            }
        ],
        properties:{isChecked: true}
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'Implement drag and drop functionality'
            }
        ],
        properties:{isChecked: false}
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
