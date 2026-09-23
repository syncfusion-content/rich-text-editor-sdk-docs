ej.base.enableRipple(true);

var textArea;
var srcArea;

var splitObj = new ej.layouts.Splitter({
  height: '450px',
  resizing: onResizing,
  created: updateOrientation,
  width: '100%',
  paneSettings: [
    {
      resizable: true,
      size: '50%',
      min: '40%',
    },
    { min: '40%' },
  ],
});
splitObj.appendTo('#splitter-rte-markdown-preview');

var markdownRTE = new ej.richtexteditor.RichTextEditor({
  height: '100%',
  value:
    'In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The Syncfusion <b>MarkdownConverter</b> library is used in this sample to convert markdown into HTML content.',
  placeholder: 'Enter your text here...',
  floatingToolbarOffset: 0,
  editorMode: 'Markdown',
  toolbarSettings: {
    type: 'Expand',
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
  showCharCount: true,
  maxLength: 5000,
  created: onCreate,
});
markdownRTE.appendTo('#markdown-editor');

function onChange() {
  updateValue();
}
function onResizing() {
  markdownRTE.refreshUI();
}
function onCreate() {
  textArea = markdownRTE.contentModule.getEditPanel();
  srcArea = document.querySelector('.source-code');
  updateValue();
}
function updateValue() {
  srcArea.innerHTML = ej.markdownConverter.MarkdownConverter.toHtml(
    markdownRTE.contentModule.getEditPanel().value,
    { lineBreak: true }
  );
}
function updateOrientation() {
  if (ej.base.Browser.isDevice) {
    splitObj.orientation = 'Vertical';
    document.body.querySelector('.heading').style.width = 'auto';
  }
}