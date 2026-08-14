---
layout: post
title: List Blocks in React Block Editor | Syncfusion
description: Learn how to add and configure bullet, numbered, and checklist blocks in the React Block Editor, including placeholders and checked states.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# List Blocks in React Block Editor

The React Block Editor component uses list blocks to organize content into structured lists. To render a specific list type, set the [blockType](https://ej2.syncfusion.com/react/documentation/api/blockeditor/blockmodel#blocktype) property of the `BlockModel` to `BulletList`, `NumberedList`, or `Checklist`.

Before using list blocks, import the ContentType enum:

```typescript
import { ContentType } from '@syncfusion/ej2-react-blockeditor';
```

**Choose the appropriate list type:**
- **BulletList**: For unordered items without sequence (e.g., feature lists, bullet points)
- **NumberedList**: For ordered items requiring sequence (e.g., steps, procedures)
- **Checklist**: For interactive to-do lists with checkable items

## Configuring the Bullet List

You can render a Bullet List block by setting the [blockType](https://ej2.syncfusion.com/react/documentation/api/blockeditor/blockmodel#blocktype)  property to `BulletList`. This block type is used to display unordered lists.

### BlockType

```typescript
// Adding a bullet list block
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

The [placeholder](https://ej2.syncfusion.com/react/documentation/api/blockeditor/baseplaceholderprop#placeholder) property sets the text that appears when the block is empty. The default placeholder for a bullet list is `Add item`.

```typescript
// Adding a custom placeholder
{
    blockType: 'BulletList',
    properties: { placeholder: 'Add bullet point'},
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configuring the Numbered List

You can render a Numbered List block by setting the [blockType](https://ej2.syncfusion.com/react/documentation/api/blockeditor/blockmodel#blocktype) property to `NumberedList`. This block type is used to display ordered lists.

### BlockType

```typescript
// Adding a numbered list block
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

The [placeholder](https://ej2.syncfusion.com/react/documentation/api/blockeditor/baseplaceholderprop#placeholder) property sets the text that appears when the block is empty. The default placeholder for a numbered list is `Add item`.

```typescript
// Adding a custom placeholder
{
    blockType: 'NumberedList',
    properties: { placeholder: 'Add numbered item'},
    content: [
        {
            contentType: ContentType.Text,
            content: 'your content'
        }
    ]
}
```

## Configure the Checklist

You can render a Checklist block by setting the [blockType](https://ej2.syncfusion.com/react/documentation/api/blockeditor/blockmodel#blocktype) property to `Checklist`. This block type is used for creating interactive to-do lists.

### BlockType

```typescript
// Adding a checklist block 
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

For blocks that support selection states, such as a `Checklist`, you can configure the checked state using the `properties` property with [isChecked](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/ichecklistblocksettings#ischecked).

By default, the [isChecked](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/ichecklistblocksettings#ischecked) property is set to `false`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/isChecked/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/isChecked/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/blocks/isChecked" %}

### Configure Placeholder

The [placeholder](https://ej2.syncfusion.com/react/documentation/api/blockeditor/baseplaceholderprop#placeholder) property sets the text that appears when the block is empty. The default placeholder for a checklist is `Todo`.

```typescript
// Adding a custom placeholder
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

## Configuring List Blocks

The following example demonstrates how to render the different types of list blocks in the Block Editor.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/block-types/list-block/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/block-types/list-block/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/blocks/block-types/list-block" %}
