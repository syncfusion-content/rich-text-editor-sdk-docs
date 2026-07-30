var rangeObj = new ej.inputs.Slider({
  value: [0, 50],
  type: 'Range',
  min: 0,
  max: 400,
  change: onChange,
});
rangeObj.appendTo('#range');

var editor = new ej.richtexteditor.RichTextEditor({
  value: `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, hyperlinks, uploads, etc. Contains undo/redo manager.</p>`,
  height: 400,

  created: () => {
    setTimeout(() => {
      const panel = editor.contentModule.getEditPanel();
      const realLength = panel.textContent.length;

      rangeObj.max = realLength;
      rangeObj.dataBind();

      // Focus the editor to activate selection
      panel.focus();

      // Apply initial selection
      onChange({ value: rangeObj.value });
    }, 100); // Delay slightly to ensure DOM is ready
  },
});
editor.appendTo('#editor');

function getTextNodeAtOffset(root, offset) {
  let currentOffset = 0;

  // Create a TreeWalker to traverse only text nodes inside the root
  const walker = document.createTreeWalker(
    root,
    NodeFilter.SHOW_TEXT, // Only consider text nodes
    null,
    false
  );

  // Traverse each text node
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const nodeLength = node.textContent.length;

    // Check if the desired offset falls within this node
    if (currentOffset + nodeLength >= offset) {
      return {
        node, // The text node where the offset is located
        offset: offset - currentOffset, // Offset relative to this node
      };
    }

    // Accumulate the total offset as we move through nodes
    currentOffset += nodeLength;
  }

  // If offset is beyond total text length, return null
  return null;
}

function onChange(args) {
  const [start, end] = args.value;
  const panel = editor.contentModule.getEditPanel();
  const maxLength = panel.textContent.length;

  // Ensure start and end are within valid bounds
  const safeStart = Math.min(start, maxLength);
  const safeEnd = Math.min(end, maxLength);

  // Find the text node and relative offset for both start and end
  const startInfo = getTextNodeAtOffset(panel, safeStart);
  const endInfo = getTextNodeAtOffset(panel, safeEnd);

  if (startInfo && endInfo) {
    const range = document.createRange();
    range.setStart(startInfo.node, startInfo.offset);
    range.setEnd(endInfo.node, endInfo.offset);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
