---
layout: post
title: Lists in JavaScript Block Editor control | Syncfusion
description: Checkout and learn about List Blocks with JavaScript Block Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Lists in JavaScript Block Editor control

The Syncfusion Block Editor control uses list blocks to organize content into structured lists. To render a specific list type, set the [blockType](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#blocktype) property of the `BlockModel` to `BulletList`, `NumberedList`, or `Checklist`. Bullet lists are ideal for unordered items, numbered lists for ordered items, and checklists for interactive to-do lists.

## Configuring the Bullet List

You can render a Bullet List block by setting the [blockType](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#blocktype) property to `BulletList`. This block type is used to display unordered lists.

### BlockType

```typescript
// Adding bulletlist block
{
    blockType: 'BulletList',
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure Placeholder

The [placeholder](https://ej2.syncfusion.com/documentation/api/blockeditor/baseplaceholderprop#placeholder) property sets the text that appears when the block is empty. The default placeholder for a bullet list is `Add item`.

```typescript
// Adding placeholder value 
{
    blockType: 'BulletList',
    properties: { placeholder: 'bullet'},
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configuring the Numbered List

You can render a Numbered List block by setting the [blockType](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#blocktype) property to `NumberedList`. This block type is used to display ordered lists.

### Type

```typescript
// Adding numberedlist block
{
    blockType: 'NumberedList',
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure Placeholder

The [placeholder](https://ej2.syncfusion.com/documentation/api/blockeditor/baseplaceholderprop#placeholder) property sets the text that appears when the block is empty. The default placeholder for a numbered list is `Add item`.

```typescript
// Adding placeholder value 
{
    blockType: 'NumberedList',
    properties: { placeholder: 'number'},
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configure the Checklist

You can render a Checklist block by setting the [blockType](https://ej2.syncfusion.com/documentation/api/blockeditor/blockmodel#blocktype) property to `Checklist`. This block type is used for creating interactive to-do lists.

### BlockType

```typescript
    // Adding checklist block 
{
    blockType: 'Checklist',
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

### Configure Checked State

For blocks that support selection states, such as a `Checklist`, you can configure the checked state using the `properties` property with [isChecked](https://ej2.syncfusion.com/documentation/api/blockeditor/ichecklistblocksettings#ischecked).

By default, the [isChecked](https://ej2.syncfusion.com/documentation/api/blockeditor/ichecklistblocksettings#ischecked) property is set to `false`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/isChecked/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/isChecked/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/isChecked" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/isChecked/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/isChecked/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/isChecked" %}
{% endif %}

### Configure placeholder

The [placeholder](https://ej2.syncfusion.com/documentation/api/blockeditor/baseplaceholderprop#placeholder) property sets the text that appears when the block is empty. The default placeholder for a checklist is `Todo`.

```typescript
// Adding placeholder value 
{
    blockType: 'Checklist',
    properties: { placeholder: 'check'},
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configure list blocks

Below example illustrates how to render the different types of list blocks in the Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/list-block/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/list-block/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/list-block" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/list-block/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/list-block/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/blocks/block-types/list-block" %}
{% endif %}
