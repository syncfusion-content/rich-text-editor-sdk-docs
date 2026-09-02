---
layout: post
title: Inline Content in Angular Block Editor | Syncfusion
description: Learn how to add inline content in Angular Block Editor blocks including bold text, links, code spans, and mentions.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Inline Content in Angular Block Editor

In the Syncfusion Block Editor, all content is organized within blocks. Each block contains an array of [content](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#content) property that define the text and functionality within that block.

Each [contentModel](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/contentmodel) is an object with properties such as [contentType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/contentmodel#contenttype), [content](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/contentmodel#content), and [properties](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/contentmodel#properties), allowing for granular control over its appearance and behavior.

## Setting content type

The Block Editor supports several inline content types through the `ContentType` enum, which can be set using the [contentType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/contentmodel#contenttype) property.

| Built-in Content Type | Description                    |
| ----------------------- | ------------------------------ |
| Text                    | Represents plain text content. |
| Link                    | Represents a hyperlink.        |
| Mention                 | Represents a user mention.     |
| Label                   | Represents a label or tag.     |

By default, the content type is `Text`.

## Configure text content

To configure text content, set the `contentType` property to `Text`. This is the default content type if none is specified.

### Content type

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

You can configure a hyperlink's behavior through the content item's [properties](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/contentmodel#properties) object. The supported options are:

| Property | Description | Default Value |
|----------|-------------|---------------|
| [url](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/ilinkcontentsettings#url) | Destination URL the link navigates to. | `''` |

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

## Configure labels

To render a label inline, set the [contentType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/contentmodel#contenttype) of a content item to [Label](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/contenttype). The content item's `properties.labelId` selects which label definition to render.

### Built-in items

The Block Editor ships with the following built-in label groups, ready to use without any custom configuration:

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
            properties: { labelId: 'progress' }
        }
    ]
}
```

### Trigger Character configuration

Use the [triggerChar](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/labelsettings#triggerchar) property to define the character that opens the label suggestions popup. The default trigger character is `$`.

### Label items configuration

Define the labels using the [items](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/labelsettings#items) array. When a user types the trigger character, a popup will show the given items.

Each item in the [items](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/labelsettings#items) array supports the following properties:

| Property | Description |
|----------|-------------|
| [id](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/labelitemmodel#id) | A unique identifier for the label. |
| [text](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/labelitemmodel#text) | The display text for the label. |
| [groupBy](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/labelitemmodel#groupby) | The category name for grouping similar labels. |
| [labelColor](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/labelitemmodel#labelcolor) | The background color of the label. |
| [iconCss](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/labelitemmodel#iconcss) | A CSS class for an icon to display with the label. |

When users type the trigger character followed by text, a popup will appear showing matching label items from which they can select. The selected label will be inserted into the content as a `Label` content item.

### Using labels with group headers

Label items that share the same [groupBy](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/labelitemmodel#groupby) value are grouped together under a header in the label selection popup, as shown in the following `labelSettings` example:

```typescript
public labelSettings: LabelSettingsModel = {
    triggerChar: '#',
    items: [
        { id: 'bug',     text: 'Bug',          labelColor: '#ff5252', groupBy: 'Status' },
        { id: 'task',    text: 'Task',         labelColor: '#90caf9', groupBy: 'Status' },
        { id: 'low',     text: 'Low Priority', labelColor: '#c5e1a5', groupBy: 'Priority' },
        { id: 'high',    text: 'High Priority',labelColor: '#ffab91', groupBy: 'Priority' }
    ]
};
```

The complete sample below demonstrates label customization in the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/label-settings/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/label-settings/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/label-settings/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/blocks/label-settings" %}

## Configure mention

Mentions are references to users or entities that can be inserted into your content. You can configure mention content by setting the `contentType` property to `Mention`.

Mentions are typically triggered by the `@` character and are linked to the [users](https://ej2.syncfusion.com/angular/documentation/api/blockeditor#users) collection defined on the Block Editor component. Each mention in your content references a user by `userId` and the editor resolves it to the corresponding user record.

### ContentType

```typescript
// Adding an inline mention
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

The sample below also configures the editor's `users` and `labelSettings` properties so that `Mention` and `Label` items resolve correctly:

```html
<ejs-blockeditor id="blockeditor"
                 [blocks]="blocksData"
                 [users]="users"
                 [labelSettings]="labelSettings" />
```

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/content-types/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/content-types/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/content-types/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/blocks/content-types" %}

## Applying inline styles

The Block Editor allows you to apply rich formatting to a content item by setting `properties.styles` on that content model. The `styles` object supports the following options:

| Style Property                                     | Description                                | Default Value |
| -------------------------------------------------  | ------------------------------------------ | ------------- |
| [bold](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/stylemodel#bold)                         | Makes the text bold.                       | `false`       |
| [italic](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/stylemodel#italic)                     | Makes the text italicized.                 | `false`       |
| [underline](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/stylemodel#underline)               | Adds an underline to the text.             | `false`       |
| [strikethrough](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/stylemodel#strikethrough)       | Adds a line through the text.              | `false`       |
| [color](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/stylemodel#color)                       | Sets the text color (HEX or RGBA format).  | `''`          |
| [backgroundColor](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/stylemodel#backgroundcolor)   | Sets the background color for the text.    | `''`          |
| [superscript](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/stylemodel#superscript)           | Renders the text as superscript.           | `false`       |
| [subscript](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/stylemodel#subscript)               | Renders the text as subscript.             | `false`       |
| [uppercase](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/stylemodel#uppercase)               | Converts the text to uppercase.            | `false`       |
| [lowercase](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/stylemodel#lowercase)               | Converts the text to lowercase.            | `false`       |
| [inlineCode](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/stylemodel#inlinecode)             | Renders the text as an inline code span.    | `false`          |

You can apply one or more of these styles to any supported content element for rich text formatting.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/content-styles/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/content-styles/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/content-styles/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/blocks/content-styles" %}