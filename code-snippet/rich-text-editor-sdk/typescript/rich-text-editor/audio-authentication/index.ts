import { RichTextEditor, Toolbar, Link, Audio, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { UploadingEventArgs } from '@syncfusion/ej2-inputs';
RichTextEditor.Inject(Toolbar, Link, Audio, Count, HtmlEditor, QuickToolbar);

let editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
        items: ['Audio']
    },
    insertAudioSettings: {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
        path: "[SERVICE_HOSTED_PATH]/Files/"
    },
    fileUploading: onFileUpload
});
editor.appendTo('#editor');

function onFileUpload (args: UploadingEventArgs): void {
    var accessToken = "Authorization_token";
    // adding custom Form Data
    args.customFormData = [{ 'Authorization': accessToken }];
}