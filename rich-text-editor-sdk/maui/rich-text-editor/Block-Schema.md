---
layout: post
title: Block Schema in .NET MAUI Rich Text Editor | Syncfusion®
description: Learn here all about Block Schema support in Syncfusion® .NET MAUI Rich Text Editor (SfRichTextEditor) control.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
---

# Block Schema in .NET MAUI Rich Text Editor

The [.NET MAUI Rich Text Editor](https://www.syncfusion.com/maui-controls/maui-rich-text-editor) supports a block-based document. To work with block schema content, set the `TValue` property to `Schema` and bind a collection of block nodes to the `Value` property. The block schema represents document content as a collection of strongly typed nodes, enabling developers to create, load, and manipulate rich text content programmatically without using HTML.

The block schema provides a structured representation of editor content and supports common document elements such as paragraphs, headings, lists, hyperlinks, images, tables, code blocks, and text formatting.

## Binding block schema content

You can bind a collection of block nodes to the `Value` property of the `SfRichTextEditor`.

{% tabs %}

{% highlight xaml %}

     <richTextEditor:SfRichTextEditor
     Value="{Binding BlockNodes}" TValue="Schema"/>

{% endhighlight %}

{% highlight c# %}
using Syncfusion.Maui.RichTextEditor;
using System.Collections.ObjectModel;

public class ViewModel
{
    public ObservableCollection<BlockNode> BlockNodes { get; set; }

    public ViewModel()
    {
        BlockNodes = new ObservableCollection<BlockNode>
        {
            new HeadingNode
            {
                Attrs = new HeadingAttrs
                {
                    Level = 1
                },
                Children =
                {
                    new TextNode
                    {
                        Text = "Block Schema"
                    }
                }
            },

            new ParagraphNode
            {
                Attrs = new ParagraphAttrs(),
                Children =
                {
                    new TextNode
                    {
                        Text = "This content is generated using block schema support."
                    }
                }
            }
        };
    }
}

{% endhighlight %}

{% endtabs %}

## Working with lists

The block schema supports both bulleted and numbered lists through the `BulletListNode` and `OrderedListNode` elements.

{% tabs %}

{% highlight c# %}
new BulletListNode
{
    Children =
    {
        new ListItemNode
        {
            Children =
            {
                new ParagraphNode
                {
                    Children =
                    {
                        new TextNode
                        {
                            Text = "Bullet item"
                        }
                    }
                }
            }
        }
    }
}

{% endhighlight %}

{% endtabs %}

## Working with hyperlinks

Hyperlinks can be created using the `LinkMark`.

{% tabs %}

{% highlight c# %}
new ParagraphNode
{
    Children =
    {
        new TextNode
        {
            Text = "Syncfusion",
            Marks =
            {
                new LinkMark
                {
                    Attrs = new LinkMarkAttrs
                    {
                        Href = "https://www.syncfusion.com",
                        Title = "Syncfusion"
                    }
                }
            }
        }
    }
}

{% endhighlight %}

{% endtabs %}

## Working with images

Images can be inserted using the `ImageNode`.

{% tabs %}

{% highlight c# %}
new ImageNode
{
    Attrs = new ImageAttrs
    {
        Src = "https://ej2.syncfusion.com/demos/src/block-editor/images/overview.png",
        Width = 100,
        Height = 100
    }
}

{% endhighlight %}

{% endtabs %}

## Working with code blocks

The block schema supports syntax-highlighted code blocks through the `CodeBlockNode`.

{% tabs %}

{% highlight c# %}
new CodeBlockNode
{
    Attrs = new CodeBlockAttrs
    {
        Language = "csharp"
    },
    Children =
    {
        new TextNode
        {
            Text = "Console.WriteLine(\"Hello World\");"
        }
    }
}

{% endhighlight %}

{% endtabs %}

## Note

* The block schema provides a structured representation of document content.
* Changes made in the editor are reflected in the bound `Value` collection.
* Block schema content can be used as an alternative to HTML-based content handling.
* Node identifiers are not required when creating block schema content.