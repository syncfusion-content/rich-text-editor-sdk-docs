---
layout: post
title: Font Family Mark in React Headless Editor | Syncfusion
description: Learn how to configure the Font Family mark in the React Headless Editor, including setFontFamily and unsetFontFamily commands.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Font Family Mark in React Headless Editor

The `fontFamilyExtension` registers the `fontFamily` capability, which applies a font family to text. Family values are stored using the shared `textStyle` mark, allowing font family to coexist with other text style attributes such as font size, font color, and background color. It contributes the `setFontFamily` and `unsetFontFamily` commands. Family names that contain spaces are automatically wrapped in double quotes in the generated CSS.

## Register the extension

```tsx
import * as React from 'react';
import { useRef, useEffect } from 'react';
import { HeadlessEditor, fontFamilyExtension } from '@syncfusion/ej2-headless-editor';

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [fontFamilyExtension]
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
| `setFontFamily({ family })` | Applies the specified font family to the current selection. |
| `unsetFontFamily()` | Removes the font family from the current selection. |

```ts
// Apply Arial to the current selection
editor.commands.setFontFamily({ family: 'Arial' });

// Apply a font stack with fallback
editor.commands.setFontFamily({ family: '"Helvetica Neue", Arial, sans-serif' });

// Remove the font family from the current selection
editor.commands.unsetFontFamily();
```