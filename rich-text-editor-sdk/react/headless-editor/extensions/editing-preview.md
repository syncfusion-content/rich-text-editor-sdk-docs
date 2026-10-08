---
layout: post
title: Editing Extensions in React Headless Editor | Syncfusion
description: Learn about the editing extensions available in the React Headless Editor, including undo and redo, placeholder, text alignment, and indent and outdent.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Editing Extensions in React Headless Editor

Editing extensions add the commands, keyboard shortcuts, and runtime behavior that make the editor interactive: history navigation, hint text, alignment, and indentation.

## Editing extension list

| Extension | Covers |
|-----------|--------|
| [Undo and Redo](editing/undo-redo) | History stack, `undo` and `redo` commands, `Ctrl/Cmd+Z` and `Ctrl/Cmd+Y` shortcuts. |
| [Placeholder](editing/placeholder) | Hint text in empty nodes with configurable visibility and styling. |
| [Text Alignment](editing/text-align) | `setTextAlign` and `unsetTextAlign` commands, `Ctrl/Cmd+Shift+L/E/R/J` shortcuts. |
| [Indent and Outdent](editing/indent-outdent) | `indent` and `outdent` commands, shape-aware <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> handling. |

The example below mounts an editor with the editing extensions enabled.

{% tabs %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/editing/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/editing/index.jsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/editing/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/editing" %}