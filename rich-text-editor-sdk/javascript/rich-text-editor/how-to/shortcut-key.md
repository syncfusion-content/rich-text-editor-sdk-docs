---
layout: post
title: Shortcut Key in JavaScript Rich Text Editor | Syncfusion
description: Learn how to customize keyboard shortcuts in the JavaScript Rich Text Editor by configuring key combinations for custom editor actions.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Shortcut Key in JavaScript Rich Text Editor

This can be achieved by using the [`formatter`](../../api/rich-text-editor#formatter) property. You need to create a `customFormatterModel` to configure the `keyConfig` using the `IHtmlFormatterModel` interface, and assign it to the `formatter` property. In the following example, `ctrl+q` is configured to open the `Insert Hyperlink` dialog.


