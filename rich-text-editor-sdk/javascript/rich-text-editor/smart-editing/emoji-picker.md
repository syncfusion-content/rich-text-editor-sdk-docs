---
layout: post
title: Emoji Picker in JavaScript Rich Text Editor | Syncfusion
description: Learn how to add emojis in the JavaScript Rich Text Editor with search, categories, keyboard support, and a better content creation experience.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Emoji Picker in JavaScript Rich Text Editor

An emoji picker is a tool designed for adding emojis or emoticons to text with ease. It usually appears as a small window or panel showcasing a variety of emojis categorized into sections such as smileys, animals, food, and more. The desired emoji can be selected by clicking on it or typing its name into a search bar.

## Configuring the emoji picker tool in the toolbar

Add the `EmojiPicker` tool to the Rich Text Editor toolbar using the `toolbarSettings` [items](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#items) property.

By default, a predefined set of emojis is configured. However, these emojis can be customized according to specific needs by using the [emojiPickerSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/emojiPickerSettings) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs2" %}
{% endif %}

You can also customize the icons of the emoji categories using the [iconCss](https://ej2.syncfusion.com/documentation/api/rich-text-editor/emojiiconsset#iconCss) and [code](https://ej2.syncfusion.com/documentation/api/rich-text-editor/emojiiconsset#code) properties.

When both `iconCss` and `code` properties are provided, the `iconCss` property takes precedence in determining the appearance of the category icon.

You can also enable a filtering feature to efficiently manage a large dataset of emojis. By setting the [showSearchBox](https://ej2.syncfusion.com/documentation/api/rich-text-editor/emojiPickerSettings#showSearchBox) property to `true` (the default value), users can use a search box to filter the displayed emojis.

The following code example shows how to add the emoji picker tool in the Rich Text Editor with a customized set of emojis.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs1" %}

{% elsif page.publishingplatform == "javascript" %}
          
{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/emoji-picker-cs1" %}
{% endif %}

## Using shortcut keys to open the emoji picker

Quickly access the emoji picker by pressing the colon (:) key while typing a word prefix in an editor, allowing instant emoji selection and display. Moreover, continue typing in the editor after the colon (:) to filter and refine your search for the desired emojis.

![JavaScript Rich Text Editor Emoji Picker](../images/javascript-richtexteditor-emoji-picker-shortcut.png)

## Navigating and selecting emojis using the keyboard

The emoji picker popup offers keyboard navigation options, allowing you to move the emoji focus from one emoji to another. The following keys are used for navigation:

- **Arrow keys**: Use the arrow keys (up, down, left, right) to move the emoji focus in the corresponding direction.
- **Enter**: Press the Enter key to select the currently focused emoji.
- **Escape**: Press Escape to close the emoji picker popup without selecting an emoji.
