---
layout: post
title: Events in Angular Block Editor | Syncfusion
description: Learn how to handle events in the Angular Block Editor, including block changes, selection changes, drag-and-drop, focus, blur, and paste events.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Events in Angular Block Editor

The Block Editor component provides a comprehensive set of events that allow you to monitor and respond to various user interactions and editor state changes. These events enable you to implement custom behaviors, validation, logging, and integration with other systems.

## created

The [created](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#created) event is triggered when the Block Editor component has finished initializing and is ready for use. It is useful for performing setup operations, applying initial focus, or wiring up other components after the editor mounts.

```html
<ejs-blockeditor (created)="onCreated()" />
```

```typescript
public onCreated(): void {
    // Editor is ready; safe to call API methods or focus the editor.
}
```

## blockChanged

The [blockChanged](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#blockchanged) event is triggered whenever the editor's blocks change. This includes block additions, deletions, and any structural modifications to the document. The event arguments expose the affected blocks so you can implement change tracking or autosave:

```html
<ejs-blockeditor (blockChanged)="onBlockChanged($event)" />
```

```typescript
public onBlockChanged(args: BlockChangedEventArgs): void {
    console.log('Blocks changed:', args.blocks);
}
```

## selectionChanged

The [selectionChanged](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#selectionchanged) event is triggered when the user's text selection changes inside the editor. The event arguments describe the new selection and are useful for driving context-aware toolbars or status indicators:

```html
<ejs-blockeditor (selectionChanged)="onSelectionChanged($event)" />
```

## blockDragStart, blockDragging, blockDropped

These three events let you observe or react to drag-and-drop operations on blocks. They are fired in order during a single drag:

* [blockDragStart](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#blockdragstart) — fires once when the user begins dragging a block.
* [blockDragging](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#blockdragging) — fires repeatedly while the block is being dragged.
* [blockDropped](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#blockdropped) — fires once when the user releases the block at its destination. Set `args.cancel = true` to prevent the move.

```html
<ejs-blockeditor
    (blockDragStart)="onBlockDragStart($event)"
    (blockDragging)="onBlockDragging($event)"
    (blockDropped)="onBlockDropped($event)" />
```

```typescript
public onBlockDropped(args: BlockDropEventArgs): void {
    if (args.droppedBlock?.id === 'protected') {
        args.cancel = true; // disallow moving the protected block
    }
}
```

## focus

The [focus](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#focus) event is triggered when the editor gains focus.

```html
<ejs-blockeditor (focus)="onFocus()" />
```

## blur

The [blur](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#blur) event is triggered when the editor loses focus. It is commonly used for auto-saving content, hiding toolbars, or validating the current state:

```html
<ejs-blockeditor (blur)="onBlur()" />
```

## beforePasteCleanup and afterPasteCleanup

These two events bracket every paste operation and let you inspect, modify, or block the pasted content. See the [Paste cleanup](./paste-cleanup.md) page for full details on the `pasteCleanupSettings` model and the event arguments.

* [beforePasteCleanup](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#beforepastecleanup) — fires before the pasted content is inserted. You can cancel the paste or rewrite the content here.
* [afterPasteCleanup](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#afterpastecleanup) — fires after the content is inserted. Useful for post-processing or analytics.

```html
<ejs-blockeditor
    (beforePasteCleanup)="onBeforePasteCleanup($event)"
    (afterPasteCleanup)="onAfterPasteCleanup($event)" />
```