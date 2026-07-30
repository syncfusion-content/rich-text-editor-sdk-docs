var blocksData = [
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
                contentType:  ej.blockeditor.ContentType.Text,
                content: 'You can customize images further by configuring properties like allowedTypes for file upload restrictions, saveFormat for storage preferences, and cssClass for custom styling.'
            }
        ]
    }
];

var blockEditor = new ej.blockeditor.BlockEditor({
    blocks: blocksData,
    imageBlockSettings: {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
        path: "[SERVICE_HOSTED_PATH]/Files/"
    },
    fileUploading: fileUploading
});
blockEditor.appendTo('#blockEditor');

function fileUploading(args){
    args.currentRequest.setRequestHeader('Authorization', 'Syncfusion');
}
