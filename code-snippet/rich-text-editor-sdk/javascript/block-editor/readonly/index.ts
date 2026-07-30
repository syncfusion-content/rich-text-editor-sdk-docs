import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'The Block Editor supports various content types. When the readOnly property is set to true, it prevents users from editing the content, making the editor display-only.'
            }
        ]
    }
];


const blockEditor: BlockEditor = new BlockEditor({
    blocks: blocksData,
    readOnly: true
});
 
blockEditor.appendTo('#blockEditor');
