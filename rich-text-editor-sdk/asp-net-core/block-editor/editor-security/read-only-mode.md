---
layout: post
title: Read-Only Mode in ASP.NET Core Block Editor | Syncfusion
description: Learn how to enable read-only mode in the ASP.NET Core BlockEditor to display content without allowing users to edit it.
platform: rich-text-editor-sdk
control: BlockEditor
documentation: ug
---

# Read-Only Mode in ASP.NET Core Block Editor

The Block Editor control provides a read-only mode to control user interaction with the editor. This allows users to view formatted content without editing. This feature is useful for displaying content without modifications or temporarily restricting user input.

## Read-only mode

Read-only mode prevents users from editing the content in the Block Editor while preserving the ability to view formatted text. This feature is particularly useful when you want to display formatted content without permitting modifications.

### Enable read-only mode

To enable read-only mode, set the [ReadOnly](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.BlockEditor.BlockEditor.html#Syncfusion_EJ2_BlockEditor_BlockEditor_ReadOnly) property to `true`. The content remains viewable with its formatting intact, but all editing is disabled.

```csharp
// Enable read-only mode
new BlockEditor
{
    ReadOnly = true,  // Prevents all editing operations
    Content = GetBlockContent()  // Display pre-existing content
}
```

        
