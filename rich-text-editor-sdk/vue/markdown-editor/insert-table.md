---
layout: post
title: Insert Tables in Vue Markdown Editor | Syncfusion
description: Learn how to insert and customize tables in the Vue Markdown Editor by configuring rows, columns, and Markdown table content.
platform: rich-text-editor-sdk
control: Markdown Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Insert Tables in Vue Markdown Editor

To enable the table insertion feature, add the `CreateTable` option to the toolbar items. Once added, users can click the Insert Table icon in the toolbar to insert a table into the editor.

By default, when a table is inserted, it consists of:

* 2 rows and 2 columns
* A table header row

This ensures that users can start formatting and adding content immediately.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-cs8/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-cs8/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-cs8" %}

## Changing default content

By default, when you insert a table, it comes with predefined column headers and structure. However, you can customize the table’s default content, including the heading and column names, to match your requirements.

The following example demonstrates how to customize the table content in the Markdown Editor:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-table-cs2/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-table-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-table-cs2" %}