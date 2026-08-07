---
layout: post
ttitle: Shortcut Key in JavaScript Rich Text Editor | Syncfusion
description: Learn how to customize keyboard shortcuts in the JavaScript Rich Text Editor by configuring key combinations for custom editor actions.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Shortcut Key in JavaScript Rich Text Editor

It can be achieved by using [`formatter`](../../api/rich-text-editor#formatter) property. We need to create `customformatterModel` to configure the `keyConfig` using `IHtmlFormatterModel` class and assign the same to the formatter property. Here, `ctrl+q` is configured to open the `Insert Hyperlink` dialog.


