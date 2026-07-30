---
layout: post
title: Events in JavaScript Block Editor control | Syncfusion
description: Checkout and learn about Events with JavaScript Block Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Events in JavaScript Block Editor control

The Block Editor control provides a comprehensive set of events that allow you to monitor and respond to various user interactions and editor state changes. These events enable you to implement custom behaviors, validation, logging, and integration with other systems.

## Created

The [created](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#created) event is triggered when the Block Editor control is successfully initialized and ready for use. This event is useful for performing setup operations or initializing additional features after the editor is created.

```typescript
const editor = new BlockEditor({
    created: () => {
        // You may initialize custom plugins or features
    }
});
```

## BlockChanged

The [blockChanged](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#blockchanged) event is triggered whenever the editor blocks are changed. This includes block additions, deletions, or any structural modifications to the document. Its event handler receives details about the changes.

```typescript
const editor = new BlockEditor({
    contentChanged: (args: BlockChangedEventArgs) => {
        // You may implement auto-save functionality
    }
});
```

## SelectionChanged

The [selectionChanged](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#selectionchanged) event is triggered when the user's text selection changes within the editor. The event arguments contain details about the new selection, which can be useful for updating UI elements.

```typescript
const editor = new BlockEditor({
    selectionChanged: (args: SelectionChangedEventArgs) => {
        // You can update formatting toolbar based on selection
    }
});
```

## BlockDragStart

The [blockDragStart](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#blockdragstart) event is triggered at the beginning of a block drag operation, providing information about the blocks being dragged and their initial position.

```typescript
const editor = new BlockEditor({
    blockDragStart: (args: BlockDragEventArgs) => {
        // You may cancel the drag operation for certain block types
        // or trigger custom actions when a block drag operation starts
    }
});
```

## BlockDrag

The [blockDragging](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#blockdragging) event is triggered continuously during a dragging operation, providing information about the blocks being dragged and their current position.

```typescript
const editor = new BlockEditor({
    blockDrag: (args: BlockDraggingEventArgs) => {
        // You may trigger custom actions during a block drag operation based on the current position
    }
});
```

## BlockDrop

The [blockDropped](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#blockdropped) event is triggered when blocks are successfully dropped at their destination during a drag-and-drop operation. This event includes data about the drop target and position.

```typescript
const editor = new BlockEditor({
    blockDrop: (args: BlockDroppedEventArgs) => {
        // You may trigger custom actions when blocks are dropped
    }
});
```

## Focus

The [focus](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#focus) event is triggered when the editor gains focus. This is useful for updating UI states and managing editor interactions.

```typescript
const editor = new BlockEditor({
    focus: (args: FocusEventArgs) => {
        // Custom actions when the editor gains focus
    }
});
```

## Blur

The [blur](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#blur) event is triggered when the editor loses focus. This is commonly used for auto-saving content or hiding UI elements that should only be visible when the editor is active.

```typescript
const editor = new BlockEditor({
    blur: (args: BlurEventArgs) => {
        // Custom actions when the editor loses focus
    }
});
```

## BeforePasteCleanup

The [beforePasteCleanup](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#beforepastecleanup) event is triggered before content is pasted into the editor. This event allows you to inspect, modify, or cancel the paste operation via its event arguments.

```typescript
const editor = new BlockEditor({
    beforePaste: (args: BeforePasteCleanupEventArgs) => {
        // You may cancel paste if content contains restricted elements
    }
});
```

## AfterPasteCleanup

The [afterPasteCleanup](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#afterpastecleanup) event is triggered after content has been successfully pasted into the editor. This is useful for post-processing pasted content or updating related UI elements.

```typescript
const editor = new BlockEditor({
    afterPaste: (args: AfterPasteCleanupEventArgs) => {
        // Process pasted content or update UI
    }
});
```