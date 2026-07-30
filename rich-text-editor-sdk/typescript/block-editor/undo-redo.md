---
layout: post
title: Undo redo in TypeScript Block Editor control | Syncfusion
description: Checkout and learn about Undo redo with TypeScript Block Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Undo redo in TypeScript Block Editor control

The undo/redo feature in Block Editor enables users to revert or reapply changes made to the content, offering a safety net for edits and enhancing the overall editing experience.

## Keyboard shortcuts

| Action | Windows | Mac | Description |
|------------|--------------|---------|-----------------|
| Undo       | Ctrl + Z     | ⌘ + Z   | Reverts the last action. |
| Redo       | Ctrl + Y     | ⌘ + Y | Reapplies the last undone action. |

## Configuring Undo/Redo stack

The Block Editor stores a history of actions, allowing users to perform undo and redo operations. By default, it saves up to `30` actions. You can customize this limit using the [undoRedoStack](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#undoredostack) property to control the maximum number of steps that can be undone or redone.

The example below sets the undo/redo history limit to `20` actions.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/undo-redo/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/undo-redo/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/undo-redo" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/undo-redo/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/undo-redo/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/undo-redo" %}
{% endif %}
