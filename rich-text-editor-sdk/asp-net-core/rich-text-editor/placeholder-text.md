---
layout: post
title: Placeholder Text in ASP.NET Core Rich Text Editor Control
description: Learn here all about Placeholder Text in Syncfusion ASP.NET Core Rich Text Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Placeholder Text
publishingplatform: rich-text-editor-sdk
documentation: ug
---

# Placeholder in ASP.NET Core Rich Text Editor Control

Specifies the placeholder for the Rich Text Editor’s content used when the editor's content area is empty through the [placeholder](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_Placeholder) property.

You can customize the appearance of the placeholder text by targeting the `e-rte-placeholder` class in your CSS. This allows you to modify properties such as font family, color, and other styles.

```css

.e-richtexteditor .e-rte-placeholder {
    font-family: monospace;
}

```

The below sample demonstrates the `placeholder` option in Rich Text Editor.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/placeholder/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/placeholder/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/placeholder/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/placeholder/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## See Also

* [Customizing the placeholder in Styles](./style#customizing-placeholder-text)