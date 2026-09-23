---
layout: post
title: Validation in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to validate content in the ASP.NET MVC Rich Text Editor using built-in validation support and form integration.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---


# Validation in ASP.NET MVC Rich Text Editor

Validate the Rich Text Editor’s value on form submission by applying Validation Rules and Validation Message to the Rich Text Editor.

## Validation Rules

The Rich Text Editor is a textarea control. The Rich Text Editor also provides the functionality of character count and its validation. So, you can validate the Rich Text Editor’s value on form submission by applying Validation Rules and Validation Message to the Rich Text Editor.

| Rules | Description |
|----------------|---------|
| required | Requires a value for the Rich Text Editor control. |
| minlength | Requires the value to be of a given minimum character count. |
| maxlength | Requires the value to be of a given maximum character count. |

This sample is used to validate form using the obtrusive Validation. Type the values in Rich Text Editor and the form enables the validation with the formvalidator rules by clicking on the submit externally. All rules are validated by the formvalidator rules.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/default-validation/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/default-validation/controller.cs %}
{% endhighlight %}
{% endtabs %}



## Validation Message

The default error message for a rule can be customizable by defining it along with concern rule object as follows

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/validation-rules/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/validation-rules/controller.cs %}
{% endhighlight %}
{% endtabs %}



## Custom Placement of Validation Message

The FormValidator has an event `customPlacement` which can be used to place the error message from default position to desired custom location.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/custom-placement/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/custom-placement/controller.cs %}
{% endhighlight %}
{% endtabs %}


