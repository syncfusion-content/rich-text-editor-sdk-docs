---
layout: post
title: Markdown-Style Auto-Formatting in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how Markdown-style auto-formatting works in the JavaScript Modern Rich Text Editor and how to enable or disable it with interactionSettings.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Markdown-style auto-formatting in JavaScript Modern Rich Text Editor

For readers who already know Markdown shorthand, typing familiar syntax at the start of a block converts it into the matching rich content as they type — `# ` becomes a Heading 1, `> ` becomes a blockquote, `- ` becomes a bullet list, and so on — without them ever needing to touch the toolbar.

## Enabling auto-formatting

This behavior is controlled by `interactionSettings.enableAutoFormat`, which is `true` by default. If your application needs readers to type literal characters like `#` or `>` without them being converted, turn it off:

```js
var editor = new ej.richtexteditorui.RichTextEditorUI({
    interactionSettings: {
        enableAutoFormat: false
    }
});
editor.appendTo('#editor');
```

N> `enableAutoFormat` only changes what happens as the user types — it has no effect on the format the document is stored in; see [Managing Editor Value](managing-editor-value) for that.
