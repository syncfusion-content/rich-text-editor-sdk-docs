---
layout: post
title: Markdown Preview in ASP.NET MVC Markdown Editor | Syncfusion
description: Learn how to enable Markdown preview in the ASP.NET MVC Markdown Editor by converting Markdown content into HTML and displaying the formatted output in real time.
control: Markdown Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Markdown Preview in ASP.NET MVC Markdown Editor

The Markdown Editor provides an instant preview of Markdown changes, allowing users to see the formatted output while typing or editing text. This enhances the editing experience by enabling real-time visualization of Markdown formatting.

## Enable Markdown Preview in ASP.NET MVC Markdown Editor  

To enable the Markdown preview feature, the Syncfusion `MarkdownConverter` is used to convert Markdown content into HTML format. The following example demonstrates how to enable Markdown to HTML preview in the Markdown Editor.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-preview/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-preview/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-preview/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-preview/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}