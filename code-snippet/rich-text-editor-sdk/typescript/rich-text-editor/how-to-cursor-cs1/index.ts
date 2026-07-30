


import { addClass, removeClass, Browser, isNullOrUndefined } from '@syncfusion/ej2-base';
import { RichTextEditor,NodeSelection, Toolbar, Link, Image, Count, HtmlEditor,
  QuickToolbar, ActionBeginEventArgs,IToolsItems } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar);

let editor: RichTextEditor = new RichTextEditor({
   placeholder:'Type Something',
});
editor.appendTo('#editor');

document.getElementById('btn').onclick = function(){
  let element: Element= editor.contentModule.getDocument().getElementById("key");
  let selectioncursor: NodeSelection = new NodeSelection();
  let range: Range = document.createRange();
  range.setStart(element, 1); // to set the range
  selectioncursor.setRange(document, range); // to set the cursor
}



