---
layout: post
title: Indent Outdent Extension in React Headless Editor | Syncfusion
description: Learn how to configure the Indent and Outdent extension in the React Headless Editor, including structural indentation and Tab handling.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Indent and Outdent in React Headless Editor

The `indentOutdentExtension` registers the `indent` and `outdent` commands and wires <kbd>Tab</kbd> and <kbd>Shift</kbd> + <kbd>Tab</kbd> handling for structural indentation control.

## Register the extension

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: []
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

The Tab key behavior is controlled by the `enableTabKey` editor configuration. When `true`, the editor automatically registers `indentOutdentExtension` and plain blocks fall back to inserting 4 spaces on <kbd>Tab</kbd>.

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [],
            enableTabKey: true
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

I> When `config.enableTabKey` is `true`, the editor automatically registers `indentOutdentExtension`. Register it manually only if you need to call `indent()` or `outdent()` programmatically without enabling the Tab key.

## Commands

| Command | Description |
|---------|--------------|
| `indent()` | Increases the indentation of the current block or selection by one step.|
| `outdent()` | Decreases the indentation of the current block or selection by one step. When the block is already at the root indent, the call has no effect. |

```ts
// Increase indentation of the current block
editor.commands.indent();

// Decrease indentation
editor.commands.outdent();
```

## Keyboard shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Increase indent | <kbd>Tab</kbd> | <kbd>Tab</kbd> |
| Decrease indent | <kbd>Shift</kbd> + <kbd>Tab</kbd> | <kbd>Shift</kbd> + <kbd>Tab</kbd> |
| Outdent at the start of an indented block | <kbd>Backspace</kbd> | <kbd>Backspace</kbd> |

I> When `enableTabKey` is `true` and the cursor is not at a structural position, <kbd>Tab</kbd> inserts 4 spaces and <kbd>Shift</kbd> + <kbd>Tab</kbd> removes 4 trailing spaces.