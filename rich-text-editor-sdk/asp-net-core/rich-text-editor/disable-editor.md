---
layout: post
title: Disable ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to disable the ASP.NET Core Rich Text Editor to restrict editing and display content in a read-only state.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Disable ASP.NET Core Rich Text Editor

The ASP.NET Core Rich Text Editor offers a feature to disable the editor, preventing any user interaction. This functionality is useful when you need to display content without allowing modifications or when you want to temporarily restrict user input.

## How to Disable the Editor

To disable the editor, set the [enabled](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_Enabled) property to `false`. When disabled, the editor becomes non-interactive, ensuring that users cannot edit or modify the content.

Below is an example demonstrating how to disable the Rich Text Editor by setting the `enabled` property to `false`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/disable-editor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/disable-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/disable-editor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/disable-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


## See Also

* [Implementing Read-Only Mode in Rich Text Editor](./validation-security/read-only-mode)