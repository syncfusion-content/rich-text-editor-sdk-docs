import { RichTextEditor, Toolbar, Link, Video, Image, HtmlEditor, QuickToolbar} from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, Video, HtmlEditor, QuickToolbar);
 
let editor: RichTextEditor = new RichTextEditor({
  toolbarSettings: {
    items: ['Video']
  },
  quickToolbarSettings: {
    showOnRightClick: true,
    video: ['VideoReplace', 'VideoAlign', 'VideoRemove', 'VideoLayoutOption', 'VideoDimension']
  },
  value: `<p><b>Get started with Quick Toolbar to click on a video</b></p>
            <p>Using the quick toolbar, users can replace, align, display, dimension, and delete the selected video.</p>
            <p><video controls style="width: 30%;">
                <source
                  src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Ocean-Waves.mp4"
                  type="video/mp4" />
              </video></p> `
});
 
editor.appendTo('#editor');