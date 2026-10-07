---
layout: post
title: Subscript Mark in JavaScript Headless Editor | Syncfusion
description: Learn how to configure the Subscript mark in the JavaScript Headless Editor, including attributes, commands, keyboard shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Subscript Mark in JavaScript Headless Editor

The `subscriptExtension` registers the `subscript` mark, which applies subscript formatting to text and renders the content as a `<sub>` element. It contributes the `toggleSubscript` command, a keyboard shortcut for toggling subscript, and input rules that convert `,,text,,` into subscript as the user types.

## Register the extension

```html
<div id="editor"></div>
```

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.subscriptExtension]
});

editor.mount(document.getElementById('editor'));
```

## Configure the extension

The `subscript` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<sub>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<sub>` element. |

```html
<div id="editor"></div>
```

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [
    ej.headlesseditor.subscriptExtension.configure({
      htmlAttributes: { class: 'my-custom-class' }
    })
  ]
});

editor.mount(document.getElementById('editor'));
```

## Commands

| Command | Description |
|---------|-------------|
| `toggleSubscript()` | Toggles subscript formatting on the current selection. |

```js
editor.commands.toggleSubscript();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Subscript | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>,</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>,</kbd> |

## Input rules

The Subscript mark supports `,,text,,` syntax for inline conversion.

```text
Type:    ,,2,,
Result:  <sub>2</sub>
```
