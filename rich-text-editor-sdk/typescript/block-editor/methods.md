---
layout: post
title: Methods in TypeScript Block Editor control | Syncfusion
description: Checkout and learn about Methods with TypeScript Block Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Methods in TypeScript Block Editor control

The Block Editor control provides a comprehensive set of public methods to programmatically interact with and manipulate the editor content. These methods enable adding, removing, updating, and managing blocks, as well as controlling selection, formatting, and other editor operations.

## Block Management Methods

### Adding a block

Add a new block to the editor at a specified position using the [addBlock](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#addblock) method. This method can also insert the block before or after a target block.

```typescript
// Add a new paragraph block after a specific block
const newBlock: BlockModel = {
    id: 'new-block',
    type: 'Paragraph',
    content: [
        {
            type: ContentType.Text,
            content: 'This is a newly added block'
        }
    ]
};

editor.addBlock(newBlock, 'target-block-id', true); // true = after, false = before
```

### Removing a block

Remove a block from the editor using the [removeBlock](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#removeblock) method.

```typescript
// Remove a block by its ID
editor.removeBlock('block-to-remove-id');
```

### Moving a block

Move a block from one position to another within the editor using the [moveBlock](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#moveblock) method.

```typescript
// Move a block to a new position
editor.moveBlock('source-block-id', 'target-block-id');
```

### Updating a block

Update the properties of an existing block with the [updateBlock](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#updateblock) method. Only the specified properties are modified, while others remain unchanged. It returns `true` if the update was successful and `false` otherwise.

```typescript
// Update block properties
editor.updateBlock('block-id', {
    isChecked: true
});
```

### Getting a block

Retrieve a block model by its unique identifier using the [getBlock](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#getblock) method. It returns `null` if the block is not found.

```typescript
// Get a specific block
editor.getBlock('block-id');
```

### Getting block count

Use the [getBlockCount](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#getblockcount) method to retrieve the total number of blocks in the editor.

```typescript
// Get total block count
editor.getBlockCount();
```

Below example demonstrates the usage of the above methods.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/block" %}
{% endif %}

## Selection and Cursor Methods

### Setting text selection

Set the text selection within a specific content element using start and end positions with the [setSelection](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#setselection) method.

```typescript
// Select text from position 5 to 15 in a content element
editor.setSelection('content-element-id', 5, 15);
```

### Setting cursor position

Place the cursor at a specific position within a block using the [setCursorPosition](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#setcursorposition) method.

```typescript
// Set cursor at position 10 in a block
editor.setCursorPosition('block-id', 10);
```

### Getting selected blocks

Retrieve the currently selected blocks in the editor with the [getSelectedBlocks](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#getselectedblocks) method. It returns `null` if no blocks are selected.

```typescript
// Get all selected blocks
editor.getSelectedBlocks();
```

### Getting selection range

Get the current selection range in the editor using the [getRange](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#getrange) method. This method returns a `Range` object representing the selected text, or `null` if no selection is active.

```typescript
// Get current selection range
editor.getRange();
```

### Setting selection range

Set the selection range in the editor using the [selectRange](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#selectrange) method. This method accepts a `Range` object that defines the start and end positions of the selection.

```typescript
// Create and select a custom range
editor.selectRange(customRange);
```

### Selecting a block

Select a specific block in the editor using the [selectBlock](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#selectblock) method.

```typescript
// Select a complete block
editor.selectBlock('block-id');
```

### Selecting all blocks

Select all blocks in the editor using the [selectAllBlocks](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#selectallblocks) method.

```typescript
// Select all content in the editor
editor.selectAllBlocks();
```

Below example demonstrates the usage of the above methods.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/selection/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/selection/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/selection" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/selection/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/selection/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/selection" %}
{% endif %}

## Focus Management Methods

### FocusIn

You can utilize the [focusIn](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#focusin) method to give focus to the editor. This method ensures that the editor is ready for user input.

```typescript
// Focus the editor
editor.focusIn();
```

### FocusOut

You can remove focus from the editor using the [focusOut](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#focusout) method. This method clears any active selections and makes the editor inactive for user input.

```typescript
// Remove focus from the editor
editor.focusOut();
```

## Formatting Methods

### Executing toolbar action

You can execute a built-in toolbar formatting command using the [executeToolbarAction](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#executetoolbaraction) method. This method is used to apply formatting such as bold, italic, or color to the selected text.

```typescript
// Apply bold formatting
editor.executeToolbarAction(BuiltInToolbar.Bold);

// Apply color formatting with a specific value
editor.executeToolbarAction(BuiltInToolbar.Color, '#ff0000');
```

### Enabling toolbar items

You can enable specific toolbar items in the inline toolbar using the [enableToolbarItems](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#enabletoolbaritems) method. This method accepts a single item or an array of items to be enabled.

```typescript
// Enable specific toolbar item
editor.enableToolbarItems('bold');

// Work with multiple items
editor.enableToolbarItems(['bold', 'italic', 'underline']);
```

### Disabling toolbar items

You can disable specific toolbar items in the inline toolbar using the [disableToolbarItems](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#disabletoolbaritems) method. This method accepts a single item or an array of items to be disabled.

```typescript
// Disable specific toolbar items
editor.disableToolbarItems('bold');

// Work with multiple items
editor.disableToolbarItems(['bold', 'italic', 'underline']);
```

Below example demonstrates the usage of the above methods.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/formatting/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/formatting/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/formatting" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/formatting/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/formatting/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/formatting" %}
{% endif %}

## Data Export Methods

### Getting data as JSON

You can export the editor content in JSON format using the [getDataAsJson](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#getdataasjson) method. This method allows you to export all blocks or a specific block.

```typescript
// Get all blocks as JSON
const allBlocks = editor.getDataAsJson();

// Get a specific block as JSON
const specificBlock = editor.getDataAsJson('block-id');
```

### Getting data as HTML

Export the editor content in HTML format using the [getDataAsHtml](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#getdataashtml) method. This method allows exporting all blocks or a specific block.

```typescript
// Get all blocks as HTML
const allBlocksHtml: string = editor.getDataAsHtml();

// Get a specific block as HTML
const specificBlockHtml: string = editor.getDataAsHtml('block-id');
```

### Rendering Blocks from JSON

Renders blocks from JSON data using the [renderBlocksFromJson](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#renderblocksfromjson) method. This method allows either replacing all existing content or inserting at the cursor position.

```typescript
// Replace all existing content
const replaceAllBlocks = editor.renderBlocksFromJson(jsonData, true);

// Insert at cursor without replacing existing blocks (default behavior)
const insertedAtCursor = editor.renderBlocksFromJson(jsonData);

// Insert after a specific block (only applicable when replace = false)
const insertedAfterTarget = editor.renderBlocksFromJson(jsonData, false, 'target-block-id');
```

### Parsing HTML to Blocks

Convert an HTML string into an array of `BlockModel` objects using the [parseHtmlToBlocks](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#parsehtmltoblocks) method. This method allows transforming HTML content into structured editor blocks.

```typescript
// Parse HTML into block
const blocks: BlockModel[] = editor.parseHtmlToBlocks(html);
```

### Printing editor content

Print the editor content using the [print](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#print) method. This action opens the browser's print dialog with the current editor content.

```typescript
// Print the editor content
editor.print();
```

Below example demonstrates the usage of the above methods.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/data/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/data/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/data" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/data/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/data/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/methods/data" %}
{% endif %}