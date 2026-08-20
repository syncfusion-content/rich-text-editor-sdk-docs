---
layout: post
title: Render RichTextEditorFor in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to render the RichTextEditorFor control in the ASP.NET MVC Rich Text Editor and bind editor content to model properties.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---


# Render RichTextEditorFor in ASP.NET MVC Rich Text Editor

The RichTextEditorFor control can be rendered by passing values from the controller. The formatted Rich Text Editor value is retrieved when submitting the form using the post method.

In the following sample, the RichTextEditorFor control is rendered.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/rtefor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/rtefor/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/rtefor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/rtefor/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



The output is shown below.

![RichTextEditorFor](../../rich-text-editor/images/rteFor.PNG)