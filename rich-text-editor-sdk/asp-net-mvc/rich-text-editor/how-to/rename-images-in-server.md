---
layout: post
title: Rename Uploaded Images in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to rename uploaded images in the ASP.NET MVC Rich Text Editor using the image upload success event and a custom server-side upload handler.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---


# Rename Uploaded Images in ASP.NET MVC Rich Text Editor

By using the [`InsertImageSettings`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_InsertImageSettings) property, you can specify the server handler to upload the selected image. Then bind the [`ImageUploadSuccess`](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditor.html#Syncfusion_EJ2_RichTextEditor_RichTextEditor_ImageUploadSuccess) event to receive the modified file name from the server and update the **Insert Image** dialog.

Refer to the `rename.cs` controller file to configure the server-side handler.

> A runnable demo application is available in this [GitHub](https://github.com/SyncfusionExamples/aspnet-mvc-richtexteditor-rename-image) repository.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/rename/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Rename.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/rename/rename.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/rename/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Rename.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/rename/rename.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}

