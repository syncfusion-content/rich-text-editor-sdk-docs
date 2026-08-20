---
layout: post
title: Drag and Drop in Vue Block Editor | Syncfusion
description: Learn how to enable drag and drop in the Vue Block Editor to rearrange single or multiple blocks using the built-in drag handle.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Drag and Drop in Vue Block Editor

The drag and drop feature in the Block Editor allows users to intuitively rearrange content blocks by dragging them to different positions within the editor.

## Enable Drag and Drop

You can control the drag and drop functionality within the Block Editor using the [enableDragAndDrop](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#enabledraganddrop) property. This feature is enabled by default (`true`).

## Dragging blocks

When drag and drop is enabled, users can rearrange single or multiple blocks in the following ways:

- **Single Block Dragging**: To drag a single block, hover over it to reveal the drag handle. Click and hold the handle, then drag the block to a new position.

- **Multiple Block Dragging**: To move multiple blocks, first select the desired blocks. Once selected, click and drag the entire group to a new location.

During the drag operation, a visual indicator will show precisely where the blocks will be placed when dropped, ensuring accurate placement.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/drag-drop/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/drag-drop/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/drag-drop" %}
