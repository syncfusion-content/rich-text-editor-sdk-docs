---
layout: post
title: Form Support in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to integrate the ASP.NET MVC Rich Text Editor with HTML forms, capture editor content, and validate user input in web applications.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---


# Form Support in ASP.NET MVC Rich Text Editor

This below sample demonstrate how to get the Rich Text Editor value in button click.

## Render the Rich Text Editor

Render the Rich Text Editor inside a form as shown below.

```html

<form id="myForm" class="form-vertical">
<div class="form-group">
@Html.EJS().RichTextEditor("defaultRTE").MaxLength(100).Render()
<div id="dateError" style="padding-top: 10px"></div>
</div>
<div style="text-align: center">
<button id="validateSubmit" class="samplebtn e-control e-btn" type="submit" data-ripple="true">Submit</button>
<button id="resetbtn" class="samplebtn e-control e-btn" type="reset" data-ripple="true">Reset</button>
</div>
</form>

```

## Obtain the Value

Upon submitting the form, the `getValue` method is triggered. The Rich Text Editor's value is captured via the `FormData` class as shown in the sample below.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/form-sample/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/form-sample/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/form-sample/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/form-sample/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}



## See Also

* [How to integrate the third party library](../third-party-integration)
* [How to validate the value](../validation)