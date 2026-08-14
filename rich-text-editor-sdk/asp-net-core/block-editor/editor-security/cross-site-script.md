---
layout: post
title: XSS Prevention in ASP.NET Core Block Editor | Syncfusion
description: Learn how to enable XSS prevention in the ASP.NET Core BlockEditor to sanitize script tags and unsafe attributes from content.
platform: rich-text-editor-sdk
control: BlockEditor
documentation: ug
---

# XSS Prevention in ASP.NET Core Block Editor

The Block Editor control allows users to edit content securely by preventing cross-site scripting (XSS) attacks. By default, it provides built-in support to remove potentially dangerous elements from editor content. The editor sanitizes content based on element tags and attributes that could execute malicious scripts.

## Enabling XSS prevention

The [EnableHtmlSanitizer](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.BlockEditor.BlockEditor.html#Syncfusion_EJ2_BlockEditor_BlockEditor_EnableHtmlSanitizer) property, enabled by default, activates XSS prevention. When active, the editor automatically removes dangerous elements like `<script>` tags and unsafe attributes like `onclick`, `onmouseover`, etc. from the content.

```csharp
// Enable XSS prevention (enabled by default)
new BlockEditor
{
    EnableHtmlSanitizer = true  // Removes potentially dangerous content
}
```
