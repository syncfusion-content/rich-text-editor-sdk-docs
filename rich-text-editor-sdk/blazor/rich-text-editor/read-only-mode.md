---
layout: post
title: Read-Only Mode in Blazor Rich Text Editor | Syncfusion®
description: Learn how to configure read-only mode in Blazor Rich Text Editor to prevent user edits to content and much more details.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
---

# Controlling Editor Access in Blazor Rich Text Editor

## Read-only mode

The Rich Text Editor control offers a read-only mode that prevents the user from editing the content while still allowing them to view it. This feature is particularly useful when you want to display formatted content without permitting modifications.

The default value of [Readonly](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.RichTextEditor.SfRichTextEditor.html#Syncfusion_Blazor_RichTextEditor_SfRichTextEditor_Readonly) is `false`. To enable the read-only mode, set the `Readonly` property to `true`. This disables editing while keeping the toolbar hidden and quick toolbars disabled.

{% tabs %}
{% highlight razor %}

{% include_relative code-snippet/read-only-mode.razor %}

{% endhighlight %}
{% endtabs %}

## See also

* [Accessibility in Rich Text Editor](./accessibility)
* [Toolbar customization](./tools/built-in-tools)
* [Events in Rich Text Editor](./events)
