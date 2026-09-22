---
layout: post
title: Keyboard Interaction in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how Tab-key indentation and the default keyboard shortcuts work in the JavaScript Modern Rich Text Editor, and how to override them with keyBindings.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Keyboard interaction in JavaScript Modern Rich Text Editor

Readers who prefer the keyboard over the mouse can drive most formatting and structural changes without touching the toolbar at all.

## Tab key indentation

By default, pressing `Tab` at the start of a supported block indents it and `Shift+Tab` outdents it, so readers can build nested lists and indented content the same way they would in a word processor. If your application needs `Tab` to move focus to the next field instead — for example, when the editor sits inside a longer form — set `interactionSettings.enableTabKeyIndent` to `false` to restore normal browser focus navigation.

```js
var editor = new ej.richtexteditorui.RichTextEditorUI({
    interactionSettings: {
        enableTabKeyIndent: false
    }
});
editor.appendTo('#editor');
```

## Customizing keyboard shortcuts

Every default shortcut listed below can be reassigned through `keyBindings`, which maps an action name to the keystroke that should trigger it. You only need to specify the actions you want to change — anything you leave out keeps its default:

```js
var editor = new ej.richtexteditorui.RichTextEditorUI({
    keyBindings: {
        bold: 'ctrl+alt+b'
    }
});
editor.appendTo('#editor');
```

N> On macOS, any `ctrl` modifier you configure is automatically mapped to the Command (⌘) key, so you don't need a separate binding for Mac.

## Default shortcuts

| Action | Default | What it does |
|---|---|---|
| `toolbar-focus` | `alt+f10` | Moves focus into the toolbar |
| `link` | `ctrl+k` | Opens the Insert/Edit Link dialog |
| `image` | `ctrl+shift+i` | Opens the Insert Image dialog |
| `table` | `ctrl+shift+e` | Opens the Insert Table dialog |
| `undo` | `ctrl+z` | Undoes the last change |
| `redo` | `ctrl+shift+z` | Redoes the last undone change |
| `bold` | `ctrl+b` | Toggles bold |
| `italic` | `ctrl+i` | Toggles italic |
| `underline` | `ctrl+u` | Toggles underline |
| `strikethrough` | `ctrl+shift+s` | Toggles strikethrough |
| `superscript` | `ctrl+shift+=` | Toggles superscript |
| `subscript` | `ctrl+=` | Toggles subscript |
| `uppercase` | `ctrl+shift+u` | Converts the selection to uppercase |
| `lowercase` | `ctrl+shift+l` | Converts the selection to lowercase |
| `indents` | `tab` | Indents the current block |
| `outdents` | `shift+tab` | Outdents the current block |
| `clear-format` | `ctrl+shift+r` | Clears formatting from the selection |
| `ordered-list` | `ctrl+shift+o` | Toggles a numbered list |
| `unordered-list` | `ctrl+alt+o` | Toggles a bullet list |
| `checklist` | `ctrl+shift+7` | Toggles a task list |
| `inlinecode` | `ctrl+e` | Toggles inline code |
| `code-block` | `ctrl+shift+b` | Inserts a code block |
