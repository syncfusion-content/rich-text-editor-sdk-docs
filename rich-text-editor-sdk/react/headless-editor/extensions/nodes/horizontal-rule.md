---
layout: post
title: Horizontal Rule Extension in React Headless Editor | Syncfusion
description: Learn how to configure the Horizontal Rule extension in the React Headless Editor, including insertion commands and markdown input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Horizontal Rule in React Headless Editor

The `horizontalRuleExtension` registers the `horizontalRule` leaf node for visual dividers rendered as semantic `<hr>` elements.

## Register the extension

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, horizontalRuleExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [horizontalRuleExtension]
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

## Configure horizontal rule options

The `horizontalRule` extension exposes an `htmlAttributes` option that adds custom HTML attributes to rendered `<hr>` elements. It defaults to an empty object. Use `.configure()` to set it:

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, horizontalRuleExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [
                horizontalRuleExtension.configure({
                    htmlAttributes: { class: 'custom-divider' }
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
| `setHorizontalRule()` | Inserts a horizontal rule at the current cursor position. When the current block is empty, the empty block is replaced with the rule. Otherwise, the rule is inserted below the target block at the cursor position. |

```ts
editor.commands.setHorizontalRule();
```

## Input rules

Type any of the following sequences on an empty line to insert a horizontal rule:

* `---` (three hyphens)
* `***` (three asterisks)
* `___` (three underscores)