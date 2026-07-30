import {RichTextEditor,Toolbar,Link,Image,HtmlEditor,QuickToolbar} from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

let editor: RichTextEditor = new RichTextEditor({
  value: `<p>This is paragraph one.</p><p>This is paragraph two.</p>`,
});
editor.appendTo('#editor');

document.getElementById('btn').onclick = function () {
  const panel = editor.contentModule.getEditPanel() as HTMLElement;
  const paragraphs: NodeListOf<HTMLParagraphElement> = panel.querySelectorAll('p');

  if (paragraphs.length > 1) {
    const range: Range = document.createRange();
    range.selectNode(paragraphs[1]); // Select the second paragraph

    const selection: Selection | null = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
};
