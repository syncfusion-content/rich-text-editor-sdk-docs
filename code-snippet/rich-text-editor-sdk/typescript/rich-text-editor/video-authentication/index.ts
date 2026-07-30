import { RichTextEditor, Toolbar, HtmlEditor, Video } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, HtmlEditor, Video);

let editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['Video']
    },
    insertVideoSettings: {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
        path: "[SERVICE_HOSTED_PATH]/Files/"
    },
    fileUploading: onFileUpload
});
editor.appendTo('#editor');

function onFileUpload (args): void {
    var accessToken = "Authorization_token";
    // adding custom Form Data
    args.customFormData = [{ 'Authorization': accessToken }];
}