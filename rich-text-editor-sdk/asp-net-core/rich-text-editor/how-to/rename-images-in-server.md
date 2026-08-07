---
layout: post
title: Rename Uploaded Images in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to rename uploaded images in the ASP.NET Core Rich Text Editor using the image upload success event and a custom server-side upload handler.
control: Rich Text Editor
platform: rich-text-editor-sdk
publishingplatform: rich-text-editor-sdk
documentation: ug
---


# Rename Uploaded Images in ASP.NET Core Rich Text Editor

By using the [`insertImageSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_InsertImageSettings) property, you can specify the server handler to upload the selected image. Then you can bind the [`imageUploadSuccess`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_ImageUploadSuccess) event, to receive the modified file name from the server and update it in the Rich Text Editor's insert image dialog.

Refer `controller` file for configure the server-side.

N> The runnable demo application is available in this [Github](https://github.com/SyncfusionExamples/aspnet-core-richtexteditor-rename-image) repository.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/rename/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/rename/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/rename/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/rename/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

