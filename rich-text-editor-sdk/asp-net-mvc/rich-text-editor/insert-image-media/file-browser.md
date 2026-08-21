---
layout: post
title: File Browser in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to browse, select, and insert files from server folders and cloud storage using the File Browser in the ASP.NET MVC Rich Text Editor.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# File Browser in ASP.NET MVC Rich Text Editor

The Rich Text Editor allows you to browse and insert files into the edit panel using the file browser. The file browser lets users browse and select a file or folder from the file system, and it supports various cloud services.

The following example explains how to configure the file browser within the Rich Text Editor control.

1. Add the `FileManager` toolbar item in the `ToolbarSettings.Items` property.
2. Set the [Enable](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditorFileManagerSettings.html#Syncfusion_EJ2_RichTextEditor_RichTextEditorFileManagerSettings_Enable) property to `true` on the [FileManagerSettings](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.RichTextEditor.RichTextEditorFileManagerSettings.html) to show the file browser when the `FileManager` toolbar item is clicked.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/file-browser/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/file-browser/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/file-browser/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/file-browser/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}