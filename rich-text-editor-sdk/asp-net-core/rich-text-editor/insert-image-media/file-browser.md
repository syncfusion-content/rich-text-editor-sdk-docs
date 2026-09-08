---
layout: post
title: File Browser in ASP.NET Core Rich Text Editor | Syncfusion
description: Learn how to browse, select, and insert files from server folders and cloud storage using the File Browser in the ASP.NET Core Rich Text Editor.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# File browser in ASP.NET Core Rich Text Editor

The Rich Text Editor allows you to browse and insert images into the edit panel using the file browser. The file browser enables users to browse and select a file or folder from the file system, and it supports various cloud services.

The following example explains how to configure the file browser within the Rich Text Editor control.

* Add the `FileManager` toolbar item in the `toolbarSettings` API `items` property.
* Set the [`enable`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditorFileManagerSettings.html#Syncfusion_EJ2_RichTextEditor_RichTextEditorFileManagerSettings_Enable) property to `true` in the [`fileManagerSettings`](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditorFileManagerSettings.html) property so the file browser appears when the `FileManager` toolbar item is clicked.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/file-browser/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/file-browser/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/file-browser/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/file-browser/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}