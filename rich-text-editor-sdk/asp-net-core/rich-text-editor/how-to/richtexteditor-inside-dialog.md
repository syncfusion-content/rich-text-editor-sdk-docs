---
layout: post
title: Integrating Syncfusion RichTextEditor in a Dialog in ASP.NET Core
description: Integrating Rich Text Editor in Dialog in ASP.NET Core Rich Text Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Integrating Rich Text Editor in Dialog
publishingplatform: rich-text-editor-sdk
documentation: ug
---

# Integrating Rich Text Editor in Dialog Control

When rendering the Rich Text Editor inside a Dialog Control, the dialog container and its wrapper elements are initially styled with `display: none`. This styling prevents the editor's toolbar from calculating the proper offset width. As a result, the toolbar may render incorrectly, appearing above the edit area container.

To resolve this issue, we can utilize the `refreshUI` method of the Rich Text Editor in conjunction with the [open](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Popups.Dialog.html#Syncfusion_EJ2_Popups_Dialog_Open) event. This approach ensures that the Rich Text Editor's UI is properly refreshed and rendered once the Dialog is visible.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/richtexteditor-inside-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/richtexteditor-inside-dialog/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/richtexteditor-inside-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/rich-text-editor/how-to/richtexteditor-inside-dialog/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}