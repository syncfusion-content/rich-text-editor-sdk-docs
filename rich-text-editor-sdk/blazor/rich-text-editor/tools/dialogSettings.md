---
layout: post
title: Render Blazor Rich Text Editor in Dialog | Syncfusion®
description: Learn how to render the Blazor Rich Text Editor inside a Dialog and refresh the editor UI for proper toolbar rendering.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
---

# Render Blazor Rich Text Editor in Dialog

The Blazor Rich Text Editor provides enhanced customization for built-in dialogs through the [RichTextEditorDialogSettings](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.RichTextEditor.RichTextEditorDialogSettings.html) property. This feature allows developers to control the appearance, behavior, and positioning of dialogs such as image, link, and audio insertion dialogs.

The following table outlines the available configuration options:

| Options | Description |
|---------|-------------|
| `IsModal` | Accepts a boolean value that determines whether the dialog operates in **modal** (true) or **modeless** (false) mode. |
| `Target` | Specifies the target element for the dialog component. |
| `ZIndex` | Sets the z-index value of the dialog, allowing it to appear above or below other UI elements as needed. |

## Configuring dialog settings

The following example demonstrates how to configure dialog settings in the Blazor Rich Text Editor:

{% tabs %}
{% highlight cshtml %}

{% include_relative code-snippet/dialog-settings.razor %}

{% endhighlight %}
{% endtabs %}

![Blazor RichTextEditor DialogSettings](../images/dialog-Settings.webp)

## See also

* [How to configure the audio tool in the toolbar](./audio)
* [How to use link editing options in the toolbar items](./built-in-tools#hyperlinks)
