---
layout: post
title: To Upper Case in JavaScript Headless Editor | Syncfusion
description: Learn how to configure the To Upper Case extension in the JavaScript Headless Editor, including the toUpperCase command and usage examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# To Upper Case in JavaScript Headless Editor

The `toUpperCaseExtension` registers the `toUpperCase` command, which transforms the literal text characters in the current selection to UPPERCASE.

## Register the extension

```html
<div id="editor"></div>
```

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.toUpperCaseExtension]
});

editor.mount(document.getElementById('editor'));
```

## Commands

| Command | Description |
|---------|-------------|
| `toUpperCase()` | Converts the literal text characters of the current selection to UPPERCASE. |

```js
// Convert the current selection to uppercase
editor.commands.toUpperCase();
```
