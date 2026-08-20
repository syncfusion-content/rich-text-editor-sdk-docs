---
layout: post
title: Content Formatting in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to apply content formatting in the ASP.NET MVC Rich Text Editor using built-in formatting tools to enhance text presentation.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---


# Content Formatting in ASP.NET MVC Rich Text Editor

The Rich Text Editor control is used to create and edit content and return valid HTML markup or Markdown (MD). It supports the following two editing formats:

* HTML Editor
* Markdown Editor

## HTML Editor

Rich Text Editor is a WYSIWYG editing control for formatting the word content as HTML.
The HTML editing mode is the default mode in Rich Text Editor to format the content through the available toolbar items to return the valid HTML markup. Set the [`EditorMode`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_EditorMode) property to `HTML`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/html-editor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/html-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/html-editor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/html-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## Markdown Editor

Set the [`EditorMode`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_EditorMode) property to `Markdown` to create or edit the content and apply formatting for markdown-formatted output.

* The Supported Tags are  `h6`,`h5`,`h4`,`h3`,`h2`,`h1`,`blockquote`,`pre`,`p`,`ol`,`ul`.
* The Supported Selection Tags are `Bold`, `Italic`, `StrikeThrough`, `InlineCode`, `SubScript`, `SuperScript`, `UpperCase`, `LowerCase`.
* The supported insert commands are `Image`, `Link` and `Table`.

> The Markdown Converter library is used to convert markdown into HTML content.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/markdown-editor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/markdown-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/markdown-editor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/markdown-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## See Also

* [How to integrate the third party library](https://help.syncfusion.com/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/third-party-integration)
* [How to render the iframe](https://help.syncfusion.com/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/editor-types/iframe)