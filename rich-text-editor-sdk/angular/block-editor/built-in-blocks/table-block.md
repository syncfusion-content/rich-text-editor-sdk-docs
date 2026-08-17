---
layout: post
title: Table Blocks in Angular Block Editor | Syncfusion
description: Learn how to add and configure table blocks in the Angular Block Editor with rows, columns, headers, cell content, resizing, selection, and deletion.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Table Blocks in Angular Block Editor

The Syncfusion Block Editor allows you to render structured data in rows and columns by setting the block's [blockType](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#blocktype) property to [Table](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blocktype). You can customize the table layout, header, row numbers, and define columns and rows using the `properties` property. In addition, you can format cells with keyboard shortcuts, use slash commands inside cells to add blocks, and manage rows and columns quickly with dot and plus buttons.

## Configure table block

For Table blocks, you can configure layout and structure using the [properties](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/blockmodel#properties) object. The `ITableBlockSettings` interface (see [reference](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/itableblocksettings)) supports the following options:

| Property | Description | Default Value |
|----------|-------------|---------------|
| [width](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/itableblocksettings#width) | Width of the table in percentage or pixel units (for example, `'100%'`, `'500px'`). | `'100%'` |
| [enableHeader](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/itableblocksettings#enableheader) | Specifies whether to render a header row. | `true` |
| [enableRowNumbers](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/itableblocksettings#enablerownumbers) | Specifies whether to render row numbers in the first column. | `true` |
| [readOnly](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/itableblocksettings#readonly) | Specifies whether to render the table in read-only mode, disabling edits. | `false` |
| [columns](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/itableblocksettings#columns) | Defines the columns of the table, including their types and headers. | `[]` |
| [rows](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/itableblocksettings#rows) | Defines the rows of the table, each containing cells tied to columns. | `[]` |

### Block type and properties

The following example demonstrates how to pre-configure a `Table` block in the editor.

```typescript
// Adding an Table block
{
    blockType: BlockType.Table,
    properties: {
        columns: [{ id: 'col1', headerText: 'Column 1' }, { id: 'col2', headerText: 'Column 2' }],
        rows: [
            {
                cells: [
                    {
                        columnId: 'col1',
                        blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 1' }] }]
                    },
                    {
                        columnId: 'col2',
                        blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 2' }] }]
                    }
                ]
            },
            {
                cells: [
                    {
                        columnId: 'col1',
                        blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 3' }] }]
                    },
                    {
                        columnId: 'col2',
                        blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 4' }] }]
                    }
                ]
            }
        ]
    }
}
```

This sample demonstrates the configuration of the `Table` block in the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/block-types/table-block/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/block-types/table-block/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/block-types/table-block/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/blocks/block-types/table-block" %}

### Table resizing

The Block Editor supports table column resizing. You can drag column borders to adjust column width dynamically, or auto-fit based on content. Only columns can be resized, and if resizing exceeds the layout width, a scrollbar will appear to maintain structure and layout integrity.

### Multiple row and column selection and deletion

The Block Editor supports selecting full rows (single or multiple) using the mouse or with `Shift` + arrow keys, which activate grippers for easy control. Shift-based multiple selection is also supported: select a row, hold **Shift**, and click a non-adjacent row (for example, the third); all rows in between are included. Selected rows or columns can then be deleted through the **Delete** popup, and full table deletion is also supported for complete removal.

This sample demonstrates the `Table` block multiple row and column selection and deletion support in the Block Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/block-types/table-block/table-feature/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/block-types/table-block/table-feature/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/blocks/block-types/table-block/table-feature/src/app.component.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/blocks/block-types/table-block/table-feature" %}