---
layout: post
title: Check Image Size in ASP.NET MVC Rich Text Editor Component
description: Learn here all about Check Image Size in Syncfusion ASP.NET MVC Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Check Image Size
publishingplatform: rich-text-editor-sdk
documentation: ug
---


# Restrict the image uploading while uploading with large size

By using the Rich text editor's `ImageUploading` event, you can get the image size before uploading and restrict the image to upload, when the given image size is greater than the allowed size.

In the following, we have validated the image size before uploading and determined whether the image has been uploaded or not.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/check-image-size/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/check-image-size/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/check-image-size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/check-image-size/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

