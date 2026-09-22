---
layout: post
title: Undo and Redo in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to configure undo history depth and merge timing, and trigger undo/redo programmatically in the JavaScript Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Undo and redo in JavaScript Modern Rich Text Editor

Readers can step backward and forward through their edit history with `Ctrl+Z` and `Ctrl+Shift+Z`, or the Undo/Redo toolbar items — how much history is kept, and how it's grouped, is configurable.

## Configuring undo history

`undoRedoSteps` sets the maximum number of undo entries the editor keeps in memory — 30 by default. Increase it if your application expects long editing sessions where readers might need to step back further; decrease it if you'd rather bound memory usage more tightly.

```js
var editor = new ej.richtexteditorui.RichTextEditorUI({
    undoRedoSteps: 50,
    undoRedoTimer: 500
});
editor.appendTo('#editor');
```

## Merging rapid edits

Without any grouping, undo would step back one character at a time during fast typing, which isn't useful. `undoRedoTimer` (300ms by default) sets the window in which adjacent, compatible edits are merged into a single undo step instead — raise it if you want larger bursts of typing merged together, lower it for finer-grained history.

## Undo and redo commands

If your application has its own undo/redo controls, or needs to trigger these programmatically for some other reason, call:

```js
editor.commands().undo().apply();
editor.commands().redo().apply();
```
