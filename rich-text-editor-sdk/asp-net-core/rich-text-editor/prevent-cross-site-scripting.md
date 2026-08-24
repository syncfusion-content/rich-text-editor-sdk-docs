---
layout: post
title: Prevent XSS in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to prevent Cross-Site Scripting (XSS) attacks in the ASP.NET Core Rich Text Editor by validating and sanitizing content.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Prevent XSS in ASP.NET Core Rich Text Editor

The Rich Text Editor allows users to edit content securely by preventing cross-site scripting (XSS) attacks. By default, it provides built-in support to remove elements from editor content that could cause XSS attacks. The editor removes elements based on their attributes if it is possible to execute a script through them.


The [enableHtmlSanitizer](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.richtexteditor.richtexteditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_EnableHtmlSanitizer) property determines whether XSS prevention is active. It is set to `true` by default.

In the following sample, the `script` tag and `onmouseover` attribute are removed from the content of the Rich Text Editor.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/cross/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/cross/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/cross/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/cross/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


> The XSS prevention feature is only applicable when the [editorMode](https://help.syncfusion.com/cr/aspnetcore-js2/syncfusion.ej2.richtexteditor.richtexteditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_EditorMode) is set to `HTML`.


## Custom Cross-Site Scripting Prevention

For more precise control over XSS prevention, you can implement custom filtering logic using the [beforeSanitizeHtml](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_BeforeSanitizeHtml) event.

### Implementing Custom Cross-Site Scripting and Filtering in Rich Text Editor

1. Use the [beforeSanitizeHtml](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_BeforeSanitizeHtml) event to define custom filtering rules.
2. Utilize the `helper` function from the event argument to apply your custom filters.
3. Set the `cancel` argument to `true` if you want to override the built-in XSS prevention entirely.

The following sample demonstrates how to filter the `script` tag by value.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/custom-cross/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/custom-cross/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/custom-cross/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/custom-cross/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

You can also filter out the `e.selectors.tags` and `e.selector.attributes` in the [beforeSanitizeHtml](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_BeforeSanitizeHtml) event to control which HTML tags and attributes are allowed to appear. 

For instance, if you want to display `<iframe>`, you can manipulate the `e.selectors.tags` property in this event to selectively remove tags like `<iframe>`. This approach ensures that your application can safely display an iframe while preventing potential security risks associated with XSS vulnerabilities.

The following sample demonstrates how to filter the `iframe` tag.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/prevent-cross-site-scripting/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/prevent-cross-site-scripting/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/prevent-cross-site-scripting/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/prevent-cross-site-scripting/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}