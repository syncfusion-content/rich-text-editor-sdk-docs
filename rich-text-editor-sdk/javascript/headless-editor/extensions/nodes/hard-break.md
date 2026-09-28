---
layout: post
title: Hard Break Extension in JavaScript Headless Editor | Syncfusion
description: Learn how to configure the Hard Break extension in the JavaScript Headless Editor to insert inline line breaks (<br>) with keyboard shortcuts.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Hard Break in JavaScript Headless Editor

The `hardBreakExtension` registers the `hard_break` inline node, which inserts a semantic `<br>` line break within the current text flow without splitting the parent block.

## Register the extension

```html
<div id="editor"></div>
```

```javascript
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.hardBreakExtension]
});
editor.mount(document.getElementById('editor'));
```

## Configure hard break options

The `hardBreak` extension exposes an `htmlAttributes` option that adds custom HTML attributes to rendered `<br>` elements. It defaults to an empty object. Use `.configure()` to set it:

```html
<div id="editor"></div>
```

```javascript
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [
    ej.headlesseditor.hardBreakExtension.configure({
      htmlAttributes: { class: 'custom-break' }
    })
  ]
});
editor.mount(document.getElementById('editor'));
```

## Commands

| Command | Description |
|---------|--------------|
| `setHardBreak()` | Inserts a hard line break (`<br>`) at the current selection, maintaining the current paragraph or block context. |

```javascript
editor.commands.setHardBreak();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Insert Hard Break | <kbd>Shift</kbd> + <kbd>Enter</kbd> | <kbd>Shift</kbd> + <kbd>Enter</kbd> |
