---
layout: post
title: Quotation Formatting in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to apply quotation formatting in the ASP.NET Core Rich Text Editor to highlight quoted content and improve readability.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Quotation Formatting in ASP.NET Core Rich Text Editor

The Rich Text Editor facilitates quotation formatting through the `Blockquote` tool available in the toolbar. Blockquotes are designed to visually highlight significant text, emphasizing key information or quotations by setting them apart from the main content for added emphasis and clarity.



To format text as a quotation, select the desired text and click the `Blockquote` icon in the toolbar. The selected text will be formatted as a blockquote, typically indented and styled differently from the surrounding content.

Use the `Blockquote` tool in the editor below to see the feature in action.

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/quotation-formatting/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/quotation-formatting/controller.cs %}
{% endhighlight %}
{% endtabs %}

> In a markdown editor, blockquotes are represented using the `>` symbol.

## See Also

* [How to Customize Format Dropdown Items in Headings](./headings#customizing-format-dropdown-items)