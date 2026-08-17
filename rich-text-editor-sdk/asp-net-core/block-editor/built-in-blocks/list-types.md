---
layout: post
title: List Blocks in ASP.NET Core Block Editor | Syncfusion
description: Learn how to add and configure bullet, numbered, and checklist blocks in the ASP.NET Core Block Editor, including placeholders and checked states.
platform: rich-text-editor-sdk
control: BlockEditor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/overview
---

# List Blocks in ASP.NET Core Block Editor

List blocks in the Block Editor component are used to organize content into structured lists. You can render List blocks by setting the `blockType` property as `BulletList`, `NumberedList`, or `Checklist`. Bullet lists and numbered lists are ideal for unordered and ordered items, respectively, while checklist blocks enable interactive to-do lists with checkable items.

## Configure bullet list 

You can render Bullet List block by setting the `blockType` property as `BulletList`. This block type is used for unordered lists.

### BlockType

```csharp
// Adding bullet list block
new BlockModel
{
    blockType = "BulletList",
    content = new List<object>
    {
        new { contentType = "Text", content = "Bullet item 1" },
        new { contentType = "Text", content = "Bullet item 2" }
    }
}
```

### Configure placeholder

You can configure placeholder text for block using the `placeholder` in the `properties` property. This text appears when the block is empty. The default placeholder is  `Add item`.

```csharp
// Adding placeholder value 
new BlockModel
{
    blockType = "BulletList",
    properties = new { placeholder = "Add item" },
    content = new List<object>()
}
```

## Configure numbered list

You can render Numbered List block by setting the `blockType` property as  `NumberedList`. This block type is used for ordered lists.

### BlockType

```csharp
// Adding numbered list block
new BlockModel
{
    blockType = "NumberedList",
    content = new List<object>
    {
        new { contentType = "Text", content = "Ordered item 1" },
        new { contentType = "Text", content = "Ordered item 2" }
    }
}
```

### Configure placeholder

You can configure placeholder text for block using the `placeholder` in the `properties` property. This text appears when the block is empty. The default placeholder is  `Add item`.

```csharp
// Adding placeholder value 
new BlockModel
{
    blockType = "NumberedList",
    properties = new { placeholder = "Add item" },
    content = new List<object>()
}
```

## Configure checklist

You can render Check List block by setting the `blockType` property property as `Checklist`. This block type is used for creating interactive to-do lists.

### BlockType

```csharp
// Adding checklist block
new BlockModel
{
    blockType = "Checklist",
    content = new List<object>
    {
        new { contentType = "Text", content = "Task item 1" },
        new { contentType = "Text", content = "Task item 2" }
    }
}
```

### Configure checked state
use the `isChecked` property within `properties` to configure the checked state
For blocks that support selection states such as `Checklist`, you can configure the checked state using the `properties` property with `isChecked`.

By default, the `isChecked` property is set to `false`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/block-editor/blocks/isChecked/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="IsChecked.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/block-editor/blocks/isChecked/ischecked.cs %}
{% endhighlight %}
{% endtabs %}

![Block isChecked](../images/block-ischecked.png)

### Configure placeholder

You can configure placeholder text for block using the `placeholder` in the `properties` property. This text appears when the block is empty. The default placeholder for check list is  `Todo`.

```csharp
// Adding placeholder value 
new BlockModel
{
    blockType = "Checklist",
    properties = new { placeholder = "Todo" },
    content = new List<object>()
}
```

## Configure list blocks

Below example illustrates how to render the different types of list blocks in the Block Editor.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/block-editor/blocks/blockTypes/list-block/tagHelper %}
{% endhighlight %}
{% highlight c# tabtitle="List.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-core/block-editor/blocks/blockTypes/list-block/list.cs %}
{% endhighlight %}
{% endtabs %}

![List Block](../images/block-list.png)
