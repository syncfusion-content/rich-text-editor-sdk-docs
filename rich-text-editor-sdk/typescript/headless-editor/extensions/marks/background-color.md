---
layout: post
title: Background Color Mark in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Background Color mark in the TypeScript Headless Editor, including setHighlight, unsetHighlight commands, and HTML output.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Background Color Mark in TypeScript Headless Editor

The `backgroundColorExtension` registers the `backgroundColor` capability, which applies a background highlight to text. Color values are stored using the shared `textStyle` mark, allowing background color to coexist with other text style attributes such as font family, font size, and font color. It contributes the `setHighlight` and `unsetHighlight` commands.

Supported color formats include hex values (`#ffff00`), RGB/RGBA values (`rgb(255, 255, 0)`), and named CSS colors (`yellow`).

## Register the extension

```typescript
import { HeadlessEditor, backgroundColorExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [backgroundColorExtension]
});
```

## Commands

| Command | Description |
|---------|-------------|
| `setHighlight({ color })` | Applies the specified background color to the current selection. |
| `unsetHighlight()` | Removes the background color from the current selection. |

```typescript
// Apply yellow highlight to the current selection
editor.commands.setHighlight({ color: '#ffff00' });

// Remove the highlight from the current selection
editor.commands.unsetHighlight();
```
