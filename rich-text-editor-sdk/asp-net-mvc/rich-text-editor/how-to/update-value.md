---
layout: post
title: Handle Ctrl+S Shortcut in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to implement the Ctrl+S keyboard shortcut in the ASP.NET MVC Rich Text Editor to update values and save editor content programmatically.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Update Value via Keyboard Shortcut in ASP.NET MVC Rich Text Editor

# Implement Ctrl+S Shortcut in ASP.NET MVC Rich Text Editor

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


