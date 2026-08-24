---
layout: post
title: Style and Appearance in ASP.NET MVC Rich Text Editor | Syncfusion
description: Learn how to customize the ASP.NET MVC Rich Text Editor style and appearance using CSS for the content area, toolbar, placeholder, and UI elements.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
---

# Style and Appearance in ASP.NET MVC Rich Text Editor

Use the following CSS structures to customize the editor's appearance.

## Styling the placeholder text

Use the following CSS to customize the placeholder text color:

```css
.e-richtexteditor .e-rte-placeholder {
    color: blue;
    font-family: monospace;
}
```

## Styling the editor content area

Use the following CSS to modify the default style of the editor's content area, including font properties, background, and text color.

```css
/* To change font family and font size */
.e-richtexteditor .e-rte-content .e-content,
.e-richtexteditor .e-source-content .e-content {
    font-size: 20px;
    font-family: "Segoe UI";
}

/* To change font color and content background */
.e-richtexteditor .e-rte-content,
.e-richtexteditor .e-source-content {
    background: seashell;
    color: blue;
}
```

## Customizing the toolbar appearance

Use the following CSS to customize the toolbar icon color.

```css
/* To change font color for toolbar icon */
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-icons,
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-icons:active {
    color: red;
}

/* To change font color for toolbar button */
.e-toolbar .e-tbar-btn,
.e-toolbar .e-tbar-btn:active,
.e-toolbar .e-tbar-btn:hover {
    color: red;
}

/* To change font color for toolbar button in active state*/
.e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-dropdown-btn.e-active .e-icons, .e-richtexteditor .e-rte-toolbar .e-toolbar-item .e-dropdown-btn.e-active .e-rte-dropdown-btn-text {
    color: red;
}

/* To change font color for expanded toolbar items */
.e-richtexteditor .e-rte-toolbar .e-toolbar-extended .e-toolbar-item .e-tbar-btn .e-icons,
.e-toolbar.e-extended-toolbar .e-toolbar-extended .e-toolbar-item .e-tbar-btn {
    color: red;
}
```

## Styling the character count display

Use the following CSS to customize the character count styling:

```css
.e-richtexteditor .e-rte-character-count {
    color: red;
    font-family: "Segoe UI";
    font-size: 18px;
    opacity: 0.54;
    padding-bottom: 2px;
    padding-right: 14px;
}
```

## Modifying the editor container border

Use the following CSS to customize the editor container border.

```css
.e-richtexteditor .e-rte-container {
    border: 2px solid #454bc1;
    border-radius: 4px;
}
```

## Highlighting specific text programmatically

Programmatically highlight a portion of the text in the editor by setting the background color. Apply a background style to the selected text using the Rich Text Editor's `executeCommand` method.

{% if page.publishingplatform == "aspnet-core" %}

{% tabs %}
{% highlight cshtml tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/highlight-specific-line/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/highlight-specific-line/controller.cs %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "aspnet-mvc" %}

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/highlight-specific-line/razor %}
{% endhighlight %}
{% highlight c# tabtitle="Controller.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/rich-text-editor/highlight-specific-line/controller.cs %}
{% endhighlight %}
{% endtabs %}
{% endif %}