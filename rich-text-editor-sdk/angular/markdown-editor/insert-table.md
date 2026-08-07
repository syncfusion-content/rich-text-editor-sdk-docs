---
layout: post
title: Insert Tables in Angular Markdown Editor | Syncfusion
description: Learn how to insert and customize tables in the Angular Markdown Editor using the Create Table toolbar option. Configure rows, columns, and table content in Markdown format.
control: Markdown Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Insert Tables in Angular Markdown Editor

To enable the table insertion feature, add the `CreateTable` option to the toolbar items. Once added, users can click the Insert Table icon in the toolbar to insert a table into the editor.

By default, when a table is inserted, it consists of:

* 2 rows and 2 columns
* A table header row

This ensures that users can start formatting and adding content immediately.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/markdown-editor/markdown-table-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/markdown-editor/markdown-table-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/markdown-editor/markdown-table-cs1" %}

## Changing default content

By default, when you insert a table, it comes with predefined column headers and structure. However, you can customize the table’s default content, including the heading and column names, to match your requirements.

The following example demonstrates how to customize the table content in the Markdown Editor:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/markdown-editor/markdown-table-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/markdown-editor/markdown-table-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/markdown-editor/markdown-table-cs2" %}