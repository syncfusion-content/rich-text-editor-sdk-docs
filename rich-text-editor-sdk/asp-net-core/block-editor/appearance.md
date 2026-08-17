---
layout: post
title: Style and Appearance in ASP.NET Core Block Editor | Syncfusion
description: Learn how to customize the ASP.NET Core BlockEditor appearance by configuring width, height, read-only mode, and custom CSS classes.
platform: rich-text-editor-sdk
control: BlockEditor
documentation: ug
---

# Style and Appearance in ASP.NET Core Block Editor

The Block Editor control provides various appearance customization options to match your application's design requirements. These properties allow you to control the visual styling, layout, and overall look and feel of the editor.

## Setting width and height

You can specify the width and height for the Block Editor control using the [Width](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.BlockEditor.BlockEditor.html#Syncfusion_EJ2_BlockEditor_BlockEditor_Width) and [Height](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.BlockEditor.BlockEditor.html#Syncfusion_EJ2_BlockEditor_BlockEditor_Height) properties.

```cshtml

<div id='blockeditor-container'>
    <ejs-blockeditor id="block-editor" height="80vh" width="100%"></ejs-blockeditor>
</div>

// Or with specific pixel values
<div id='blockeditor-container'>
    <ejs-blockeditor id="block-editor" height="500px" width="800px"></ejs-blockeditor>
</div>

```

## Setting readonly mode

You can utilize the [ReadOnly](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.BlockEditor.BlockEditor.html#Syncfusion_EJ2_BlockEditor_BlockEditor_ReadOnly) property to control whether the editor is in read-only mode. When set to `true`, users cannot edit the content but can still view it.

For comprehensive documentation on read-only mode, see [Read-Only Mode](editor-security/read-only-mode).

```cshtml

<div id='blockeditor-container'>
    <ejs-blockeditor id="block-editor" readOnly="true"></ejs-blockeditor>
</div>

```

## Customization using CSS Class

You can use the [CssClass](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.BlockEditor.BlockEditor.html#Syncfusion_EJ2_BlockEditor_BlockEditor_CssClass) property to customize the appearance of the Block Editor control by applying your own CSS styles.

**Example CSS definition:**

```css
.custom-editor-theme {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    font-family: 'Segoe UI', sans-serif;
}

.custom-editor-theme .e-block {
    margin-bottom: 12px;
}
```

**Block Editor markup:**

```cshtml

<div id='blockeditor-container'>
    <ejs-blockeditor id="block-editor" height="400px" width="600px" cssClass="custom-editor-theme"></ejs-blockeditor>
</div>

```

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/block-editor/appearance/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Appearance.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/block-editor/appearance/appearance.cs %}
{% endhighlight %}
{% endtabs %}

![Appearance](images/appearance.png)
