---
layout: post
title: Model Binding in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to use model binding in Razor Pages with the ASP.NET Core Rich Text Editor to handle and process editor content efficiently.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---


# Model Binding in Razor Pages for ASP.NET Core Rich Text Editor

This article deals with the model binding of the Razor Pages of the ASP.NET Core platform. Refer to this [`Page Model`](https://ej2.syncfusion.com/aspnetcore/documentation/getting-started/page-model-binding) section for the detailed instructions on how to create a page model.

Model binding passes data between Razor Pages and the page model. The `OnGet` handler is executed when the Razor Page is first loaded; the `value` attribute in the form tag retrieves data from the `OnGet` method of the `IndexModel` class using model binding.

## Form Post Back

This sample explains the form post back properties of the Rich Text Editor rendering with the razor page. The Rich text editor is rendered within the form tag and the value `post` and attribute `method` has been given into the form tag. Any value into the `Request.Form` in the OnPost method will be considered as a string and those string should be mapped to the name field of the Rich Text Editor.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/razor-page/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/razor-page/index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight c# tabtitle="Index.cshtml.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/razor-page/index.cshtml.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

