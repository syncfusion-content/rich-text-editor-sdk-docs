import { RichTextEditor, Toolbar, HtmlEditor, Audio } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, HtmlEditor, Audio );

let editor: RichTextEditor = new RichTextEditor({
   insertAudioSettings: {
      layoutOption: 'Inline'
  }
});
editor.appendTo('#editor');