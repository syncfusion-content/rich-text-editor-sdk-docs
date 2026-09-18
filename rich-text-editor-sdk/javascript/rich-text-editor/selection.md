---
layout: post
title: Selection in JavaScript Rich Text Editor | Syncfusion
description: Learn how to select text, nodes, table cells, and content programmatically in the JavaScript Rich Text Editor for advanced editing workflows.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Selection in JavaScript Rich Text Editor

## Text selection

The Rich Text Editor supports character range-based text selection using the **Syncfusion Slider** control. This feature allows users to select a specific range of characters (e.g., 33–45) within the editor content, which is then automatically highlighted.

### Adding a Slider for character range selection

The Rich Text Editor can be integrated with the **Slider** control to enable precise character range-based text selection. The slider is configured in `range` type, allowing users to select a start and end index within the editor content. When the slider values change, the corresponding text range is highlighted automatically. 

This approach is particularly useful for scenarios where exact character-level selection is required for operations such as copying, formatting, or analysis.

{% tabs %}
{% highlight js tabtitle="index.js" %}

var rangeObj = new ej.inputs.Slider({
  value: [0, 50],
  type: 'Range',
  min: 0,
  max: 400,
  change: onChange,
});
rangeObj.appendTo('#range');

{% endhighlight %}
{% endtabs %}

### Dynamic range adjustment based on content

When the editor is created, the actual length of the text content is calculated, and the slider’s maximum value is updated dynamically to match this length. This ensures that the slider range always reflects the current content size. The editor is also focused programmatically to make the selection visible, and an initial selection is applied based on the slider’s default values.

{% tabs %}
{% highlight js tabtitle="index.js" %}

var editor = new ej.richtexteditor.RichTextEditor({
  value: `<p>The Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, hyperlinks, uploads, etc. Contains undo/redo manager.</p>`,
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

{% endhighlight %}
{% endtabs %}

### Precise selection using DOM range

The selection logic is implemented in the [change](https://ej2.syncfusion.com/documentation/api/slider/index-default#change) event of the slider. It retrieves the start and end positions from the slider and ensures they are within valid bounds. The code then uses a helper function, `getTextNodeAtOffset()`, which employs a `TreeWalker` to traverse text nodes and locate the exact node and offset for the given character positions.

A Range object is created using these offsets and applied to the current selection using the browser’s `Selection` API. This guarantees accurate highlighting even when the content spans multiple text nodes.

{% tabs %}
{% highlight js tabtitle="index.js" %}

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

{% endhighlight %}
{% endtabs %}

### Helper function for accurate offset calculation

The `getTextNodeAtOffset()` function uses a `TreeWalker` to traverse text nodes inside the editor and determine the exact node and offset for a given character index. This ensures that even complex content structures are handled correctly. The function returns `{ node, offset }` on success or `null` if the offset lies beyond the total text length.

{% tabs %}
{% highlight js tabtitle="index.js" %}

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

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/selection/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/selection/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/selection" %}

## Node selection

Node selection allows users to programmatically select entire HTML elements (nodes) such as paragraphs, images, or tables within the Rich Text Editor. This is useful when you want to highlight or manipulate specific content blocks without relying on manual user selection.

The following example demonstrates how to select a paragraph node programmatically using the browser's native `Range` and `Selection` APIs.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/node-selection/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/node-selection/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/node-selection" %}

## Cell selection

Cell selection allows users to programmatically select specific table cells within the Rich Text Editor. This is useful for highlighting or manipulating content inside tables without requiring manual user interaction.

The following example demonstrates how to select a table cell programmatically using the browser's native `Range` and `Selection` APIs.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/cell-selection/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/cell-selection/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/cell-selection" %}

## Select all content

To select all content within the Rich Text Editor, use the [selectAll](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#selectall) method. This method highlights all the text and elements inside the editor, allowing users to perform actions such as formatting or deleting the entire content.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/select-all/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/select-all/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/select-all" %}
