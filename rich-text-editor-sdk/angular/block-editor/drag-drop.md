---
layout: post
title: Drag and Drop in Angular Block Editor | Syncfusion
description: Learn how to enable drag and drop in the Angular Block Editor to rearrange single or multiple blocks using the built-in drag handle.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Drag and Drop in Angular Block Editor

The drag and drop feature in the Block Editor allows users to intuitively rearrange content blocks by dragging them to different positions within the editor.

## Enable drag and drop

You can control the drag-and-drop functionality of the Block Editor using the [enableDragAndDrop](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#enabledraganddrop) property on the component. The feature is enabled by default (`true`).

The Block Editor supports both single and multiple block dragging. Users can drag individual blocks or select multiple blocks and drag them together to a new position:

- **Single block dragging** — hover over a block to reveal the drag handle, click and hold the handle, then drag the block to a new position.
- **Multiple block dragging** — select the desired blocks first, then click and drag the entire group to a new location.

During the drag operation, a visual indicator shows precisely where the blocks will be placed when dropped, ensuring accurate placement.

> **To disable drag and drop**, set `[enableDragAndDrop]="false"` on the `<ejs-blockeditor>` element. The drag handle is then hidden, and users cannot reorder blocks with the mouse.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/drag-drop/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/drag-drop/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/drag-drop/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/drag-drop" %}

## Drag-and-drop events

The editor exposes three events you can use to observe or react to drag-and-drop operations programmatically:

| Event | Args | Description |
|-------|------|-------------|
| [blockDragStart](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#blockdragstart) | `BlockDragEventArgs` | Triggers when the user starts dragging a block. |
| [blockDragging](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#blockdragging) | `BlockDragEventArgs` | Triggers repeatedly while a block is being dragged. |
| [blockDropped](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#blockdropped) | `BlockDropEventArgs` | Triggers when the user drops the block in its new position. |

For example, to prevent a drop on a specific block, cancel the `blockDropped` event:

```typescript
public onBlockDropped(args: BlockDropEventArgs): void {
    if (args.droppedBlock?.id === 'protected') {
        args.cancel = true; // disallow moving the protected block
    }
}
```
