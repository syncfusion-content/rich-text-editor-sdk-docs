---
layout: post
title: Undo and Redo in JavaScript Block Editor | Syncfusion
description: Learn how to configure undo and redo in JavaScript Block Editor, customize the undo/redo history stack, and restore editing actions.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Undo and Redo in JavaScript Block Editor

Undo/redo lets users revert and reapply changes made to the editor content, providing a safety net for edits.

The Block Editor tracks the following types of actions in the undo/redo stack:
- Text content changes (typing, deletion)
- Block additions, deletions, and duplication
- Block movements and reordering (via drag-and-drop or shortcuts)
- Inline formatting changes (bold, italic, underline, color)
- Block transformations (paragraph to heading, etc.)

## Keyboard shortcuts

| Action | Windows | Mac | Description |
|--------|---------|-----|-------------|
| Undo | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> | Reverts the last action. |
| Redo | <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> | Reapplies the last undone action. |

## Configuring Undo/Redo stack

By default, the editor saves up to `30` actions in its undo/redo history. You can customize this limit using the [undoRedoStack](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#undoredostack) property.

The example below sets the undo/redo history limit to `20` actions.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/undo-redo/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/undo-redo/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/undo-redo" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/undo-redo/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/undo-redo/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/undo-redo" %}
{% endif %}
