---
layout: post
title: Hard Break Extension in React Headless Editor | Syncfusion
description: Learn how to configure the Hard Break extension in the React Headless Editor to insert inline line breaks (<br>) with keyboard shortcuts.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Hard Break in React Headless Editor

The `hardBreakExtension` registers the `hard_break` inline node, which inserts a semantic `<br>` line break within the current text flow without splitting the parent block.

## Register the extension

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, hardBreakExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [hardBreakExtension]
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

## Configure hard break options

The `hardBreak` extension exposes an `htmlAttributes` option that adds custom HTML attributes to rendered `<br>` elements. It defaults to an empty object. Use `.configure()` to set it:

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, hardBreakExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [
                hardBreakExtension.configure({
                    htmlAttributes: { class: 'custom-break' }
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
| `setHardBreak()` | Inserts a hard line break (`<br>`) at the current selection, maintaining the current paragraph or block context. |

```ts
editor.commands.setHardBreak();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Insert Hard Break | <kbd>Shift</kbd> + <kbd>Enter</kbd> | <kbd>Shift</kbd> + <kbd>Enter</kbd> |