---
layout: post
title: Update Value in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to bind a keyboard shortcut (Ctrl+S) in the ASP.NET Core Rich Text Editor to call updateValue and persist the editor content.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---


# Update Value via Keyboard Shortcut in ASP.NET Core Rich Text Editor

To achieve this, we need to bind the `keydown` event to the Rich Text Editor content and capture the `ctrl + s` key press using its `keyCode`.

In the `keydown` event handler, the `updateValue` method is called to update the [`value`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_Value) property and then we can save the content in the required database using the same.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/save/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/save/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/save/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/save/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


