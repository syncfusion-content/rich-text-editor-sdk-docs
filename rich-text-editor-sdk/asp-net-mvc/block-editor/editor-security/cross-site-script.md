---
layout: post
title: XSS Prevention in ASP.NET MVC Block Editor | Syncfusion
description: Learn how to enable XSS prevention in the ASP.NET MVC BlockEditor to sanitize script tags and unsafe attributes from content.
platform: rich-text-editor-sdk
control: BlockEditor
documentation: ug
---

# XSS Prevention in ASP.NET MVC Block Editor

The Block Editor control allows users to edit content securely by preventing cross-site scripting (XSS) attacks. By default, it provides built-in support to remove elements from editor content that can cause XSS attacks. The editor removes the elements based on their attributes if it is possible to execute a script.

## Enabling XSS prevention

The [EnableHtmlSanitizer](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.BlockEditor.BlockEditor.html#Syncfusion_EJ2_BlockEditor_BlockEditor_EnableHtmlSanitizer) property, enabled by default, activates XSS prevention. When active, the editor automatically removes elements like `<script>` and attributes like `onmouseover` from the content.

To disable XSS prevention, set `EnableHtmlSanitizer` to `false`. Disabling sanitization is not recommended for production content that may include untrusted user input.
