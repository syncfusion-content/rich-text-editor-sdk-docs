---
layout: post
title: Horizontal Rule Extension in JavaScript Headless Editor | Syncfusion
description: Learn how to configure the Horizontal Rule extension in the JavaScript Headless Editor, including insertion commands and markdown input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Horizontal Rule in JavaScript Headless Editor

The `horizontalRuleExtension` registers the `horizontalRule` leaf node for visual dividers rendered as semantic `<hr>` elements.

## Register the extension

```html
<div id="editor"></div>
```

```javascript
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.horizontalRuleExtension]
});
editor.mount(document.getElementById('editor'));
```

## Configure horizontal rule options

The `horizontalRule` extension exposes an `htmlAttributes` option that adds custom HTML attributes to rendered `<hr>` elements. It defaults to an empty object. Use `.configure()` to set it:

```html
<div id="editor"></div>
```

```javascript
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [
    ej.headlesseditor.horizontalRuleExtension.configure({
      htmlAttributes: { class: 'custom-divider' }
    })
  ]
});
editor.mount(document.getElementById('editor'));
```

## Commands

| Command | Description |
|---------|--------------|
| `setHorizontalRule()` | Inserts a horizontal rule at the current cursor position. When the current block is empty, the empty block is replaced with the rule. Otherwise, the rule is inserted below the target block at the cursor position. |

```javascript
editor.commands.setHorizontalRule();
```

## Input rules

Type any of the following sequences on an empty line to insert a horizontal rule:

* `---` (three hyphens)
* `***` (three asterisks)
* `___` (three underscores)
