import { RichTextEditor, HtmlEditor, Toolbar, QuickToolbar, Image, FileManager, AfterImageDeleteEventArgs, } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(HtmlEditor, Toolbar, QuickToolbar, Image, FileManager);

let editor: RichTextEditor = new RichTextEditor({
    toolbarSettings: {
    items: ['Image'],
    },
    insertImageSettings: {
        saveUrl: '[SERVICE_HOSTED_PATH]/api/RichTextEditor/SaveFile',
        removeUrl: '[SERVICE_HOSTED_PATH]/api/RichTextEditor/DeleteFile',
        path: '[SERVICE_HOSTED_PATH]/RichTextEditor/',
    },
    afterImageDelete: afterImageDelete,
});
editor.appendTo('#editor');

function afterImageDelete(args: AfterImageDeleteEventArgs): void {
  if (args && args.src) {
    const src = args.src;
    const fileName = src.split('/').pop();
    const dummyFile = new File([''], fileName);
    const formData = new FormData();
    formData.append('UploadFiles', dummyFile);
    fetch(this.insertImageSettings.removeUrl, {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (!response.ok) throw new Error('Server responded with an error');
        console.log('Image deleted successfully:', fileName);
      })
      .catch((error) => {
        console.error('Image deletion failed:', error);
      });
  }
}