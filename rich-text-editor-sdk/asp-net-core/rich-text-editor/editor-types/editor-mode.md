---
layout: post
title: Editor Modes in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to use HTML, Markdown, and IFrame editing modes in the ASP.NET Core Rich Text Editor to create and edit content in different formats.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Editor Modes in ASP.NET Core Rich Text Editor

The Rich Text Editor control is used to create, edit, and return content in valid HTML markup or Markdown (MD). It supports the following two editing formats.

* HTML Editor
* Markdown Editor

## HTML Editor

Rich Text Editor is a WYSIWYG editing control for formatting the word content as HTML.

The HTML editing mode is the default mode of the Rich Text Editor. It is used to format the content through the available toolbar items and returns the valid HTML markup. Set the [editorMode](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.EditorMode.html) property to `HTML`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/html-editor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/html-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/html-editor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/html-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## Markdown Editor

Set the [editorMode](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.EditorMode.html) property value as `Markdown` to create or edit the content and apply formatting to view markdown formatted content.

The third-party library such as [`Marked`](https://marked.js.org/#/README.md#README.md) or any other library is used to convert markdown into HTML content.

* The supported tags are `h6`, `h5`, `h4`, `h3`, `h2`, `h1`, `blockquote`, `pre`, `p`, `ol`, `ul`.
* The supported selection tags are `Bold`, `Italic`, `StrikeThrough`, `InlineCode`, `SubScript`, `SuperScript`, `UpperCase`, `LowerCase`.
* The supported insert commands are `Image`, `Link`, and `Table`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/markdown-editor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/markdown-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/markdown-editor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/markdown-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

For further details on Markdown editing, refer to the [`Markdown`](../../../markdown-editor/EJ2_ASP.NETCORE/getting-started)

## See Also

* [How to integrate the third party library](../third-party-integration)
* [How to render the iframe](./iframe)
