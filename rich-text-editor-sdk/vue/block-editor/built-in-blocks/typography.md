---
layout: post
title: Text Block Types in Vue Block Editor | Syncfusion
description: Learn how to configure text block types in the Vue Block Editor, including paragraphs, headings, dividers, quotes, callouts, and collapsible blocks.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Text Block Types in Vue Block Editor

Text block types are essential for organizing and presenting text-based content. The Block Editor component supports various structural blocks—such as Paragraph, Heading, Collapsible (CollapsibleParagraph and CollapsibleHeading), Divider, Quote, and Callout—to help you format and structure content effectively.

## Configure paragraph block

Paragraph blocks are the most common type, used for standard text content. They serve as the default block type and provide basic text formatting options. To render a Paragraph block, set the [blockType](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/blockmodel#blocktype) property to `Paragraph`.

### BlockType

```typescript
// Adding paragraph block
{
    blockType: 'Paragraph',
    content: [
        {
            contentType: 'Text',
            content: 'This is a paragraph block example.'
        }
    ]
}
```

The sample below demonstrates the configuration of the paragraph block in the Block Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/block-types/paragraph-block/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/block-types/paragraph-block/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/block-types/paragraph-block" %}

### Configure placeholder

You can configure placeholder text for block using the [placeholder](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/baseplaceholderprop#placeholder) property. This text appears when the block is empty. The default placeholder for the paragraph block is `Write something or ‘/’ for commands.`.

### Block type & properties

```typescript
// Adding placeholder
 {
    blockType: 'Paragraph',
    properties: {placeholder: 'Start typing ...'}
}
```

The sample below demonstrates the configuration of the placeholder in the Block Editor for the paragraph block.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/placeholder/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/placeholder/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/placeholder" %}

## Configure heading block

Heading blocks create document titles and section headers. These blocks help structure content hierarchically, making it easier to read and navigate. Render a Heading block by setting the [blockType](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/blockmodel#blocktype) property to `Heading1`, `Heading2`, `Heading3`, or `Heading4`, depending on the desired heading level.

### Configure levels

The heading level is determined by the `blockType` value: `Heading1` is the highest level (title) and `Heading4` is the lowest (subsection).

### Block type & properties

```typescript
// Adding heading block
{
    blockType: 'Heading',
    properties: { level: 1 },
    // levels range from 1 to 4
    content: [
        {
            contentType: 'Text',
            content: 'This is a heading block example.'
        }
    ]
}
```

The sample below demonstrates the configuration of the heading block in the Block Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/block-types/heading-block/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/block-types/heading-block/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/block-types/heading-block" %}

### Configure placeholder

You can configure placeholder text for block using the [placeholder](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/baseplaceholderprop#placeholder) property. This text appears when the block is empty. The default placeholder for heading block is `Heading {level}`.

```typescript
// Adding placeholder value to blocktype
{
    blockType: 'Heading',
    properties: { 
        level: 1,
        placeholder: 'Heading1'
    }
}
```

## Configure divider block

A Divider block inserts a horizontal line to separate content. Render it by setting the [blockType](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/blockmodel#blocktype) to `Divider`.

### Block type & properties

```typescript
// Adding divider block
[
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: 'Text',
                content: 'This is paragraph 1.'
            }
        ]
    },
    {
        blockType: 'Divider'
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: 'Text',
                content: 'This is paragraph 2.'
            }
        ]
    }
]
```

This sample shows how to place a divider between two blocks.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/block-types/divider-block/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/block-types/divider-block/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/blocks/block-types/divider-block" %}
