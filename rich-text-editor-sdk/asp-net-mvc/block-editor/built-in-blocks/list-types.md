---
layout: post
title: List Blocks in ASP.NET MVC Block Editor | Syncfusion
description: Learn how to add and configure bullet, numbered, and checklist blocks in the ASP.NET MVC Block Editor, including placeholders and checked states.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# List Blocks in ASP.NET MVC Block Editor

List blocks in the BlockEditor component are used to organize content into structured lists. You can render List blocks by setting the `blockType` property as `BulletList`, `NumberedList`, or `Checklist`. Bullet lists and numbered lists are ideal for unordered and ordered items, respectively, while checklist blocks enable interactive to-do lists with checkable items.

## Configure bullet list 

You can render Bullet List block by setting the `blockType` property as `BulletList`. This block type is used for unordered lists.

### BlockType

```csharp
// Adding bulletlist block
{
    blockType = "BulletList",
    content = new List<object>()
    {
        new
        {
            contentType = "Text",
            content = "your content"
        }
    }
}
```

### Configure placeholder

You can configure placeholder text for a block using the `placeholder` property in the `properties` property. This text appears when the block is empty. The default placeholder for a bullet list is `Add item`.

```csharp
// Adding placeholder value
{
    blockType = "BulletList",
    properties = new { placeholder = "Add item" }
}
```

## Configure numbered list

You can render Numbered List block by setting the `blockType` property as `NumberedList`. This block type is used for ordered lists.

### BlockType

```csharp
// Adding numberedlist block
{
    blockType = "NumberedList",
    content = new List<object>()
    {
        new
        {
            contentType = "Text",
            content = "your content"
        }
    }
}
```

### Configure placeholder

You can configure placeholder text for a block using the `placeholder` property in the `properties` property. This text appears when the block is empty. The default placeholder for a numbered list is `Add item`.

```csharp
// Adding placeholder value
{
    blockType = "NumberedList",
    properties = new { placeholder = "Add item" }
}
```

## Configure checklist

You can render Checklist block by setting the `blockType` property as `Checklist`. This block type is used for creating interactive to-do lists.

### BlockType

```csharp
// Adding checklist block
{
    blockType = "Checklist",
    content = new List<object>()
    {
        new
        {
            contentType = "Text",
            content = "your content"
        }
    }
}
```

### Configure checked state

For blocks that support selection states such as `Checklist`, you can configure the checked state using the `properties` property with `isChecked`.

By default, the `isChecked` property is set to `false`.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/block-editor/blocks/isChecked/razor %}
{% endhighlight %}
{% highlight c# tabtitle="IsChecked.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/block-editor/blocks/isChecked/ischecked.cs %}
{% endhighlight %}
{% endtabs %}

![Block isChecked](../images/block-ischecked.png)

### Configure placeholder

You can configure placeholder text for a block using the `placeholder` property in the `properties` property. This text appears when the block is empty. The default placeholder for a checklist is `Todo`.

```csharp
// Adding placeholder value
{
    blockType = "Checklist",
    properties = new { placeholder = "Todo" }
}
```

## Configure list blocks

The following example illustrates how to render the different types of list blocks in the Block Editor.

{% tabs %}
{% highlight razor tabtitle="CSHTML" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/block-editor/blocks/blockTypes/list-block/razor %}
{% endhighlight %}
{% highlight c# tabtitle="List.cs" %}
{% include code-snippet/rich-text-editor-sdk/asp-net-mvc/block-editor/blocks/blockTypes/list-block/list.cs %}
{% endhighlight %}
{% endtabs %}

![List Block](../images/block-list.png)
