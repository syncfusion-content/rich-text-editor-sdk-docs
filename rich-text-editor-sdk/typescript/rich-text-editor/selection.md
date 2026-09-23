---
layout: post
title: Selection in TypeScript Rich Text Editor | Syncfusion
description: Learn how to select text, nodes, table cells, and content programmatically in the TypeScript Rich Text Editor for advanced editing workflows.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Selection in TypeScript Rich Text Editor

## Text selection

The Rich Text Editor supports character range-based text selection using the **Syncfusion Slider** control. This feature allows users to select a specific range of characters (for example, 33–45) within the editor content, which is then automatically highlighted.

### Prerequisites

Import the `Slider` module from `@syncfusion/ej2-inputs` and inject the required Rich Text Editor modules (`Toolbar`, `HtmlEditor`) before creating the editor.

### Adding a Slider for character range selection

The Rich Text Editor can be integrated with the **Slider** control to enable precise character range-based text selection. The slider is configured with `type: 'Range'`, allowing users to select a start and end index within the editor content. When the slider values change, the corresponding text range is highlighted automatically.

This approach is particularly useful for scenarios where exact character-level selection is required for operations such as copying, formatting, or analysis.

{% tabs %}
{% highlight ts tabtitle="app.ts" %}

let rangeObj: Slider = new Slider({
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
{% highlight ts tabtitle="app.ts" %}

let editor: RichTextEditor = new RichTextEditor({
  value: `<p>The Rich Text Editor, a WYSIWYG editor...</p>`,
  height: 400,
  created: (): void => {
    setTimeout(() => {
      const panel = editor.contentModule.getEditPanel() as HTMLElement;
      const realLength = panel.textContent?.length ?? 0;

      rangeObj.max = realLength;  // Update slider max
      rangeObj.dataBind();
      panel.focus();              // Ensure selection is visible

      onChange({ value: rangeObj.value } as SliderChangeEventArgs);
    }, 100);
  },
});
editor.appendTo('#editor');

{% endhighlight %}
{% endtabs %}

### Precise selection using DOM range

The selection logic is implemented in the [change](https://ej2.syncfusion.com/documentation/api/slider/index-default#change) event of the slider. It retrieves the start and end positions from the slider and ensures they are within valid bounds. The code then uses a helper function, `getTextNodeAtOffset()`, which employs a `TreeWalker` to traverse text nodes and locate the exact node and offset for the given character positions.

A `Range` object is created using these offsets and applied to the current selection using the browser’s `Selection` API. This guarantees accurate highlighting even when the content spans multiple text nodes.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

function onChange(args: SliderChangeEventArgs): void {
  const [start, end] = args.value as number[];
  const panel = editor.contentModule.getEditPanel() as HTMLElement;
  const maxLength = panel.textContent?.length ?? 0;

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
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
}

{% endhighlight %}
{% endtabs %}

### Helper function for accurate offset calculation

The `getTextNodeAtOffset()` function uses a `TreeWalker` to traverse text nodes inside the editor and determine the exact node and offset for a given character index. This ensures that even complex content structures are handled correctly.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}

function getTextNodeAtOffset(root: Node, offset: number): { node: Text; offset: number } | null {
  let currentOffset = 0;
  const walker: TreeWalker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);

  while (walker.nextNode()) {
    const node = walker.currentNode as Text;
    const nodeLength = node.textContent.length;

    if (currentOffset + nodeLength >= offset) {
      return { node, offset: offset - currentOffset };
    }
    currentOffset += nodeLength;
  }
  return null;
}

{% endhighlight %}
{% endtabs %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/selection/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/selection/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/selection" %}

## Node selection

Node selection allows users to programmatically select entire HTML elements (nodes) such as paragraphs, images, or tables within the Rich Text Editor. This is useful when you want to highlight or manipulate specific content blocks without relying on manual user selection.

The following example demonstrates how to select a paragraph node programmatically using the browser's native `Range` and `Selection` APIs.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/node-selection/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/node-selection/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/node-selection" %}

## Cell selection

Cell selection allows users to programmatically select specific table cells within the Rich Text Editor. This is useful for highlighting or manipulating content inside tables without requiring manual user interaction.

The following example demonstrates how to select a table cell programmatically using the browser's native `Range` and `Selection` APIs.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/cell-selection/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/cell-selection/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/cell-selection" %}

## Select all content

To select all content within the Rich Text Editor, use the [`selectAll`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#selectall) method. This method highlights all the text and elements inside the editor, allowing users to perform actions such as formatting or deleting the entire content.

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/select-all/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/select-all/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/select-all" %}
