---
layout: post
title: Document Variable Extension Example in Vue Headless Editor | Syncfusion
description: A runnable Document Variable custom extension for the Headless Editor that turns {{name}} tokens into styled chips.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Document Variable Extension Example in Vue Headless Editor

This page demonstrates how to build a custom extension using the contributors covered above: `defineExtension`, `marks`, `commands`, `inputRules`, `domSpecs`, and `keyboardShortcuts`. The extension turns a typed token like `{{customerName}}` into a styled chip, and the same chip can be inserted from a toolbar button or from the <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> keyboard shortcut.

## What we are building

- A `variable` mark with `name` and `value` attributes that decorates inline text.
- A registered `insertVariable` command with `canExecute` payload validation that dispatches the built-in `inputRuleMark` command at the current selection.
- A `{{name}}` input rule that converts the typed token into the `variable` mark.
- A `domSpecs` block that renders the mark as a chip and parses the same shape back.
- A keyboard shortcut that cycles through the configured variables and dispatches `insertVariable`.

## Preview sample

The runnable example below mounts the editor with the Document Variable extension.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/headless-editor/extensions/custom-extensions/variable/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/headless-editor/extensions/custom-extensions/variable/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue3/headless-editor/extensions/custom-extensions/variable/index" %}
