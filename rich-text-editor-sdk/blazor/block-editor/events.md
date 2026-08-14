---
layout: post
title: Events in Blazor Block Editor | Syncfusion®
description: Learn how to handle events in the Blazor Block Editor, including block changes, selection changes, focus, blur, and paste events.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
---

# Events in Blazor Block Editor

The Block Editor component provides a comprehensive set of events to monitor and respond to various user interactions and editor state changes. These events enable implementation of custom behaviors, validation, logging, and integration with other systems.

The following table summarizes the available events:

| Event | Description |
|-------|-------------|
| [Created](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_Created) | Triggers when the editor is initialized and ready for use. |
| [BlockChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_BlockChanged) | Triggers when blocks are added, removed, or modified. |
| [SelectionChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_SelectionChanged) | Triggers when the user's text selection changes. |
| [Focus](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_Focus) | Triggers when the editor gains focus. |
| [Blur](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_Blur) | Triggers when the editor loses focus. |
| [PasteCleanupStarting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_PasteCleanupStarting) | Triggers before pasted content is processed. |
| [PasteCleanupCompleted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_PasteCleanupCompleted) | Triggers after pasted content has been processed and inserted. |

> **Note:** Event handlers can be declared as either `void` or `async Task` methods. Use `async Task` when the handler performs asynchronous work, such as calling an API or awaiting JS interop.

## Created

The [Created](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_Created) event triggers when the Block Editor component is successfully initialized and ready for use. This event is useful for performing setup operations or initializing additional features after the editor is created.

```cshtml
@using Syncfusion.Blazor.BlockEditor

<div id="container">
    <SfBlockEditor Created="@OnCreated"></SfBlockEditor>
</div>

@code {
    private void OnCreated()
    {
        // Perform initialization tasks
        // Example: Load user preferences, setup auto-save, etc.
    }
}
```

## BlockChanged

The [BlockChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_BlockChanged) event triggers whenever editor blocks are changed. This includes block additions, deletions, or any structural modifications to the document. The event handler receives details about the changes.

```cshtml
@using Syncfusion.Blazor.BlockEditor

<div id="container">
    <SfBlockEditor BlockChanged="@OnBlockChanged"></SfBlockEditor>
</div>

@code {
    private void OnBlockChanged(BlockChangedEventArgs args)
    {
        // Access changed blocks via args
        // Example: Track document changes, trigger auto-save, update word count, etc.
    }
}
```

## SelectionChanged

The [SelectionChanged](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_SelectionChanged) event triggers when the user's text selection changes within the editor. The event arguments contain details about the new selection, which can be useful for updating UI elements or enabling context-specific features.

```cshtml
@using Syncfusion.Blazor.BlockEditor

<div id="container">
    <SfBlockEditor SelectionChanged="@OnSelectionChanged"></SfBlockEditor>
</div>

@code {
    private void OnSelectionChanged(SelectionChangedEventArgs args)
    {
        // Access selection details via args
        // Example: Update toolbar state, show formatting options, etc.
    }
}
```

## Focus

The [Focus](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_Focus) event triggers when the editor gains focus. This is useful for updating UI states, showing toolbars, or managing editor interactions.

> **Note:** The `FocusEventArgs` parameter belongs to the `Syncfusion.Blazor.BlockEditor` namespace. If your component also imports `Microsoft.AspNetCore.Components.Web`, which defines a type with the same name, qualify the type explicitly to avoid ambiguity.

```cshtml
@using Syncfusion.Blazor.BlockEditor

<div id="container">
    <SfBlockEditor Focus="@OnFocus"></SfBlockEditor>
</div>

@code {
    private void OnFocus(FocusEventArgs args)
    {
        // Handle focus event
        // Example: Show floating toolbar, highlight editor border, etc.
    }
}
```

## Blur

The [Blur](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_Blur) event triggers when the editor loses focus. This is commonly used for auto-saving content, hiding UI elements that should only be visible when the editor is active, or validating content.

> **Note:** The `BlurEventArgs` parameter belongs to the `Syncfusion.Blazor.BlockEditor` namespace. If your component also imports `Microsoft.AspNetCore.Components.Web`, which defines a type with the same name, qualify the type explicitly to avoid ambiguity.

```cshtml
@using Syncfusion.Blazor.BlockEditor

<div id="container">
    <SfBlockEditor Blur="@OnBlur"></SfBlockEditor>
</div>

@code {
    private void OnBlur(BlurEventArgs args)
    {
        // Handle blur event
        // Example: Auto-save content, hide toolbars, validate input, etc.
    }
}
```

## PasteCleanupStarting

The [PasteCleanupStarting](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_PasteCleanupStarting) event triggers before content is pasted into the editor. This event allows inspection, modification, or cancellation of the paste operation via event arguments.

```cshtml
@using Syncfusion.Blazor.BlockEditor

<div id="container">
    <SfBlockEditor PasteCleanupStarting="@OnPasteCleanupStarting"></SfBlockEditor>
</div>

@code {
    private void OnPasteCleanupStarting(PasteCleanupStartingEventArgs args)
    {
        // Inspect or modify pasted content before insertion
        // Example: Strip formatting, sanitize HTML, prevent certain content types, etc.
        // Set args.Cancel = true to prevent paste operation
    }
}
```

## PasteCleanupCompleted

The [PasteCleanupCompleted](https://help.syncfusion.com/cr/blazor/Syncfusion.Blazor.BlockEditor.SfBlockEditor.html#Syncfusion_Blazor_BlockEditor_SfBlockEditor_PasteCleanupCompleted) event triggers after content has been successfully pasted into the editor. This is useful for post-processing pasted content or updating related UI elements.

```cshtml
@using Syncfusion.Blazor.BlockEditor

<div id="container">
    <SfBlockEditor PasteCleanupCompleted="@OnPasteCleanupCompleted"></SfBlockEditor>
</div>

@code {
    private void OnPasteCleanupCompleted(PasteCleanupCompletedEventArgs args)
    {
        // Handle post-paste operations
        // Example: Log paste action, update statistics, trigger content analysis, etc.
    }
}
```
