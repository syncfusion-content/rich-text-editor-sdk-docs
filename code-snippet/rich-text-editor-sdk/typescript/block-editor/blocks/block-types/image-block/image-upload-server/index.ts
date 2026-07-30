import { BlockEditor, BlockModel, ContentType } from "@syncfusion/ej2-blockeditor";

const blocksData: BlockModel[] = [
    {
        blockType: 'Image',
        properties: {
            src: 'https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png',
            altText: 'Sample image'
        }
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'You can customize images further by configuring properties like allowedTypes for file upload restrictions, saveFormat for storage preferences, and cssClass for custom styling.'
            }
        ]
    }
];

const blockEditor = new BlockEditor({
    blocks: blocksData,
    imageBlockSettings: {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/Home/SaveImage",
        path: "[SERVICE_HOSTED_PATH]/Uploads/"
    }
});
blockEditor.appendTo('#blockEditor');
