---
layout: post
title: Markdown to HTML preview in ASP.NET Core Markdown Editor Control | Syncfusion
description: Checkout and learn about Markdown to HTML preview in ASP.NET Core Markdown Editor control of Syncfusion Essential JS 2 and more details.
platform: rich-text-editor-sdk
control: Markdown to HTML preview
publishingplatform: rich-text-editor-sdk
documentation: ug
---

# Markdown to HTML preview in ASP.NET Core Markdown Editor Control

The Markdown Editor provides an instant preview of Markdown changes, allowing users to see the formatted output while typing or editing text. This enhances the editing experience by enabling real-time visualization of Markdown formatting.

## Enable Markdown Preview in ASP.NET Core Markdown Editor  

To enable the Markdown preview feature, integrate the third-party [Marked](https://marked.js.org/) library, which converts Markdown content into HTML format. The following example demonstrates how to enable Markdown to HTML preview in the Markdown Editor.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/markdown-editor/markdown-preview/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/markdown-editor/markdown-preview/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/markdown-editor/markdown-preview/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/markdown-editor/markdown-preview/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}