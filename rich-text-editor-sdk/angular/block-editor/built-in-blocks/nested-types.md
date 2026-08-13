---
layout: post
title: Nested Blocks in Angular Block Editor | Syncfusion
description: Learn how to create and configure nested blocks in Angular Block Editor using child blocks, parent-child relationships, collapsible, quote, and callout blocks.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Nested Blocks in Angular Block Editor

## Configuring children

The Block Editor supports hierarchical content structures through the `children` array on a parent block's [properties](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#properties) object. Children are currently supported only for `Quote`, `Callout`, and `Collapsible` (paragraph/heading) blocks — see [ICollapsibleBlockSettings.children](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/icollapsibleblocksettings#children).

Child blocks can be configured with all the same properties as top-level blocks (for example, `blockType`, `content`, `indent`).

## Configuring parent id
To establish a clear parent-child relationship, the [parentId](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#parentid) of each child block must match the [id](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#id) of its parent block. This is required when the children array is wired up by the editor.

This structure is essential for maintaining nested relationships within the editor.

## Configuring collapsible blocks

You can render Collapsible blocks by setting the [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#blocktype) property to `CollapsibleParagraph` or `CollapsibleHeading`. Collapsible blocks allow users to expand or collapse sections, providing a way to hide or show content as needed.

### Configuring levels

You can configure a `CollapsibleHeading`'s heading level with the `level` property inside `properties`. Levels range from `1` (highest) to `4` (lowest). This setting does not apply to `CollapsibleParagraph`.

### Configuring expanded state

You can control whether a block starts in the expanded or collapsed state using the [isExpanded](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/icollapsibleblocksettings#isexpanded) property. By default, this property is set to `false`, meaning the block is collapsed initially. This setting is only applicable to `Collapsible` blocks.

### Block type and properties

```typescript
// Configuring a CollapsibleHeading block (level varies from 1 to 4)
{
    blockType: 'CollapsibleHeading',
    properties: {
        level: 1,
        isExpanded: true,
        children: [
            {
                blockType: 'Paragraph',
                content: [
                    { contentType: 'Text', content: 'Hidden content shown when expanded.' }
                ]
            }
        ]
    }
}
// Configuring a CollapsibleParagraph block
{
    blockType: 'CollapsibleParagraph',
    properties: {
        children: [
            {
                blockType: 'Paragraph',
                content: [
                    { contentType: 'Text', content: 'Hidden content shown when expanded.' }
                ]
            }
        ]
    }
}
```

This example shows how to configure `CollapsibleHeading` and `CollapsibleParagraph` blocks.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/children/toggle-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/children/toggle-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/children/toggle-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/blocks/children/toggle-block" %}

### Configuring the placeholder for Collapsible blocks

You can configure placeholder text for a Collapsible block using the [placeholder](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/icollapsibleblocksettings#placeholder) property. The text appears when the block is empty. The default placeholder for a `CollapsibleHeading` is `Collapsible Heading {level}` (for example, `Collapsible Heading 1`), and for a `CollapsibleParagraph` it is `Collapsible Paragraph`.

```typescript
// Adding a placeholder to a CollapsibleHeading block
{
    blockType: 'CollapsibleHeading',
    properties: {
        level: 2,
        placeholder: 'Heading block'
    },
    content: [
        { contentType: 'Text', content: '' }
    ]
}
// Adding a placeholder to a CollapsibleParagraph block
{
    blockType: 'CollapsibleParagraph',
    properties: { placeholder: 'Collapsible Paragraph' },
    content: [
        { contentType: 'Text', content: '' }
    ]
}
```

## Configuring the quote block

Quote blocks are styled for displaying quotations or excerpts. Render a Quote block by setting the [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#blocktype) to `Quote`. Editing is multi-line by default — pressing **Enter** creates a new line inside the block, and pressing **Enter** again on an empty line exits the quote.

### Block type and properties

```typescript
// Adding a quote block with a single empty Paragraph child
{
    blockType: 'Quote',
    properties: {
        children: [
            {
                blockType: 'Paragraph',
                content: [
                    { contentType: 'Text', content: '' }
                ]
            }
        ]
    }
}
```
The following sample demonstrates how to configure quote block.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/children/quote/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/children/quote/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/children/quote/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/blocks/children/quote" %}

## Configuring the callout block

Callout blocks highlight important information such as notes, warnings, or tips. Render one by setting the [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#blocktype) to `Callout`.

### Block type and properties

```typescript
// Adding a callout block with one Paragraph child
{
    id: 'my-callout',
    blockType: 'Callout',
    properties: {
        children: [
            {
                parentId: 'my-callout', // must match the parent's id
                blockType: 'Paragraph',
                content: [
                    { contentType: 'Text', content: 'Important information: this is a callout block used to highlight important content.' }
                ]
            }
        ]
    }
}
```

The following sample demonstrates how to configure callout block.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/children/callout/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/children/callout/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/children/callout/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/blocks/children/callout" %}