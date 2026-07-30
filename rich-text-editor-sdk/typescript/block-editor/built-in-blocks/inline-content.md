---
layout: post
title: Inline Content in TypeScript Block Editor control | Syncfusion
description: Checkout and learn about Inline Content with TypeScript Block Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Inline Content  in TypeScript Block Editor control

In the Syncfusion Block Editor, all content is organized within blocks. Each block contains an array of [content](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#content) property that define the text and functionality within that block.

Each [contentModel](https://ej2.syncfusion.com/documentation/api/blockeditor/contentmodel) is an object with properties such as [id](https://ej2.syncfusion.com/documentation/api/blockeditor/contentmodel#id), [contentType](https://ej2.syncfusion.com/documentation/api/blockeditor/contentmodel#contentType), [content](https://ej2.syncfusion.com/documentation/api/blockeditor/contentmodel#content), and [properties](https://ej2.syncfusion.com/documentation/api/blockeditor/contentmodel#properties), allowing for granular control over its appearance and behavior.

## Setting content type

The Block Editor supports several inline content types through the `ContentType` enum, which can be set using the [contentType](https://ej2.syncfusion.com/documentation/api/blockeditor/contentmodel#contenttype) property.

| Built-in Content Type | Description                    |
| ----------------------- | ------------------------------ |
| Text                    | Represents plain text content. |
| Link                    | Represents a hyperlink.        |
| Mention                 | Represents a user mention.     |
| Label                   | Represents a label or tag.     |

By default, the content type is `Text`.

## Configure text content

To configure text content, set the `contentType` property to `Text`. This is the default content type if none is specified.

### ContentType 

```typescript
// Adding inline text
{
    blockType: 'Paragraph',
    content: [
        {
            contentType: 'Text',
            content: 'Inline Text'
        }
    ]
}
```

## Configure hyperlink

To create a hyperlink, set the `contentType` property to `Link`. You can configure the link's URL using the `properties` property.

### Configure link properties

Link settings control the behavior and properties of hyperlinks in your content. You can configure link settings using the [properties](https://ej2.syncfusion.com/documentation/api/blockeditor/contentmodel#properties) property.

Link settings accepts the following options:

| Option                     | Description                                                       | Default Value |
| -------------------------  | ----------------------------------------------------------------- | ------------- |
|[url](https://ej2.syncfusion.com/documentation/api/blockeditor/ilinkcontentsettings#url)| Specifies the destination URL of the link.     | `''`          |

### ContentType & Properties

```typescript
{
    blockType: 'Paragraph',
    content: [
        {
            contentType: 'Link',
            content: 'hyperlinks',
            properties: {
                url: 'https://ej2.syncfusion.com/documentation',
            }
        }
    ]
}
```

## Configure Label

To render labels, set the [contentType](https://ej2.syncfusion.com/documentation/api/blockeditor/contentmodel#contenttype) property to [Label](https://ej2.syncfusion.com/documentation/api/blockeditor/contenttype). The `properties` property allows you to specify which label to display.
### Built-in items

The Block Editor comes with offers different built-in options. These include:

-   **Progress**: In-progress, On-hold, Done
-   **Priority**: High, Medium, Low

### Customize label

You can customize the labels by using the `properties` property along with contentType `Label`.

### ContentType & Properties

```typescript
// Adding inline label
{
    blockType: 'Paragraph',
    content: [
        {
            contentType: 'Label',
            properties: { lableId: 'progress' }
        }
    ]
}
```

#### Trigger Character configuration

Use the [triggerChar](https://ej2.syncfusion.com/documentation/api/blockeditor/labelsettings#triggerchar) property to define the character that opens the label suggestions popup. The default trigger character is `$`.

### Label items configuration

Define the labels using the [items](https://ej2.syncfusion.com/documentation/api/blockeditor/labelSettingsModel#items) array. When a user types the trigger character, a popup will show the given items.

Each item in the [items](https://ej2.syncfusion.com/documentation/api/blockeditor/labelSettingsModel#items) array supports the following properties:

| Property                                          | Description                                         |
| --------------------------------------------------| --------------------------------------------------- |
| [id](https://ej2.syncfusion.com/documentation/api/blockeditor/labelitemmodel#id)                   | A unique identifier for the label.                  |
| [text](https://ej2.syncfusion.com/documentation/api/blockeditor/labelitemmodel#text)               | The display text for the label.                     |
| [groupBy](https://ej2.syncfusion.com/documentation/api/blockeditor/labelitemmodel#groupby)         | The category name for grouping similar labels.      |
| [labelColor](https://ej2.syncfusion.com/documentation/api/blockeditor/labelitemmodel#labelcolor)   | The background color of the label.                  |
| [iconCss](https://ej2.syncfusion.com/documentation/api/blockeditor/labelitemmodel#iconcss)         | A CSS class for an icon to display with the label.  |

When users type the trigger character followed by text, a popup will appear showing matching label items from which they can select. The selected label will be inserted into the content as a Label content item.

### Using labels with group headers

Labels with the same [groupBy](https://ej2.syncfusion.com/documentation/api/blockeditor/labelitemmodel#groupby) value will be grouped together in the label selection popup:

The below sample demonstrates the customization of labels in the Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/label-settings/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/label-settings/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/label-settings" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/label-settings/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/label-settings/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/label-settings" %}
{% endif %}

## Configure mention

Mentions are references to users or entities that can be inserted into your content. You can configure mention content by setting the `contentType` property to `Mention`.

Mentions are typically triggered by the `@` character and are linked to the [users](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#users) collection defined in the Block Editor.

### ContentType

```typescript
// Adding inline code
{
    blockType: 'Paragraph',
    content: [
        {
            contentType: 'Mention',
            properties: { userId: 'user1' }
        }
    ]
}
```

The sample below demonstrates how to configure mentions and other content types.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-types/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-types/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-types" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-types/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-types/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-types" %}
{% endif %}

## Applying Inline Styles

The Block Editor allows you to apply rich formatting to block contents using the [styles](https://ej2.syncfusion.com/documentation/api/blockeditor/basestylesprop) property.

The `styles` property supports the following options:

| Style Property                                     | Description                                | Default Value |
| -------------------------------------------------  | ------------------------------------------ | ------------- |
| [bold](https://ej2.syncfusion.com/documentation/api/blockeditor/stylemodel#bold)                         | Makes the text bold.                       | `false`       |
| [italic](https://ej2.syncfusion.com/documentation/api/blockeditor/stylemodel#italic)                     | Makes the text italicized.                 | `false`       |
| [underline](https://ej2.syncfusion.com/documentation/api/blockeditor/stylemodel#underline)               | Adds an underline to the text.             | `false`       |
| [strikethrough](https://ej2.syncfusion.com/documentation/api/blockeditor/stylemodel#strikethrough)       | Adds a line through the text.              | `false`       |
| [color](https://ej2.syncfusion.com/documentation/api/blockeditor/stylemodel#color)                       | Sets the text color (HEX or RGBA format).  | `''`          |
| [backgroundColor](https://ej2.syncfusion.com/documentation/api/blockeditor/stylemodel#backgroundcolor)   | Sets the background color for the text.    | `''`          |
| [superscript](https://ej2.syncfusion.com/documentation/api/blockeditor/stylemodel#superscript)           | Renders the text as superscript.           | `false`       |
| [subscript](https://ej2.syncfusion.com/documentation/api/blockeditor/stylemodel#subscript)               | Renders the text as subscript.             | `false`       |
| [uppercase](https://ej2.syncfusion.com/documentation/api/blockeditor/stylemodel#uppercase)               | Converts the text to uppercase.            | `false`       |
| [lowercase](https://ej2.syncfusion.com/documentation/api/blockeditor/stylemodel#lowercase)               | Converts the text to lowercase.            | `false`       |
| [inlineCode](https://ej2.syncfusion.com/documentation/api/blockeditor/stylemodel#inlinecode)             | Converts the text to InlineCode.           | `false`          |

You can apply one or more of these styles to any supported content element for rich text formatting.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-styles/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-styles/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-styles" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-styles/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-styles/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/blocks/content-styles" %}
{% endif %}