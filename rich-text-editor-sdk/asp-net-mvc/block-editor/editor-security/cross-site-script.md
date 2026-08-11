---
layout: post
title: XSS Prevention in ASP.NET MVC Block Editor | Syncfusion
description: Learn how to enable XSS prevention in the ASP.NET MVC BlockEditor to sanitize script tags and unsafe attributes from content.
platform: rich-text-editor-sdk
control: BlockEditor
documentation: ug
---

# XSS Prevention in ASP.NET MVC Block Editor

The Block Editor control allows users to edit the content with security by preventing cross-site scripting (XSS). By default, it provides built-in support to remove elements from editor content that cause XSS attacks. The editor removes the elements based on the attributes if it is possible to execute a script.

## Enabling XSS prevention

The [EnableHtmlSanitizer](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.BlockEditor.BlockEditor.html#Syncfusion_EJ2_BlockEditor_BlockEditor_EnableHtmlSanitizer), enabled by default, activates XSS prevention. When active, the editor automatically removes elements like `<script>` and attributes like `onmouseover` from the content.
The following example shows XSS prevention removing a `<script>` tag and `onmouseover` attribute:
