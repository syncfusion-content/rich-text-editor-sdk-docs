---
layout: post
title: Content Security in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to enable read-only mode and how HTML content is sanitized in the JavaScript Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Content security in JavaScript Modern Rich Text Editor

## Read-only mode

When you want readers to be able to review a document without changing it — for example, after it's been submitted or approved — set `readonly` to `true`. The content stays visible and selectable (so readers can still copy text from it), but the toolbar is disabled and typing has no effect.

```js
var editor = new ej.richtexteditorui.RichTextEditorUI({
    readonly: true
});
editor.appendTo('#editor');
```

If instead you need to disable the editor entirely — for example, while an async save is in progress — set `enable` to `false`. Unlike `readonly`, this greys out the toolbar and stops all interaction, though the editor stays visible.

## HTML sanitization

Any HTML content that reaches the editor — whether it's pasted in by a user or loaded through `value` — is sanitized automatically by the Headless Editor core this editor is built on. There's no separate setting to turn this on or off; it's built-in behavior you get by default.

I> Don't look for a property like `enableHtmlSanitizer` — sanitization here is always-on, handled internally by `@syncfusion/ej2-headless-editor` rather than exposed as a configurable option on `RichTextEditorUI`.
