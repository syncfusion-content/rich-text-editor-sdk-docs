---
layout: post
title: Undo and Redo Extension in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Undo and Redo extension in the TypeScript Headless Editor, including history depth, grouping, and commands.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Undo and Redo in TypeScript Headless Editor

The `undoRedoExtension` registers the `undo` and `redo` commands for navigating the editor's history stack.

## Register the extension

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, undoRedoExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [undoRedoExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

## Configure undo and redo options

The `undoRedo` extension exposes options for tuning the history stack:

| Option | Description | Default |
|--------|-------------|---------|
| `depth` | Maximum depth of the undo history stack. | `30` |
| `newGroupDelay` | Time in milliseconds after which a new edit forms a new history group. | `300` |

```html
<div id="editor"></div>
```

```ts
import { HeadlessEditor, undoRedoExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [
        undoRedoExtension.configure({
            depth: 50,
            newGroupDelay: 500
        })
    ]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

## Commands

| Command | Description |
|---------|--------------|
| `undo()` | Reverts the last change in the editor history. |
| `redo()` | Re-applies the most recently undone change. |

```ts
// Undo the last change
editor.commands.undo();

// Redo the last undone change
editor.commands.redo();
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Undo | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> |
| Redo | <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> |