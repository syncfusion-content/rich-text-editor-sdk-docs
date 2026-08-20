---
layout: post
title: Handle Ctrl+S Shortcut in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to bind a keyboard shortcut (Ctrl+S) in the ASP.NET MVC Rich Text Editor to call updateValue and persist the editor content.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---


# Implement Ctrl+S Shortcut to Save Content in ASP.NET MVC Rich Text Editor

To achieve this, bind the `keydown` event to the Rich Text Editor's content area and detect the `Ctrl+S` keypress via its `keyCode`. In the `keydown` event handler, call the `updateValue` method to update the [`Value`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_Value) property, and then persist the content to the required database using the same.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/save/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/save/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/save/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/save/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}


