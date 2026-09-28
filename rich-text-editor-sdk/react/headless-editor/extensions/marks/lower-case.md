---
layout: post
title: To Lower Case in React Headless Editor | Syncfusion
description: Learn how to configure the To Lower Case extension in the React Headless Editor, including the toLowerCase command and usage examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# To Lower Case in React Headless Editor

The `toLowerCaseExtension` registers the `toLowerCase` command, which transforms the literal text characters in the current selection to lowercase.

## Register the extension

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, toLowerCaseExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [toLowerCaseExtension]
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
|---------|-------------|
| `toLowerCase()` | Converts the literal text characters of the current selection to lowercase. |

```ts
// Convert the current selection to lowercase
editor.commands.toLowerCase();
```