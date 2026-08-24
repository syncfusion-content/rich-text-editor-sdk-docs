---
layout: post
title: Remove Formatting in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to remove text formatting in the ASP.NET MVC Rich Text Editor and clear applied styles to maintain consistent content.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Remove Formatting in ASP.NET MVC Rich Text Editor

The `Clear Format` feature removes any applied formatting from selected text. It is useful when you need to:

- Remove multiple styles at once
- Quickly standardize text formatting
- Prepare text for new styling

## Configuring Clear Format

To enable the Clear Format feature in your Rich Text Editor, you need to add it to the toolbar items. Follow these steps:

1. Open your component file where you've implemented the Rich Text Editor.
2. Locate the [ToolbarSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/syncfusion.ej2.richtexteditor.richtexteditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_ToolbarSettings) property in your Rich Text Editor configuration.
3. Add `'ClearFormat'` to the `Items` array within `ToolbarSettings`.

Here's an example of how to configure the Clear Format feature:

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/clear-format-cs1/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/clear-format-cs1/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/clear-format-cs1/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/clear-format-cs1/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## Using Clear Format

Once configured, use the Clear Format feature as follows:

1. Select the text with formatting you want to remove.
2. Click the `Clear Format` button in the toolbar.
3. The selected text reverts to its original, unformatted state.

The following example shows how to use `ClearFormat` effectively in the Rich Text Editor.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/clear-format-cs2/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/clear-format-cs2/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/clear-format-cs2/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/clear-format-cs2/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

## See Also

[Copy and Apply Formatting](./format-painter)