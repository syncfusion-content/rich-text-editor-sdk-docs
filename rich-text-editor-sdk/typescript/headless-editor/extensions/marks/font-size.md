---
layout: post
title: Font Size Mark in TypeScript Headless Editor | Syncfusion
description: Learn how to configure the Font Size mark in the TypeScript Headless Editor, including setFontSize, unsetFontSize commands, and HTML output.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Font Size Mark in TypeScript Headless Editor

The `fontSizeExtension` registers the `fontSize` capability, which applies a font size to text. Size values are stored using the shared `textStyle` mark, allowing font size to coexist with other text style attributes such as font family, font color, and background color. It contributes the `setFontSize` and `unsetFontSize` commands.

Supported size formats include absolute units (`14px`, `12pt`), relative units (`1.2em`, `0.9rem`, `150%`), and CSS keywords (`small`, `medium`, `large`, `x-large`).

## Register the extension

```typescript
import { HeadlessEditor, fontSizeExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [fontSizeExtension]
});
```

## Commands

| Command | Description |
|---------|-------------|
| `setFontSize({ size })` | Applies the specified font size to the current selection. |
| `unsetFontSize()` | Removes the font size from the current selection. |

```typescript
// Apply 14px font size to the current selection
editor.commands.setFontSize({ size: '14px' });

// Remove the font size from the current selection
editor.commands.unsetFontSize();
```