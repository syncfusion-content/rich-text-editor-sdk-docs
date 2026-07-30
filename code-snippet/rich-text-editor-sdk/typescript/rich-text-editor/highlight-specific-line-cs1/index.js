import { NodeSelection } from '@syncfusion/ej2-react-richtexteditor';

var editor = new ej.richtexteditor.RichTextEditor({
  value: `<p>The Rich Text Editor component is the WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update content. Users can format their content using standard toolbar commands.</p>`,
});

editor.appendTo('#editor');

var nodeSelection = new NodeSelection();

document.getElementById('btn').onclick = function () {
  const rteContent = editor.contentModule.getDocument();
  const firstParagraph = editor.contentModule.getEditPanel().querySelector('p');

  if (firstParagraph && firstParagraph.firstChild) {
    nodeSelection.setSelectionText(
      rteContent,
      firstParagraph.firstChild,
      firstParagraph.firstChild,
      4, // Start index
      20 // End index
    );
    editor.executeCommand('backColor', 'yellow');
  }
};
