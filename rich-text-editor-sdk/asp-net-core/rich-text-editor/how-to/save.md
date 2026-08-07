---
layout: post
title: Save Content to Server in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to save content to a file on the server in ASP.NET Core Rich Text Editor and securely store editor data.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---


# Save Content to a Server File in ASP.NET Core Rich Text Editor

Rich Text Editor content can be passed from view to controller through `XMLHttpRequest` post. Content will be sent to the corresponding method into the controller and this value can be saved in a text file or any other format using `streamWriter`. Refer to the following given code.

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

