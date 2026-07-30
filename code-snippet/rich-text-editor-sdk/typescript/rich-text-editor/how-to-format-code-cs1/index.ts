


import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

let editor: RichTextEditor = new RichTextEditor({
  toolbarSettings: {
    items: ['InsertCode']
  }
});
editor.appendTo('#editor');



