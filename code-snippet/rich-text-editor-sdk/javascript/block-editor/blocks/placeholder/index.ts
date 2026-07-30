import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'Paragraph',
        properties: { placeholder: 'Start typing your notes or press "/" for commands...'},
        content: [ { contentType: ContentType.Text, content: '' } ]
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData
});
blockEditor.appendTo('#blockEditor');
