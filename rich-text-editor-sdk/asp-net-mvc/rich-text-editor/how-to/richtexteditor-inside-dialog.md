---
layout: post
title: Render ASP.NET MVC Rich Text Editor in a Dialog | Syncfusion
description: Learn how to render the ASP.NET MVC Rich Text Editor inside a Dialog and refresh the editor UI for proper toolbar rendering.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Render ASP.NET MVC Rich Text Editor in Dialog

When rendering the Rich Text Editor inside a Dialog Control, the dialog container and its wrapper elements are initially styled with `display: none`. This styling prevents the editor's toolbar from calculating the proper offset width. As a result, the toolbar may render incorrectly, appearing above the edit area container.

To resolve this issue, use the `RefreshUI` method of the Rich Text Editor together with the [Open](https://help.syncfusion.com/cr/aspnetmvc-js2/Syncfusion.EJ2.Popups.Dialog.html#Syncfusion_EJ2_Popups_Dialog_Open) event. This refreshes the Rich Text Editor's UI once the Dialog becomes visible.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/richtexteditor-inside-dialog/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/richtexteditor-inside-dialog/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/richtexteditor-inside-dialog/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/how-to/richtexteditor-inside-dialog/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}
