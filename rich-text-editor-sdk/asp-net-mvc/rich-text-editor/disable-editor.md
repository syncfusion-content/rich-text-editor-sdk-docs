---
layout: post
title: Disable ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to disable the ASP.NET MVC Rich Text Editor to restrict editing and display content in a read-only state.
control: Rich Text Editor
platform: rich-text-editor-sdk
publishingplatform: rich-text-editor-sdk
documentation: ug
---

# Disable ASP.NET MVC Rich Text Editor

The Angular Rich Text Editor component offers a feature to disable the editor, preventing any user interaction.This functionality is particularly useful when you need to display content without allowing modifications or when you want to temporarily restrict user input.

### How to Disable the Editor

To disable the editor, set the [Enabled](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_Enabled) property to `false`.

When disabled, the editor becomes non-interactive, ensuring that users cannot edit or modify the content.

Below are examples and code snippets demonstrating how to disable the Rich Text Editor by setting the `Enabled` property to `false`.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/disable-editor/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/disable-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/disable-editor/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/disable-editor/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

### See Also

[Implementing Read-Only Mode in Rich Text Editor](./read-only-mode)