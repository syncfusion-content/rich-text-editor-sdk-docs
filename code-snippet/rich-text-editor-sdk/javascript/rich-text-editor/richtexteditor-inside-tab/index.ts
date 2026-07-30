import {
  RichTextEditor,
  Toolbar,
  Link,
  Image,
  HtmlEditor,
  QuickToolbar,
} from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);
import { Tab } from '@syncfusion/ej2-navigations';

let tabObj: Tab = new Tab({
  items: [
    { header: { text: 'Tab 1' }, content: '#tab1Content' },
    { header: { text: 'Tab 2' }, content: '#tab2Content' },
    { header: { text: 'Tab 3' }, content: '#tab3Content' },
  ],
});
tabObj.appendTo('#element');

let editor1: RichTextEditor = new RichTextEditor({});
editor1.appendTo('#tab1Content');

let editor2: RichTextEditor = new RichTextEditor({});
editor2.appendTo('#tab2Content');

let editor3: RichTextEditor = new RichTextEditor({});
editor3.appendTo('#tab3Content');
