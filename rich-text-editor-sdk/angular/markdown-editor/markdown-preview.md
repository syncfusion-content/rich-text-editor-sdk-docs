---
layout: post
title: Markdown Preview in Angular Markdown Editor component | Syncfusion
description: Learn how to enable real-time Markdown-to-HTML preview in the Syncfusion Angular Markdown Editor component of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Markdown Preview
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Markdown Preview in Angular Markdown Editor Component

The Markdown Editor provides an instant preview of Markdown changes, allowing users to see the formatted output while typing or editing text. This enhances the editing experience by enabling real-time visualization of Markdown formatting.

## Enable Markdown Preview in Angular Markdown Editor  

To enable the Markdown preview feature, integrate the third-party [Marked](https://marked.js.org/) library, which converts Markdown content into HTML format. The following example demonstrates how to enable Markdown to HTML preview in the Syncfusion Angular Markdown Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/markdown-editor/markdown-preview-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/markdown-editor/markdown-preview-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/markdown-editor/markdown-preview-cs1" %}