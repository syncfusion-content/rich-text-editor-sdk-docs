---
layout: post
title: Toolbar Configuration in JavaScript Markdown Editor control | Syncfusion
description: Learn here all about Toolbar Configuration in Syncfusion JavaScript Markdown Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Toolbar Configuration 
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Toolbar configuration in Markdown Editor Control

## Default toolbar items

By default, the Markdown Editor displays the following toolbar items:

> `Bold` , `Italic` , `|` , `Formats` , `Blockquote`, `OrderedList` , `UnorderedList` , `|` , `CreateLink` , `Image` , `|` , `SourceCode` , `Undo` , `Redo`

These default items cover Essential text editing features, such as text formatting, lists, and linking.

## Type of toolbar 

The Syncfusion Markdown Editor allows you to configure different type of toolbars using the [type](../api/rich-text-editor/toolbarType/#toolbartype) field in the [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings) property.

The available toolbar types are:

1. Expand
2. MultiRow
3. Scrollable

### Expanding the Toolbar

The default toolbar mode is `Expand`, which is configured using [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings) with type: `Expand`.

In this mode, any overflowing toolbar items are hidden in the next row. Users can reveal them by clicking the expand arrow.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/expand-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/expand-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/expand-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/expand-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/expand-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/expand-toolbar-cs1" %}
{% endif %}

### Configuring a Multi-row Toolbar

By setting type: `MultiRow` in [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings), the toolbar items are arranged across multiple rows. This ensures that all configured toolbar items are always visible.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/expand-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/expand-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/expand-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/multi-row-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/multi-row-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/multi-row-toolbar-cs1" %}
{% endif %}

### Implementing a Scrollable Toolbar

Use `type: 'Scrollable'` in [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings) to create a single-line toolbar with horizontal scrolling capability for overflow items.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/scrollable-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/scrollable-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/scrollable-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/scrollable-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/scrollable-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/scrollable-toolbar-cs1" %}
{% endif %}

### Creating a Sticky Toolbar

By default, the toolbar remains fixed at the top of the Markdown editor when scrolling.

You can customize its position by setting [floatingToolbarOffset](../api/rich-text-editor/#floatingtoolbaroffset) to adjust the offset from the top of the document.

Additionally, you can enable or disable the floating toolbar using the [enableFloating](../api/rich-text-editor/toolbarSettings/#enablefloating) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/floating-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/floating-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/floating-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/floating-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/floating-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/floating-toolbar-cs1" %}
{% endif %}

## Custom Toolbar Items

The Markdown Editor allows you to add custom commands to the toolbar using the [toolbarSettings](../api/rich-text-editor/toolbarSettings/#toolbarsettings) property. These custom commands can be displayed as plain text, icons, or HTML templates. You can define their order and grouping, ensuring a structured and intuitive toolbar layout. Additionally, actions can be bound to these commands by retrieving their instances and handling events accordingly.

In this example, a custom toolbar item (Ω) is added to insert special characters into the editor. When users click the Ω button, a list of special characters appears, allowing them to select and insert a character into the content. This feature enhances the Markdown Editor by providing quick access to special symbols without manually entering character codes.

The following code snippet demonstrates how to configure a custom toolbar item with a tooltip. The item is added to the [items](../api/rich-text-editor/toolbarSettings/#items) field of the `toolbarSettings` property, ensuring seamless integration within the toolbar.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/custom-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/custom-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/custom-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/custom-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/markdown-editor/custom-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/markdown-editor/custom-toolbar-cs1" %}
{% endif %}