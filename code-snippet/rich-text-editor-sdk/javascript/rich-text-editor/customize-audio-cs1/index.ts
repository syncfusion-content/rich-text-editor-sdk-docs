import { RichTextEditor, Toolbar, Link, Audio, Image, HtmlEditor, QuickToolbar} from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, Audio, HtmlEditor, QuickToolbar);
 
let editor: RichTextEditor = new RichTextEditor({
  toolbarSettings: {
    items: ['Audio']
  },
  quickToolbarSettings: {
    showOnRightClick: true,
    audio: ['AudioReplace', 'Remove', 'AudioLayoutOption']
  },
  value: `<p><b>Get started with Quick Toolbar to click on an audio</b></p>
                    <p>Using the quick toolbar, users can replace, display, and delete the selected audio.</p>
                    <p><audio controls><source src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Audio.wav" type="audio/mp3" /></audio></p>`
});
 
editor.appendTo('#editor');
