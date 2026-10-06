---
layout: post
title: Editing Extensions in Vue Headless Editor | Syncfusion
description: Learn about editing extensions in the Vue Headless Editor, including undo and redo, placeholder, text alignment, and indent and outdent.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Editing Extensions in Vue Headless Editor

Editing extensions add the commands, keyboard shortcuts, and runtime behavior that make the editor interactive: history navigation, hint text, alignment, and indentation.

## Editing extension list

| Extension | Covers |
|-----------|--------|
| [Undo and Redo](editing/undo-redo) | History stack, `undo` and `redo` commands, `Ctrl/Cmd+Z` and `Ctrl/Cmd+Y` shortcuts. |
| [Placeholder](editing/placeholder) | Hint text in empty nodes with configurable visibility and styling. |
| [Text Alignment](editing/text-align) | `setTextAlign` and `unsetTextAlign` commands, `Ctrl/Cmd+Shift+L/E/R/J` shortcuts. |
| [Indent and Outdent](editing/indent-outdent) | `indent` and `outdent` commands, shape aware <kbd>Tab</kbd> and <kbd>Shift</kbd>+<kbd>Tab</kbd> handling. |

## Preview sample

The example below mounts an editor with the editing extensions enabled.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/headless-editor/extensions/editing/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/headless-editor/extensions/editing/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/headless-editor/extensions/editing" %}
