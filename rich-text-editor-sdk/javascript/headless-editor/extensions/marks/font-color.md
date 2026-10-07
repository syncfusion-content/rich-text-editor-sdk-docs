---
layout: post
title: Font Color Mark in JavaScript Headless Editor | Syncfusion
description: Learn how to configure the Font Color mark in the JavaScript Headless Editor, including setColor, unsetColor commands, and HTML output.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Font Color Mark in JavaScript Headless Editor

The `fontColorExtension` registers the `fontColor` capability, which applies a foreground color to text. Color values are stored using the shared `textStyle` mark, allowing color to coexist with other text style attributes such as font family, font size, and background color. It contributes the `setColor` and `unsetColor` commands.

Supported color formats include hex values (`#ff0000`), RGB/RGBA values (`rgb(255, 0, 0)`), and named CSS colors.

## Register the extension

```html
<div id="editor"></div>
```

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.fontColorExtension]
});

editor.mount(document.getElementById('editor'));
```

## Commands

| Command | Description |
|---------|-------------|
| `setColor({ color })` | Applies the specified color to the current selection. |
| `unsetColor()` | Removes the font color from the current selection. |

```js
// Apply red color to the current selection
editor.commands.setColor({ color: '#ff0000' });

// Remove the font color from the current selection
editor.commands.unsetColor();
```
