---
layout: post
title: Style and Appearance in Angular Rich Text Editor | Syncfusion
description: Learn how to customize the Angular Rich Text Editor style and appearance using CSS for the content area, toolbar, placeholder, and UI elements.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Style and Appearance in Angular Rich Text Editor

Below are the CSS selectors you can use to customize the Rich Text Editor's appearance.

## Style the placeholder text

Use the following CSS to customize the default color in the Rich Text Editor's placeholder.

```CSS

.e-richtexteditor .e-rte-placeholder {
    color: blue;
    font-family: monospace;
}

```

## Style the editor content area

Use the following CSS to modify the default style of the Rich Text Editor's content area, including font properties, background, and text color.

```CSS
/* To change font family and font size */
.e-richtexteditor .e-rte-content .e-content,
.e-richtexteditor .e-source-content .e-content {
    font-size: 20px;
    font-family: Segoe ui;
}

/* To change font color and content background */
.e-richtexteditor .e-rte-content,
.e-richtexteditor .e-source-content {
    background: seashell;
    color: blue;
}
```

## Customize the toolbar appearance

Use the following CSS to customize the default color in the Rich Text Editor's toolbar icon.

```CSS
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

## Style the character count display

Use the following CSS to customize the default color in the Rich Text Editor's character count.

```CSS
/* To change font color, font family, font size and opacity  */
.e-richtexteditor .e-rte-character-count {
    color: red;
    font-family: segoe ui;
    font-size: 18px;
    opacity: 0.54;
    padding-bottom: 2px;
    padding-right: 14px;
}
```

## Modify the editor container border

Use the following CSS to customize the border color in the Rich Text Editor's container.

```CSS

.e-richtexteditor .e-rte-container{
    border: 2px solid #454bc1;
    border-radius: 4px;
}

```

## Highlight specific text programmatically

Programmatically highlight a portion of the text in the editor by setting the background color. This can be achieved by applying a background style to the selected text using the Rich Text Editor's `executeCommand` method.


{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/highlight-text/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/highlight-text/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/highlight-text" %}

## See also

* [Text styling and formatting](./tools/styling-tools)
* [Style encapsulation](./style-encapsulation.md)