import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: `<div onmouseover='javascript:alert(1)'>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`
            }
        ]
    }
];


const blockEditor: BlockEditor = new BlockEditor({
    blocks: blocksData,
    enableHtmlSanitizer: true
});
 
blockEditor.appendTo('#blockEditor');
