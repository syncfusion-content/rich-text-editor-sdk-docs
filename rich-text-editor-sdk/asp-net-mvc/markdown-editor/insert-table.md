---
layout: post
title: Insert Tables in ASP.NET MVC Markdown Editor | Syncfusion
description: Learn how to create and customize tables in the ASP.NET MVC Markdown Editor using the Create Table toolbar option to configure rows, columns, and content.
control: Markdown Editor
platform: rich-text-editor-sdk
documentation: ug
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Insert Tables in ASP.NET MVC Markdown Editor

To enable the table insertion feature, add the `CreateTable` option to the toolbar items. Once added, users can click the Insert Table icon in the toolbar to insert a table into the editor.

By default, when a table is inserted, it consists of:

* 2 rows and 2 columns
* A table header row

This ensures that users can start formatting and adding content immediately.

{% tabs %}

{% highlight razor tabtitle="CSHTML" %}

{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-table/razor %}
{% endhighlight %}

{% highlight c# tabtitle="Controller.cs" %}

{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-table/controller.cs %}

{% endhighlight %}

{% endtabs %}

## Changing default content

By default, when you insert a table, it comes with predefined column headers and structure. However, you can customize the table’s default content, including the heading and column names, to match your requirements.

{% tabs %}

{% highlight razor tabtitle="CSHTML" %}

{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-table-constants/razor %}

{% endhighlight %}

{% highlight c# tabtitle="Controller.cs" %}

{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/markdown-editor/markdown-table-constants/controller.cs %}

{% endhighlight %}

{% endtabs %}
