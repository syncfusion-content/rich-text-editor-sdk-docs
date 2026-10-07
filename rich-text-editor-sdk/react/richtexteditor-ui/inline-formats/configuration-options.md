---
layout: post
title: Inline Format Options in React Modern Rich Text Editor | Syncfusion
description: Learn how to configure font family, font size, font color, background color, and other inline format options in the React Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Inline Format Options in React Modern Rich Text Editor

The Modern Rich Text Editor exposes the configuration surface for inline formats through the `fontSize`, `fontFamily`, `fontColor`, and `backgroundColor` settings models. These options control which values appear in the toolbar dropdowns and Color Pickers and how those controls are rendered. For the full list of inline formats, see [Supported Formats](supported-formats). For runtime invocation of every inline format, see [Commands](commands).

## Font family

The Rich Text Editor initializes with a default font family, which inherits the font family of the parent element. You can change the font for selected text using the font family dropdown in the toolbar. When the default font family is selected, the toolbar displays `Font Name`. For other font families, the toolbar shows the name of the selected font.

### Built-in font family

You can add the `FontName` tool to the Modern Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbarSettings#items) property.

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-built-in-fontname/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-built-in-fontname/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-built-in-fontname/" %}

### Custom font family

The Modern Rich Text Editor supports providing custom fonts along with the existing list. To add additional font names to the font dropdown, configure the `items` field of the [fontFamily](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontFamily#items) property.

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-custom-fontfamily/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-custom-fontfamily/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-custom-fontfamily/" %}

### Google font support

To use web fonts in the Modern Rich Text Editor, the web fonts do not need to be present on the local machine. To add web fonts to the editor, refer the web font links in your page and add the font names to the [fontFamily](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontFamily#items) property.

```ts
import { RichTextEditorUIComponent } from '@syncfusion/ej2-react-richtexteditor-ui';
import React, { useRef } from 'react';

function App() {
    const editorRef = useRef<RichTextEditorUIComponent>(null);

    return (
        <RichTextEditorUIComponent
            ref={editorRef}
            toolbarSettings={{
                items: ['FontName']
            }}
            fontFamily={{
                items: [
                    { text: 'Default', value: 'Default' },
                    { text: 'Roboto', value: 'Roboto, sans-serif' },
                    { text: 'Great Vibes', value: '"Great Vibes", cursive' }
                ]
            }}
        />
    );
}

export default App;
```

The following web font links are referenced in the page.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Great+Vibes">
```

## Font size

The Modern Rich Text Editor initializes with a default font size, which inherits the font size of the parent element. You can change the size for the selected text using the font size dropdown in the toolbar. When the default font size is selected, the toolbar displays `Font Size`. For other font sizes, the toolbar shows the selected size.

### Built-in font size

You can add the `FontSize` tool to the Modern Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbarSettings#items) property.

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-built-in-fontsize/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-built-in-fontsize/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-built-in-fontsize/" %}

### Custom font size

The Modern Rich Text Editor supports providing custom sizes along with the existing list. To add additional sizes to the font size dropdown, configure the `items` field of the [fontSize](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontSize#items) property.

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-custom-fontsize/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-custom-fontsize/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-custom-fontsize/" %}

## Font and background color

You can add the `FontColor` and `BackgroundColor` tools to the Modern Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbarSettings#items) property.

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-font-color/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-font-color/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/Inlineformats-options-font-color/" %}

### Custom font and background colors

The `FontColor` and `BackgroundColor` properties offer two modes — `Picker` and `Palette`. The `Palette` mode provides a predefined set of colors, while the `Picker` mode includes a color scheme to choose custom colors. You can switch between these options using the [modeSwitcher](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/fontColorModel#modeSwitcher) feature.

The number of columns in the color palette for both `FontColor` and `BackgroundColor` can be configured using the [columns](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/backgroundColorModel#columns) property. The [default](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/backgroundColorModel#default) property specifies the default color that is applied when no color is explicitly selected by the user.

{% tabs %}

{% highlight ts tabtitle="App.tsx" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/inlineformats-options1/app/App.tsx %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/inlineformats-options1/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/richtexteditor-ui/inline-formats/inlineformats-options1/" %}

## See also

* [Supported Formats](supported-formats) — the inventory of inline marks and their toolbar items.
* [Commands](commands) — how to invoke every inline format from code.
