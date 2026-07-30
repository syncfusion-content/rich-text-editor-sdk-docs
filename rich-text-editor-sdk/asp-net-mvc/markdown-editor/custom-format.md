---
layout: post
title: Customizing Markdown Syntax in ASP.NET MVC Markdown Editor Control | Syncfusion
description: Checkout and learn about Customizing Markdown Syntax in ASP.NET MVC Markdown Editor control of Syncfusion Essential JS 2 and more details.
platform: rich-text-editor-sdk
control: Customizing Markdown Syntax
publishingplatform: rich-text-editor-sdk
documentation: ug
---

# Customizing Markdown Syntax in ASP.NET MVC Markdown Editor Control

The ASP.NET MVC Markdown Editor allows you to modify the default Markdown syntax to match your preferred formatting style. You can override the default syntax using the [Formatter](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.richtexteditor.richtexteditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_Formatter) property, enabling a customized Markdown experience.

## Defining Custom Markdown Formatting  

You can define custom symbols for different Markdown formatting options:

* Use `+` for unordered lists instead of `-`.
* Use `__text__` for bold text instead of `**text**`.
* Use `_text_` for italic text instead of `*text*`.

The following example demonstrates how to customize Markdown tags in the editor:

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-custom-format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-custom-format/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-custom-format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-custom-format/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}