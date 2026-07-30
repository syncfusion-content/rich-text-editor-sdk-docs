var editor = new ej.richtexteditor.RichTextEditor({
  value: `<p>This is paragraph one.</p><p>This is paragraph two.</p>`,
});
editor.appendTo('#editor');

document.getElementById('btn').onclick = function () {
  const panel = editor.contentModule.getEditPanel();
  const paragraphs = panel.querySelectorAll('p');

  if (paragraphs.length > 1) {
    const range = document.createRange();
    range.selectNode(paragraphs[1]); // Select the second paragraph

    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
};
