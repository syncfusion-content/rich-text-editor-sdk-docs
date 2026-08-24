---
layout: post
title: Read-Only Mode in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to use read-only and disabled modes in the ASP.NET MVC Rich Text Editor to control editing, restrict user interaction, and display content safely.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Read-Only Mode in ASP.NET MVC Rich Text Editor

The Rich Text Editor offers a read-only mode that prevents users from editing the content while still allowing them to view it. This is useful when you want to display formatted content without permitting modifications.

To enable the read-only mode, set the [Readonly](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.richtexteditor.richtexteditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_Readonly) property to `true`. 

Refer to the sample and code snippets below to see how to enable the read-only mode in the Rich Text Editor.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/read-only/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/read-only/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/read-only/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/read-only/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## See Also

[How to Disable and Enable the Rich Text Editor](../disable-editor)