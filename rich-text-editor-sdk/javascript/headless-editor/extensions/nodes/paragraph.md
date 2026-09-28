---
layout: post
title: Paragraph Extension in JavaScript Headless Editor | Syncfusion
description: Learn how to configure the Paragraph extension in the JavaScript Headless Editor, including attributes, commands, and keyboard shortcuts.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Paragraph in JavaScript Headless Editor

The `paragraphExtension` registers the `paragraph` block node, which is the default block type used for standard body text.

## Register the extension

```html
<div id="editor"></div>
```

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.paragraphExtension]
});
editor.mount(document.getElementById('editor'));
```

## Node attributes

| Attribute | Description |
|-----------|--------------|
| `align` | Text alignment of the paragraph (`left`, `center`, `right`, or `justify`). No alignment is applied by default. Managed through the Text Alignment extension's commands. |
| `indent` | Indent level of the paragraph, rendered as `margin-left` in steps of 20px. Defaults to `0` (no indent). Managed through the Indent and Outdent extension's commands. |

## Configure paragraph options

The `paragraph` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<p>` element. It defaults to an empty object. Use `.configure()` to set it:

```html
<div id="editor"></div>
```

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [
    ej.headlesseditor.paragraphExtension.configure({
      htmlAttributes: { class: 'my-custom-class' }
    })
  ]
});
editor.mount(document.getElementById('editor'));
```

## Commands

| Command | Description |
|---------|--------------|
| `setParagraph()` | Converts the current block into a paragraph. If the source block had `align` or `indent` attributes, they are preserved on the resulting paragraph. |

```js
editor.commands.setParagraph();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Convert to Paragraph | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>P</kbd> |
