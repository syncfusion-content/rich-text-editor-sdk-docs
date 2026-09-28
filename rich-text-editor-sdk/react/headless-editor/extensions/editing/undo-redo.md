---
layout: post
title: Undo and Redo Extension in React Headless Editor | Syncfusion
description: Learn how to configure the Undo and Redo extension in the React Headless Editor, including history depth, grouping, and commands.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Undo and Redo in React Headless Editor

The `undoRedoExtension` registers the `undo` and `redo` commands for navigating the editor's history stack.

## Register the extension

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, undoRedoExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [undoRedoExtension]
        });
        if (editorRef.current) {
            editor.mount(editorRef.current);
        }
        return () => editor.destroy();
    }, []);

    return <div ref={editorRef}></div>;
}

export default App;
```

## Configure undo and redo options

The `undoRedo` extension exposes options for tuning the history stack:

| Option | Description | Default |
|--------|-------------|---------|
| `depth` | Maximum depth of the undo history stack. | `30` |
| `newGroupDelay` | Time in milliseconds after which a new edit forms a new history group. | `300` |

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, undoRedoExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [
                undoRedoExtension.configure({
                    depth: 50,
                    newGroupDelay: 500
                })
            ]
        });
        if (editorRef.current) {
            editor.mount(editorRef.current);
        }
        return () => editor.destroy();
    }, []);

    return <div ref={editorRef}></div>;
}

export default App;
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