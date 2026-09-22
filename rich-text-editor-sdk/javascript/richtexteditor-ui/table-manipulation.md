---
layout: post
title: Table Manipulation in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to insert and resize tables in the JavaScript Modern Rich Text Editor using tableSettings and the built-in TableModule.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Table manipulation in JavaScript Modern Rich Text Editor

Readers can insert a table through the `Table` toolbar item and then adjust it directly in the content — table support, including the Insert Table dialog, is handled by the built-in `TableModule`, so there's no `Inject()` step needed to use it.

## Configuring table resize

By default, a reader can drag a table's column and row edges to resize it after inserting it (`tableSettings.resize: true`). If your layout can't accommodate variable-width tables, set `tableSettings.resize` to `false` so tables render at a fixed width instead.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/tables/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/tables/index.html %}
{% endhighlight %}
{% endtabs %}

## Resize events

The `resizing` and `resizeStop` events fire while a reader is dragging a resize handle and once they release it — these events aren't table-specific, since the same resize interaction also applies to images, so check the `source` field on the event args to tell which element is being resized.

I> The public surface for tables is `tableSettings` plus `TableModule` and the Table quick toolbar items — the internal popup implementation isn't a documented public class.
