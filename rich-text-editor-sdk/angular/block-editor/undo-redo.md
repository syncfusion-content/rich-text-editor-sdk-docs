---
layout: post
title: Undo and Redo in Angular Block Editor | Syncfusion
description: Learn how to configure undo and redo in Angular Block Editor, customize the undo/redo history stack, and restore editing actions.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Undo and Redo in Angular Block Editor

The undo/redo feature in Block Editor enables users to revert or reapply changes made to the content, offering a safety net for edits and enhancing the overall editing experience.

## Keyboard shortcuts

The Block Editor responds to the following standard keyboard shortcuts for undo and redo:

| Action | Windows | Mac | Description |
|--------|---------|-----|-------------|
| Undo | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> | Reverts the last action. |
| Redo | <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> | Reapplies the last undone action. |

## Configuring the undo/redo stack

The Block Editor stores a history of actions, allowing users to perform undo and redo operations. By default, it retains up to `30` actions. You can customize this limit through the [undoRedoStack](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#undoredostack) property on the editor, which sets the maximum number of steps that can be undone or redone.

The example below sets the undo/redo history limit to `20` actions. The editor then keeps the last 20 changes in memory and discards anything older.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/undo-redo/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/undo-redo/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/undo-redo/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/undo-redo" %}

> **Memory note:** Each entry in the undo/redo stack is a snapshot of the affected block, so a very large `undoRedoStack` value (for example, several hundred) can noticeably increase memory consumption in long-lived editor sessions. Tune this value to match how many changes a user is realistically likely to undo.

## Programmatic undo/redo

The Block Editor does not expose public `undo()` / `redo()` methods. The undo and redo operations are triggered through the keyboard shortcuts (or any UI that simulates them). If you need to react to undo and redo state changes programmatically, observe the editor's [blockChanged](events.html#blockChanged) event and track the change direction in your own state, or wire up custom buttons that dispatch the same keyboard events to the editor element:

```html
<button (click)="triggerUndo()">Undo</button>
<button (click)="triggerRedo()">Redo</button>

<ejs-blockeditor #editor [blocks]="blocksData" />
```

```typescript
import { ViewChild, ElementRef } from '@angular/core';
// ...
@ViewChild('editor') public editor!: ElementRef;

public triggerUndo(): void {
    // The editor listens for Ctrl+Z / Cmd+Z on its host element.
    this.editor.nativeElement.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'z', ctrlKey: true, bubbles: true })
    );
}

public triggerRedo(): void {
    this.editor.nativeElement.dispatchEvent(
        new KeyboardEvent('keydown', { key: 'y', ctrlKey: true, bubbles: true })
    );
}
```

For most apps, prefer the built-in [inline toolbar](editor-menus.html#inline-toolbar) and the [context menu](editor-menus.html#context-menu) actions, which already include undo and redo entries by default.
