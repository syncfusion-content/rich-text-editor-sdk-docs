---
layout: post
title: Editing Extensions in TypeScript Headless Editor | Syncfusion
description: Learn about the editing extensions available in the TypeScript Headless Editor, including undo and redo, placeholder, text alignment, and indent and outdent.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Editing Extensions in TypeScript Headless Editor

Editing extensions add the commands, keyboard shortcuts, and runtime behavior that make the editor interactive: history navigation, hint text, alignment, and indentation.

## Editing extension list

| Extension | Covers |
|-----------|--------|
| [Undo and Redo](editing/undo-redo) | History stack, `undo` and `redo` commands, `Ctrl/Cmd+Z` and `Ctrl/Cmd+Y` shortcuts. |
| [Placeholder](editing/placeholder) | Hint text in empty nodes with configurable visibility and styling. |
| [Text Alignment](editing/text-align) | `setTextAlign` and `unsetTextAlign` commands, `Ctrl/Cmd+Shift+L/E/R/J` shortcuts. |
| [Indent and Outdent](editing/indent-outdent) | `indent` and `outdent` commands, shape-aware <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> handling. |

`basicExtensions` already includes the Undo and Redo extension. Register Text Alignment, Indent and Outdent, and Placeholder individually to add their behavior.

## Register editing extensions

```typescript
import {
    HeadlessEditor,
    basicExtensions,
    textAlignExtension,
    indentOutdentExtension,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

const headlessEditor: HeadlessEditor = HeadlessEditor.create({
    extensions: [
        basicExtensions,
        textAlignExtension,
        indentOutdentExtension,
        placeholderExtension
    ],
    config: { enableTabKey: true }
});
```

The example below mounts an editor with the editing extensions enabled.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/editing/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/editing/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/editing" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/editing/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/editing/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/editing" %}
{% endif %}