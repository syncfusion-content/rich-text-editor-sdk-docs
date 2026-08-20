---
layout: post
title: Code Block Formatting in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to add code block formatting in the ASP.NET Core Rich Text Editor using toolbar options to apply and remove code styles.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Add Code Block Formatting in ASP.NET Core Rich Text Editor

The Rich Text Editor control offers a powerful feature to format text as preformatted code blocks, making it ideal for displaying programming snippets or structured contents.

## Enabling Code Block Formatting

To enable code block formatting, ensure that the `Formats` item is included in the toolbar items of your Rich Text Editor configuration. Selecting **Preformatted Text** in the dropdown wraps the current selection in a `<pre>` block; selecting it again removes the formatting.

Below is an example demonstrating how to add and use the code block formatting option in the Rich Text Editor.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/code-format/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/code-format/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/code-format/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/code-format/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## See Also

* [How to customize the format dropdown items](./headings#customizing-format-dropdown-items)