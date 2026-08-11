---
layout: post
title: Render Rich Text Editor in ASP.NET Core Tab | Syncfusion
description: Learn how to render multiple ASP.NET Core Rich Text Editor instances inside a Tab with toolbar configuration and content editing support.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Render Rich Text Editor in ASP.NET Core Tab

Integrating a Rich Text Editor within Tab control provides a versatile and organized user interface for text formatting and content creation across multiple tabs.  Each tab instance includes a dedicated editor instance configured with extensive toolbar options, enabling users to effortlessly manipulate text styles, apply formatting, insert media, and manage content layout.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/richtexteditor-inside-tab/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/richtexteditor-inside-tab/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/richtexteditor-inside-tab/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/richtexteditor-inside-tab/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}