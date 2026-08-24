---
layout: post
title: Render the ASP.NET Core Rich Text Editor in a Dialog | Syncfusion
description: Learn how to render the ASP.NET Core Rich Text Editor inside a Dialog and refresh the editor UI for proper toolbar rendering.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Render the ASP.NET Core Rich Text Editor in a Dialog

When rendering the Rich Text Editor inside a Dialog control, the dialog container and its wrapper elements are initially styled with `display: none`. This styling prevents the editor's toolbar from calculating the proper offset width, causing the toolbar to render incorrectly and appear above the edit area.

To resolve this issue, call the `refreshUI` method of the Rich Text Editor in the [open](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.Popups.Dialog.html#Syncfusion_EJ2_Popups_Dialog_Open) event of the Dialog. This ensures that the Rich Text Editor's UI is properly refreshed and rendered once the Dialog becomes visible.

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