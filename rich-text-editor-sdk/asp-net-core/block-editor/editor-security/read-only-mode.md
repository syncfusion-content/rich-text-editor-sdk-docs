---
layout: post
title: Read-Only Mode in ASP.NET Core Block Editor | Syncfusion
description: Learn how to enable read-only mode in the ASP.NET Core BlockEditor to display content without allowing users to edit it.
platform: rich-text-editor-sdk
control: BlockEditor
documentation: ug
---

# Read-Only Mode in ASP.NET Core Block Editor

The Block Editor control provides read-only modes to control user interaction with the editor. This allows users to view formatted content without editing. This features are useful for displaying content without modifications or temporarily restricting input.

## Read-only mode

Read-only mode prevents users from editing the content in the Block Editor while preserving the ability to view formatted text. This feature is particularly useful when you want to display formatted content without permitting modifications.

To enable the read-only mode, set the [readOnly](https://help.syncfusion.com/cr/aspnetcore-js2/Syncfusion.EJ2.BlockEditor.BlockEditor.html#Syncfusion_EJ2_BlockEditor_BlockEditor_ReadOnly) property to `true`. The content remains viewable with its formatting intact, but editing is restricted.

The following example demonstrates how to enable read-only mode in the Block Editor:

        