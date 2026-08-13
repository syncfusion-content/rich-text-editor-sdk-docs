---
layout: post
title: Drag and Drop in Blazor Block Editor | Syncfusion®
description: Learn how to enable drag and drop in the Blazor Block Editor to rearrange single or multiple blocks using the built-in drag handle.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
---

# Drag and Drop in Blazor Block Editor

The drag and drop feature in the Block Editor allows users to intuitively rearrange content blocks by dragging them to different positions within the editor.

## Enable Drag and Drop

You can control the drag and drop functionality within the Block Editor using the [EnableDragAndDrop](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_EnableDragAndDrop) property. This feature is enabled by default. Set it to `false` to disable drag and drop functionality.

## Dragging blocks

When drag and drop is enabled, users can rearrange blocks using drag handles:

- **Single block dragging**: Hover over a block to reveal the drag handle. Click and hold the handle, then drag the block to reposition it within the editor.

- **Multiple block dragging**: Select multiple blocks using checkbox selection, then click and hold on any selected block's drag handle to move the entire group to a new location.

During dragging, a visual indicator shows a drop preview line indicating exactly where blocks will be positioned when released.

The following sample demonstrates the drag and drop feature in the editor:

```cshtml
@using Syncfusion.Blazor.BlockEditor

<SfBlockEditor Blocks="@BlockData"> </SfBlockEditor>

@code {
    private List<BlockModel> BlockData = new()
    {
        new BlockModel
        {
            BlockType = BlockType.Paragraph,
            Content = new() { new ContentModel { ContentType = ContentType.Text, Content = "Block 1" } }
        },
        new BlockModel
        {
            BlockType = BlockType.Paragraph,
            Content = new() { new ContentModel { ContentType = ContentType.Text, Content = "Block 2" } }
        },
        new BlockModel
        {
            BlockType = BlockType.Paragraph,
            Content = new() { new ContentModel { ContentType = ContentType.Text, Content = "Block 3" } }
        }
    };
}
```

![Blazor Block Editor DragDrop](./images/drag-drop.webp)
