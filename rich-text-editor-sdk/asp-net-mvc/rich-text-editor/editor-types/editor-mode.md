---
layout: post
title: Editor Modes in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to use HTML, Markdown, and IFrame editing modes in the ASP.NET MVC Rich Text Editor to create and edit content in different formats.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Editor Modes in ASP.NET MVC Rich Text Editor

The Rich Text Editor control is used to create, edit, and return the content in valid HTML markup or Markdown (MD). It supports the following two editing formats.

* HTML Editor
* Markdown Editor

## HTML Editor

Rich Text Editor is a WYSIWYG editing control for formatting the word content as HTML.

The HTML editing mode is the default mode of the Rich Text Editor. It is used to format the content through the available toolbar items and returns valid HTML markup. Set the [EditorMode](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_EditorMode) property to `HTML`.

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

Set the [EditorMode](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_EditorMode) property value as `Markdown` to create or edit the content and apply formatting to view markdown formatted content.

The third-party library such as [`Marked`](https://marked.js.org/#/README.md#README.md) or any other library is used to convert markdown into HTML content.

* The Supported Tags are  `h6`,`h5`,`h4`,`h3`,`h2`,`h1`,`blockquote`,`pre`,`p`,`ol`,`ul`.
* The Supported Selection Tags are `Bold`, `Italic`, `StrikeThrough`, `InlineCode`, `SubScript`, `SuperScript`, `UpperCase`, `LowerCase`.
* The supported insert commands are `Image`, `Link` and `Table`.

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

For further details on Markdown editing, refer to the [Markdown editor documentation](https://ej2.syncfusion.com/aspnetmvc/documentation/markdown-editor/getting-started).

## See Also

* [How to integrate the third party library](https://help.syncfusion.com/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/third-party-integration)
* [How to render the iframe](https://help.syncfusion.com/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/editor-types/iframe)
