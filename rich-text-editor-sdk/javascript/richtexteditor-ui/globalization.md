---
layout: post
title: Globalization in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to localize UI strings and enable right-to-left rendering in the JavaScript Modern Rich Text Editor using locale and enableRtl.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Globalization in JavaScript Modern Rich Text Editor

## Localization

To show toolbar tooltips, placeholder text, dialog labels, and error messages in a language other than the default English (`'en-US'`), load the translated strings through EJ2's standard `L10n.load()` API and then set `locale` to match:

```js
ej.base.L10n.load({
    'fr-FR': {
        'richtexteditor-ui': {
            // locale string overrides
        }
    }
});

var editor = new ej.richtexteditorui.RichTextEditorUI({
    locale: 'fr-FR'
});
editor.appendTo('#editor');
```

## Right-to-left support

For languages like Arabic and Hebrew, set `enableRtl` to `true` to flip the editor shell, toolbar, and content direction to right-to-left — the default is `false` (left-to-right).

```js
var editor = new ej.richtexteditorui.RichTextEditorUI({
    enableRtl: true
});
editor.appendTo('#editor');
```
