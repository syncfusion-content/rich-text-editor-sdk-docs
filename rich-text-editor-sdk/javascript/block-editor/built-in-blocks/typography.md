---
layout: post
title: Text Block Types in JavaScript Block Editor | Syncfusion
description: Learn how to configure text block types in the JavaScript Block Editor, including paragraphs, headings, dividers, quotes, callouts, and collapsible blocks.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Text Block Types in JavaScript Block Editor

Typography blocks are essential for organizing and presenting text-based content. The Block Editor control supports various structural blocks—such as Paragraph, Heading, Collapsible (CollapsibleParagraph and CollapsibleHeading), Divider, Quote, and Callout—to help you format and structure content effectively.

## Configure paragraph block

Paragraph blocks are the most common type, used for standard text content. They serve as the default block type and provide basic text formatting options. To render a Paragraph block, set the [blockType](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#blocktype) property to `Paragraph`.

> **Setup prerequisite:** Before using block types, ensure the Block Editor is initialized in your application. See the [Getting Started](../getting-started) guide for setup steps.

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

The following sample demonstrates the configuration of a paragraph block in the Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/paragraph-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/paragraph-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/paragraph-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/paragraph-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/paragraph-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/paragraph-block" %}
{% endif %}

### Configure placeholder

You can configure placeholder text for block using the [placeholder](https://ej2.syncfusion.com/documentation/api/blockeditor/baseplaceholderprop#placeholder) property. This text appears when the block is empty. The default placeholder for the paragraph block is `Write something or ‘/’ for commands.`.

### Block type & properties

```typescript
// Adding placeholder
 {
    blockType: 'Paragraph',
    properties: {placeholder: 'Start typing ...'}
}
```

The below sample demonstrates the configuration of placeholder in the Block Editor for the paragraph block.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/placeholder/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/placeholder/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/placeholder" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/placeholder/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/placeholder/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/placeholder" %}
{% endif %}


## Configure heading block

Heading blocks create document titles and section headers. These blocks structure content hierarchically for better readability. Render a Heading block by setting the [blockType](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#blocktype) property to `Heading`.

**Visual hierarchy by level:**

| Level | Default style | Typical use |
|-------|---------------|-------------|
| 1 | Largest (h1) | Document title |
| 2 | Large (h2) | Section heading |
| 3 | Medium (h3) | Subsection |
| 4 | Smallest (h4) | Sub-subsection |

### Configuring levels

By using the [properties](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#properties), you can set the heading level using the `level` property, with `1` being the highest level (title) and `4` being the lowest (subsection).

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

The following sample demonstrates the configuration of a heading block in the Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/heading-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/heading-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/heading-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/heading-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/heading-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/heading-block" %}
{% endif %}

### Configure placeholder

You can configure placeholder text for a block using the [placeholder](https://ej2.syncfusion.com/documentation/api/blockeditor/baseplaceholderprop#placeholder) property. This text appears when the block is empty. The default placeholder for a heading block is `Heading{level}` — for example, `Heading1` for level 1, `Heading2` for level 2, and so on.

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

A Divider block inserts a horizontal line to separate content. Render it by setting the [blockType](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#blocktype) to `Divider`.

### Block type & properties

```typescript
// Adding a divider between two paragraphs
{
    blockType: 'Paragraph',
    content: [{
        contentType: 'Text',
        content: 'This is a paragraph 1.'
    }]
},
{
    blockType: 'Divider'
},
{
    blockType: 'Paragraph',
    content: [{
        contentType: 'Text',
        content: 'This is a paragraph 2.'
    }]
}
```

This sample shows how to place a divider between two blocks.


{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/divider-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/divider-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/divider-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/divider-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/divider-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/divider-block" %}
{% endif %}
