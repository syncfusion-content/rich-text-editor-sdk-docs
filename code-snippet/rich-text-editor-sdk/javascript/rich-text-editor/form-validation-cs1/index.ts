


import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
/**
 * Rich Text Editor default sample
 */
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, Count, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
import { FormValidator } from '@syncfusion/ej2-inputs';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, Count, QuickToolbar);
import { Button } from '@syncfusion/ej2-buttons';

let button: Button;
let editor: RichTextEditor = new RichTextEditor({ showCharCount: true, maxLength: 100, placeholder: 'Type something',
change : function() {
  button.disabled = false;
}
});
editor.appendTo('#editor');
  let dialog: Dialog;
 button = new Button({
disabled :true
     });
button.appendTo('#validateSubmit');

new FormValidator('#form-element');



