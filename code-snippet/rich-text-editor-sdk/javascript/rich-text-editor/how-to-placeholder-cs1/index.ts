


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Count } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, Count);

let editor: RichTextEditor = new RichTextEditor({ placeholder:'Type Something' });
editor.appendTo('#editor');



