---
layout: post
title: Save Content to Server in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to save content to a file on the server in ASP.NET Core Rich Text Editor and securely store editor data.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---


# Save Content to a Server File in ASP.NET Core Rich Text Editor

Rich Text Editor content can be passed from the view to a controller through an `XMLHttpRequest` post request. The content is sent to a controller method where it can be saved to a text file or any other format using `StreamWriter`. Refer to the following sample.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/savefile/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/savefile/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/savefile/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/savefile/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

