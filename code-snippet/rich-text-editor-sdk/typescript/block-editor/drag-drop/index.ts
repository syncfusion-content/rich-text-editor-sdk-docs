import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Drag and Drop Demo'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Try rearranging blocks by dragging the handle that appears when hovering over them. You can drag a single block or select multiple blocks to drag them together.'
            }
        ]
    },
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Drag and drop is enabled by default'
            }
        ]
    },
    {
        blockType: 'NumberedList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'You can select multiple blocks and drag them together'
            }
        ]
    },
    {
        blockType: 'NumberedList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Try dragging this block to rearrange the content'
            }
        ]
    }
]

const blockEditor: BlockEditor = new BlockEditor({
    blocks: blocksData,
    enableDragAndDrop: true
});
 
blockEditor.appendTo('#blockeditor');
