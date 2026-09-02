---
layout: post
title: Font Styling in TypeScript Rich Text Editor | Syncfusion
description:  Learn how to customize font family, font size, text color, background color, Google Fonts, and custom font styles in the TypeScript Rich Text Editor.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Font Styling in TypeScript Rich Text Editor

## Font family

The Rich Text Editor initializes with a default font family, which inherits the font family of the parent element. You can change the font for selected text using the font family dropdown in the toolbar. When the default font family is selected, the toolbar will display "Font Name". However, for other font families, the toolbar will show the name of the selected font.

To apply a different font style to a specific section of the content, follow these steps:

1. Select the text you want to change.
2. Choose the desired font style from the drop-down menu in the toolbar.

These steps will apply the selected font style to the chosen text, allowing you to customize the appearance of your content easily.

### Built-in font family

You can add the `FontName` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettingsmodel#items) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-family-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-family-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-family-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-family-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-family-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-family-cs1" %}
{% endif %}

The Rich Text Editor comes with a pre-configured set of [fontFamily](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#fontfamily) property.

### Custom font family

The Rich Text Editor supports providing custom fonts along with the existing list. To add additional font names to the font dropdown, you can configure the items field of the [fontFamily](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#fontfamily) property. This allows you to extend the available font options beyond the default selection.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/custom-font-family-cs1" %}
{% endif %}

### Google font support

To use web fonts in Rich Text Editor, it is not needed for the web fonts to be present in local machine. To add the web fonts to Rich Text Editor, you need to refer the web font links and add the font names in the [fontFamily](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#fontfamily) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-cs1" %}
{% endif %}

The below font style links are referred in the page.

```ts

<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Great+Vibes">

```

> In the above sample, you can see that you have added two Google web fonts (`Roboto` and `Great vibes`) to `Rich Text Editor`.

## Font size

The Rich Text Editor initializes with a default font size, which inherits the font size of the parent element. You can change the font for selected text using the font size dropdown in the toolbar. When the default font size is selected, the toolbar will display "Font Size". However, for other font sizes, the toolbar will show the name of the selected font.

### Built-in font size

You can add the `FontSize` tool in the Rich Text Editor toolbar using the `toolbarSettings` [items](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettingsmodel#items) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs1" %}
{% endif %}

The Rich Text Editor includes a default set of [fontSize](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#fontsize) property.

### Custom font size

The Rich Text Editor supports providing custom fonts along with the existing list. To add additional font names to the font dropdown, you can configure the items field of the [fontSize](https://ej2.syncfusion.com/documentation/api/rich-text-editor/fontsize#fontsize) property. This allows you to extend the available font options beyond the default selection.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs2" %}
{% endif %}

## Font and background color

You can add the `FontColor` and `BackgroundColor` tools to the Rich Text Editor toolbar using the `toolbarSettings` [items](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettingsmodel#items) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-background-color-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-background-color-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-background-color-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-background-color-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-background-color-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/font-background-color-cs1" %}
{% endif %}

### Custom font and background colors

To apply `font color` or `background color` to selected content in the Rich Text Editor, use the font color and background color tools.

The Rich Text Editor offers custom font and background colors along with the existing list through the [colorCode](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/backgroundcolormodel#colorcode) field of the [fontColor](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#fontcolor) and [backgroundColor](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#backgroundcolor) properties.

Both the `FontColor` and `BackgroundColor` properties offer two modes: `Picker` and `Palette`. The Palette mode provides a predefined set of colors, while the Picker mode includes a color scheme to choose custom colors. You can switch between these options using the [modeSwitcher](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/fontcolormodel#modeswitcher) feature.

We can specify the number of columns in the color palette for both `FontColor` and `BackgroundColor` using the [columns](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/backgroundcolormodel#columns) property.

The [default](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/backgroundcolormodel#default) property specifies the default `FontColor` and `BackgroundColor` that is applied when no color is explicitly selected by the user. This color will be preselected in the `FontColor` and `BackgroundColor` color palettes and used as the initial highlight color for text.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/styling-cs3" %}
{% endif %}

### Show recent color

The [showRecentColors](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/fontcolor#showrecentcolor) feature in the Rich Text Editor provides quick access to a row of recently used colors displayed below the main palette. This streamlines editing by keeping frequently used colors easily accessible, improving styling efficiency and consistency.

This feature can be enabled separately for the [fontColor](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#fontcolor) and [backgroundColor](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#backgroundcolor) tools, giving flexibility based on formatting needs. It is especially helpful when working with consistent color themes, eliminating the need to repeatedly search through the full palette.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/show-recent-color/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/show-recent-color/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/show-recent-color" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/show-recent-color/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/show-recent-color/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/show-recent-color" %}
{% endif %}
