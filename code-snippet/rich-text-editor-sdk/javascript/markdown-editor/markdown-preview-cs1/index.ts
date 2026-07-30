import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import {
  RichTextEditor,
  Link,
  Image,
  MarkdownEditor,
  Toolbar,
  Table,
  ToolbarType,
} from '@syncfusion/ej2-richtexteditor';
import { Browser } from '@syncfusion/ej2-base';
import { Splitter } from '@syncfusion/ej2-layouts';
import Marked from 'marked';
RichTextEditor.Inject(Link, Image, MarkdownEditor, Toolbar, Table);

let textArea: HTMLTextAreaElement;
let srcArea: HTMLElement;

let splitObj: Splitter = new Splitter({
  height: '450px',
  width: '100%',
  resizing: onResizing,
  paneSettings: [{ resizable: true, size: '50%', min: '40%' }, { min: '40%' }],
  created: updateOrientation,
});
splitObj.appendTo('#splitter-rte-markdown-preview');
let markdownRTE: RichTextEditor = new RichTextEditor({
  height: '100%',
  value:
    'In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.',
  placeholder: 'Enter your text here...',
  floatingToolbarOffset: 0,
  editorMode: 'Markdown',
  toolbarSettings: {
    type: ToolbarType.Expand,
    enableFloating: false,
    items: [
      'Bold',
      'Italic',
      'StrikeThrough',
      '|',
      'Formats',
      'Blockquote',
      'OrderedList',
      'UnorderedList',
      '|',
      'CreateLink',
      'Image',
      'CreateTable',
      '|',
      'Undo',
      'Redo',
    ],
  },
  saveInterval: 1,
  actionComplete: updateValue,
  change: onChange,
  created: onCreate,
});
markdownRTE.appendTo('#markdown-editor');

function onChange(): void {
  updateValue();
}
function onResizing(): void {
  markdownRTE.refreshUI();
}
function onCreate(): void {
  textArea = markdownRTE.contentModule.getEditPanel() as HTMLTextAreaElement;
  srcArea = document.querySelector('.source-code') as HTMLElement;
  updateValue();
}
function updateValue(): void {
  srcArea.innerHTML = Marked(
    (markdownRTE.contentModule.getEditPanel() as HTMLTextAreaElement).value
  );
}
function updateOrientation(): void {
  if (Browser.isDevice) {
    splitObj.orientation = 'Vertical';
    (document.body.querySelector('.heading') as HTMLElement).style.width =
      'auto';
  }
}
