---
layout: post
title: Text Alignments in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to apply text alignments in the ASP.NET Core Rich Text Editor, including left, center, right, and justified alignment options.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Text Alignments in ASP.NET Core Rich Text Editor

The Rich Text Editor offers various text alignment options, including left, center, right, and justify. To use these alignment options, add the `Alignments` item to the `items` property in the `toolbarSettings`.

> **Important Note:** Text alignment is applied to the entire block element containing the cursor or selected text, not just to the selected text itself. When you apply an alignment, it affects the whole paragraph or block, even if you've only selected a portion of the text.

Here are the available alignment options:

* **Align Left:** Place the cursor in the desired paragraph or select any text within it, then click the `Align Left` icon in the toolbar. This aligns the entire paragraph with the left margin.

* **Align Center:** Place the cursor in the desired paragraph or select any text within it, then click the `Align Center` icon in the toolbar. This centers the entire paragraph within its container.

* **Align Right:** Place the cursor in the desired paragraph or select any text within it, then click the `Align Right` icon in the toolbar. This aligns the entire paragraph with the right margin.

* **Align Justify:** Place the cursor in the desired paragraph or select any text within it, then click the `Align Justify` icon in the toolbar. This distributes the entire paragraph evenly across the line, aligning it with both the left and right margins.

Please refer to the sample and code snippets below to add these alignment options in the Rich Text Editor.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/text-alignments/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/text-alignments/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/text-alignments/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/text-alignments/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
