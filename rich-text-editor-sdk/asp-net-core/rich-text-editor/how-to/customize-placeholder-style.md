---
layout: post
title: Customize Placeholder in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to customize the placeholder text style in the ASP.NET Core Rich Text Editor using CSS classes to modify its appearance.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Customize Placeholder Text Style in ASP.NET Core Rich Text Editor

By using `e-rte-placeholder` class, you can customize the placeholder style.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/placeholder/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/placeholder/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/placeholder/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/placeholder/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

