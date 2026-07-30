var blocksData = [
    {
        blockType: ej.blockeditor.BlockType.Table,
        properties: {
            columns: [{ id: 'col1', headerText: 'Column 1' }, { id: 'col2', headerText: 'Column 2' }],
            rows: [
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [{ blockType: ej.blockeditor.BlockType.Paragraph, content: [{ contentType: ej.blockeditor.ContentType.Text, content: 'Cell 1' }] }]
                        },
                        {
                            columnId: 'col2',
                            blocks: [{ blockType: ej.blockeditor.BlockType.Paragraph, content: [{ contentType: ej.blockeditor.ContentType.Text, content: 'Cell 2' }] }]
                        }
                    ]
                },
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [{ blockType: ej.blockeditor.BlockType.Paragraph, content: [{ contentType: ej.blockeditor.ContentType.Text, content: 'Cell 3' }] }]
                        },
                        {
                            columnId: 'col2',
                            blocks: [{ blockType: ej.blockeditor.BlockType.Paragraph, content: [{ contentType: ej.blockeditor.ContentType.Text, content: 'Cell 4' }] }]
                        }
                    ]
                }
            ]
        }
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ej.blockeditor.ContentType.Text,
                content: 'You can customize the table further by configuring properties like width, enableHeader to show a header row, enableRowNumbers to display row indices, and readOnly to prevent edits.'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
