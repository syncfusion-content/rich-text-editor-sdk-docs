---
layout: post
title: Italic Mark in JavaScript Headless Editor | Syncfusion
description: Learn how to configure the Italic mark in the JavaScript Headless Editor, including attributes, commands, keyboard shortcuts, and Markdown input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Italic Mark in JavaScript Headless Editor

The `italicExtension` registers the `italic` mark, which applies semantic italic formatting to text and renders the content as an `<em>` element. It contributes the `toggleItalic` command, a keyboard shortcut for toggling italic, and Markdown-style input rules that convert `*text*` or `_text_` into italic as the user types.

## Register the extension

```html
<div id="editor"></div>
```

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [ej.headlesseditor.italicExtension]
});

editor.mount(document.getElementById('editor'));
```

## Configure the extension

The `italic` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<em>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<em>` element. |

```html
<div id="editor"></div>
```

```js
var editor = ej.headlesseditor.HeadlessEditor.create({
  extensions: [
    ej.headlesseditor.italicExtension.configure({
      htmlAttributes: { class: 'my-custom-class' }
    })
  ]
});

editor.mount(document.getElementById('editor'));
```

## Commands

| Command | Description |
|---------|-------------|
| `toggleItalic()` | Toggles italic formatting on the current selection. |

```js
editor.commands.toggleItalic();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Italic | <kbd>Ctrl</kbd> + <kbd>I</kbd> | <kbd>⌘</kbd> + <kbd>I</kbd> |

## Markdown input rules

The Italic mark supports Markdown-style input rules using `*text*` or `_text_` syntax.

```text
Type:    *emphasis*
Result:  <em>emphasis</em>
```
