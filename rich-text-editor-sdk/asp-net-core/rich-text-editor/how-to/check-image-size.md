---
layout: post
title: Validate Image Size in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to validate image dimensions before uploading in the ASP.NET Core Rich Text Editor and restrict images that exceed the allowed size.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---


# Validate Image Size Before Upload in ASP.NET Core Rich Text Editor

By using the Rich Text Editor's [`imageUploading`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_ImageUploading) event, you can read the image size before uploading and cancel the upload when the image exceeds the allowed size. To cancel the upload, set the `cancel` argument to `true`.

In the following, we have validated the image size before uploading and determined whether the image has been uploaded or not.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/check-image-size/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/check-image-size/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/check-image-size/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/check-image-size/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

