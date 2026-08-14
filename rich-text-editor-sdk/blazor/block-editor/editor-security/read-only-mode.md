---
layout: post
title: Read-Only Mode in Blazor Block Editor | Syncfusion®
description: Learn how to enable read-only mode in the Blazor Block Editor to display content without allowing users to edit it.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
---

# Read-Only Mode in Blazor Block Editor

The Blazor Block Editor provides a read-only mode to display formatted content without allowing user edits. This feature is useful for presenting archived documents, previewing content, or restricting editing permissions while preserving the ability to view formatted text with full styling intact.

## Read-only mode

Read-only mode disables editing while allowing users to view and interact with formatted content. To enable read-only mode, set the [ReadOnly](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_ReadOnly) property to `true`. In this mode, users can view formatted content and select/copy text, but all editing actions and toolbar controls are disabled.

The following example demonstrates how to enable read-only mode in the Block Editor:

```cshtml

@using Syncfusion.Blazor.BlockEditor;

<div id="container">
    <SfBlockEditor Blocks="@BlocksData" ReadOnly="true"></SfBlockEditor>
</div>
@code {
    private List<BlockModel> BlocksData = new()
    {
        new BlockModel
        {
            BlockType = BlockType.Paragraph,
            Content = new()
            {
                new ContentModel
                {
                    ContentType = ContentType.Text,
                    Content = "The Block Editor supports various content types. When the ReadOnly property is set to true, it prevents users from editing the content, making the editor display-only."
                }
            }
        }
    };
}

```
