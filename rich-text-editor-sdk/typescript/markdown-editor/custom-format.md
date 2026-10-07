---
layout: post
title: Custom Markdown Syntax in TypeScript Markdown Editor | Syncfusion
description: Learn how to customize Markdown syntax in the TypeScript Markdown Editor by overriding default list, bold, and italic symbols.
platform: rich-text-editor-sdk
control: Markdown Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Custom Markdown Syntax in TypeScript Markdown Editor

The Markdown Editor allows you to modify the default Markdown syntax to match your preferred formatting style. You can override the default syntax using the [formatter](https://helpej2.syncfusion.com/documentation/api/rich-text-editor#formatter) property, enabling a customized Markdown experience.

## Defining Custom Markdown Formatting

You can define custom symbols for different Markdown formatting options:

* Use `+` for unordered lists instead of `-`.
* Use `__text__` for bold text instead of `**text**`.
* Use `_text_` for italic text instead of `*text*`.
