import { RichTextEditor, Toolbar, HtmlEditor, Audio } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, HtmlEditor, Audio);

let editor: RichTextEditor = new RichTextEditor({
   toolbarSettings: {
      items: ['Audio']
   },
   insertAudioSettings: {
      saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
      path: "[SERVICE_HOSTED_PATH]/Files/"
  }
});
editor.appendTo('#editor');