---
layout: post
title: To Lower Case in JavaScript Headless Editor | Syncfusion
description: Learn how to configure the To Lower Case extension in the JavaScript Headless Editor, including the toLowerCase command and usage examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# To Lower Case in JavaScript Headless Editor

The `toLowerCaseExtension` registers the `toLowerCase` command, which transforms the literal text characters in the current selection to lowercase.

## Register the extension

```html
<div id="editor"></div>
```

```javascript
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.toLowerCaseExtension]
});

editor.mount(document.getElementById('editor'));
```

## Commands

| Command | Description |
|---------|-------------|
| `toLowerCase()` | Converts the literal text characters of the current selection to lowercase. |

```javascript
// Convert the current selection to lowercase
editor.commands.toLowerCase();
```
