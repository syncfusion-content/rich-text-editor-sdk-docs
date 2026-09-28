---
layout: post
title: Block Quote Extension in React Headless Editor | Syncfusion
description: Learn how to configure the Block Quote extension in the React Headless Editor, including commands, shortcuts, and markdown input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Block Quote in React Headless Editor

The `blockquoteExtension` registers the `blockquote` block container node, which renders quoted content inside a semantic `<blockquote>` tag.

## Register the extension

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, blockquoteExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [blockquoteExtension]
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

## Configure block quote options

The `blockquote` extension exposes an `htmlAttributes` option that adds custom HTML attributes to the rendered `<blockquote>` element. It defaults to an empty object. Use `.configure()` to set it:

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, blockquoteExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [
                blockquoteExtension.configure({
                    htmlAttributes: { class: 'custom-quote' }
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
| `toggleBlockQuote()` | Toggles the block quote wrapper on the current block or selection. If the selection is already inside a block quote, it unwraps the content back to regular blocks. |

```ts
editor.commands.toggleBlockQuote();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Block Quote | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Q</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>Q</kbd> |

## Input rules

Type `>` followed by a space at the start of an empty line to wrap the current block in a block quote.