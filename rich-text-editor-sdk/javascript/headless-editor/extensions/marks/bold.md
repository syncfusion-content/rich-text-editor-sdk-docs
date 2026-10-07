---
layout: post
title: Bold Mark in JavaScript Headless Editor | Syncfusion
description: Learn how to configure the Bold mark in the JavaScript Headless Editor, including attributes, commands, keyboard shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Bold Mark in JavaScript Headless Editor

The `boldExtension` registers the `bold` mark, which applies semantic bold formatting to text and renders the content as a `<strong>` element. It contributes the `toggleBold` command, a keyboard shortcut for toggling bold, and Markdown-style input rules that convert `**text**` or `__text__` into bold as the user types.

## Register the extension

```html
<div id="editor"></div>
```

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.boldExtension]
});

editor.mount(document.getElementById('editor'));
```

## Configure the extension

The `bold` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<strong>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<strong>` element. |

```html
<div id="editor"></div>
```

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [
    ej.headlesseditor.boldExtension.configure({
      htmlAttributes: { class: 'my-custom-class' }
    })
  ]
});

editor.mount(document.getElementById('editor'));
```

## Commands

| Command | Description |
|---------|-------------|
| `toggleBold()` | Toggles bold formatting on the current selection. |

```js
editor.commands.toggleBold();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Bold | <kbd>Ctrl</kbd> + <kbd>B</kbd> | <kbd>⌘</kbd> + <kbd>B</kbd> |

## Input rules

The Bold mark supports Markdown-style input rules using `**text**` or `__text__` syntax.

```text
Type:    **important**
Result:  <strong>important</strong>
```
