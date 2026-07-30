import { BlockEditor, BlockModel, ContentType, BlockType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: BlockType.Table,
        properties: {
            columns: [{ id: 'col1', headerText: 'Column 1' }, { id: 'col2', headerText: 'Column 2' }],
            rows: [
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 1' }] }]
                        },
                        {
                            columnId: 'col2',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 2' }] }]
                        }
                    ]
                },
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 3' }] }]
                        },
                        {
                            columnId: 'col2',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 4' }] }]
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
                contentType: ContentType.Text,
                content: 'You can customize the table further by configuring properties like width, enableHeader to show a header row, enableRowNumbers to display row indices, and readOnly to prevent edits.'
            }
        ]
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
