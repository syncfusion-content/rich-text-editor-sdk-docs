import { Dialog } from '@syncfusion/ej2-popups';
import {
  RichTextEditor,
  Toolbar,
  Link,
  Image,
  HtmlEditor,
  QuickToolbar,
} from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

let dialog = new Dialog({
  header: 'Dialog Header',
  footerTemplate: 'Dialog Footer',
  content: document.getElementById('dlgContent'),
  showCloseIcon: true,
  width: '400px',
  height: '250px',
  open: onOpen,
});

dialog.appendTo('#dialog');

let editor: RichTextEditor = new RichTextEditor({});
editor.appendTo('#dlgContent');

document.getElementById('targetButton').onclick = (): void => {
  dialog.show();
};

function onOpen(): void {
  editor.refreshUI();
}
