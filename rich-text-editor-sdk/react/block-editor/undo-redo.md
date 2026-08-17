---
layout: post
title: Undo and Redo in React Block Editor | Syncfusion
description: Learn how to configure undo and redo in React Block Editor, customize the undo/redo history stack, and restore editing actions.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Undo and Redo in React Block Editor

The undo/redo feature in Block Editor enables users to revert or reapply changes made to the content, offering a safety net for edits and enhancing the overall editing experience.

## Keyboard shortcuts

| Action | Windows | Mac | Description |
|--------|---------|-----|-------------|
| Undo | <kbd>Ctrl</kbd> + <kbd>Z</kbd> | <kbd>⌘</kbd> + <kbd>Z</kbd> | Reverts the last action. |
| Redo | <kbd>Ctrl</kbd> + <kbd>Y</kbd> | <kbd>⌘</kbd> + <kbd>Y</kbd> | Reapplies the last undone action. |

For the complete list of shortcuts, refer to the [Keyboard Shortcuts](https://help.syncfusion.com/rich-text-editor-sdk/react/block-editor/keyboard-shortcuts) documentation.

## Configuring Undo/Redo stack

The Block Editor stores a history of actions, allowing users to perform undo and redo operations. By default, it saves up to `30` actions. You can customize this limit using the [undoRedoStack](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#undoredostack) property to control the maximum number of steps that can be undone or redone.

{% raw %}
```typescript
<BlockEditorComponent undoRedoStack={20}></BlockEditorComponent>
```
{% endraw %}

The example below sets the undo/redo history limit to `20` actions.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/undo-redo/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/undo-redo/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/undo-redo" %}
