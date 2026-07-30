import { RichTextEditor, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, ClipboardCleanup } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Image,  Link, HtmlEditor, QuickToolbar, ClipboardCleanup );

let editor: RichTextEditor = new RichTextEditor({});
editor.appendTo('#editor');
