---
layout: post
title: Block Types and Configuration in React Block Editor | Syncfusion
description: Learn how to use built-in block types in the React Block Editor, including paragraphs, headings, lists, tables, images, code, and block configuration.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Built-in Block Types and Configuration in React Block Editor

The Syncfusion Block Editor uses **blocks** as the fundamental units for creating and managing content. The entire editor content is structured as a collection of these blocks, which are configured and managed through the [blocks](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#blocks) property.

> **Prerequisites:** Before using block types, ensure you've set up the Block Editor component as described in [Getting Started](./getting-started.md). The blocks property accepts an array of block objects with configuration details.

## Blocks

Blocks are the core building elements of the editor, where each block represents a distinct content unit, such as a `Paragraph`, `Heading`, `List`, or specialized content like a `Code Snippet` or `Image`. This block-based architecture makes it easy for users to rearrange, format, and manage discrete pieces of content independently.

You can configure blocks with various properties such as [id](https://ej2.syncfusion.com/react/documentation/api/blockeditor/blockModel#id), [blockType](https://ej2.syncfusion.com/react/documentation/api/blockeditor/blockModel#blocktype), [content](https://ej2.syncfusion.com/react/documentation/api/blockeditor/blockModel#content) to create a rich and structured editor. The following is a basic block structure:

```typescript
const blocksData: BlockModel[] = [
     {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'This is a paragraph block example.'
            }
        ]
    }
];
```

## Block types

The Block Editor includes the following built-in block types, each with distinct formatting and functionality options suited to different content needs:

| Built-in Block Types                    | Description                                                                 |
|-----------------------------------------|-----------------------------------------------------------------------------|
| Paragraph                               | Default block type for regular text content with optional placeholder text.  |
| Heading (levels 1–4)                    | Heading levels for document structure; levels 1–4 correspond to heading hierarchy. |
| Table                                   | Block for displaying data in a tabular format with rows and columns.        |
| Checklist                               | Interactive to-do lists with checkable items.                               |
| BulletList                              | Unordered lists with bullet points.                                         |
| NumberedList                            | Ordered lists with sequential numbering.                                    |
| Code                                    | Formatted code blocks with syntax highlighting and language selection.      |
| Quote                                   | Styled block for quotations and blockquotes.                                |
| Callout                                 | Highlighted block for important information and alerts.                     |
| Divider                                 | Horizontal separator line for visual content division.                      |
| CollapsibleParagraph & CollapsibleHeading (1–4) | Content blocks that expand/collapse to show or hide child content; heading variants follow 1–4 hierarchy. |
| Image                                   | Block for displaying images with sizing and alignment options.              |
| Template                                | Renders custom JSX or HTML content using user-defined block structures.     |

> For blocks such as `code`, `callout`, `table`, `image`, and `collapsible`, the first Backspace/Delete action highlights the entire block with an overlay selection (allowing cancellation), and the second action removes the block content. This provides consistent block deletion behavior across these block types.

## Configure indent

You can specify the indentation level of a block using the [indent](https://ej2.syncfusion.com/react/documentation/api/blockeditor/blockModel#indent) property. This property accepts a numeric value (typically 0–10) that determines how deeply a block is nested from the left margin. Each indent level increases spacing from the left edge.

By default, the [indent](https://ej2.syncfusion.com/react/documentation/api/blockeditor/blockModel#indent) property is set to `0`.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/indent/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/indent/app/index.tsx %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/blocks/indent" %}

## Configure CSS Class

You can apply custom styling to individual blocks using the [cssClass](https://ej2.syncfusion.com/react/documentation/api/blockeditor/blockModel#cssclass) property. This property accepts a string containing one or more CSS class names. To avoid conflicts, prefix CSS class names with component-specific identifiers (e.g., `block-custom-highlight` or `editor-special-style`).

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/cssClass/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/cssClass/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/cssClass/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/blocks/cssClass" %}

## Configure templates

The Block Editor allows you to use custom templates for specialized content by setting `blockType` to `'Template'` and defining the [template](https://ej2.syncfusion.com/react/documentation/api/blockeditor/blockModel#template) property. Templates can be defined as JSX functions, HTML strings, or DOM elements, allowing you to render dynamic content. Use template props to access block data for rendering block-specific information.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/block-types/template-block/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/block-types/template-block/app/index.tsx %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/blocks/block-types/template-block/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/blocks/block-types/template-block" %}
