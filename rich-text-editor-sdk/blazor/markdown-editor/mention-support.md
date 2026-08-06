---
layout: post
title: Mentions in Blazor Markdown Editor | Syncfusion®
description: Learn how to enable mentions in the Blazor Markdown Editorusing the @ trigger to tag users or items from a suggestion list while editing Markdown content.
platform: rich-text-editor-sdk
control: MarkdownEditor
documentation: ug
---

# Mentions in Blazor Markdown Editor

By integrating the [Mention](https://blazor.syncfusion.com/documentation/mention/getting-started) component with the Markdown Editor, users can easily mention or tag other users or objects from the suggested list without manually typing names or identifiers.

## Setup and configuration

To enable the Mention functionality within the Markdown Editor, set the [Target](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DropDowns.SfMention-1.html#Syncfusion_Blazor_DropDowns_SfMention_1_Target)  property of the Mention component to the ID of the textarea element inside the editor. When specifying the target, ensure that you append the suffix `_editable-content` to the ID. This configuration allows users to mention or tag others from the suggested list while editing text.

## Using mentions

When a user types the `@` symbol followed by a character, the Markdown Editor displays a list of suggestions. Users can select an item from the list by either clicking on it or typing the desired name.

## Configuring Mention Properties

The Mention component provides several customizable properties to enhance the tagging experience:

* [AllowSpaces](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DropDowns.SfMention-1.html#Syncfusion_Blazor_DropDowns_SfMention_1_AllowSpaces) - Allow to continue search action if user enter space after mention character while searching.
* [SuggestionCount](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DropDowns.SfMention-1.html#Syncfusion_Blazor_DropDowns_SfMention_1_SuggestionCount) - The maximum number of items that will be displayed in the suggestion list.
* [ItemTemplate](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.DropDowns.SfDropDownBase-1.html#Syncfusion_Blazor_DropDowns_SfDropDownBase_1_ItemTemplate) - Used to display the customized appearance in suggestion list.

## Example: How to Implement Mention Support in Markdown Editor

The following example demonstrates how to enable Mention support in the Blazor Markdown Editor.

{% tabs %}
{% highlight razor %}

{% include_relative code-snippet/markdown-mention-support.razor %}

{% endhighlight %}
{% endtabs %}

![Blazor Markdown Editor with Mention Support](./images/blazor-markdowneditor-markdown-mention.webp)