---
layout: post
title: Paragraph Extension in React Headless Editor | Syncfusion
description: Learn how to configure the Paragraph extension in the React Headless Editor, including attributes, commands, and keyboard shortcuts.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Paragraph in React Headless Editor

The `paragraphExtension` registers the `paragraph` block node, which is the default block type used for standard body text.

## Register the extension

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes/paragraph/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes/paragraph/app.tsx %}
{% endhighlight %}
{% endtabs %}

## Node attributes

| Attribute | Description |
|-----------|--------------|
| `align` | Text alignment of the paragraph (`left`, `center`, `right`, or `justify`). No alignment is applied by default. Managed through the Text Alignment extension's commands. |
| `indent` | Indent level of the paragraph, rendered as `margin-left` in steps of 20px. Defaults to `0` (no indent). Managed through the Indent and Outdent extension's commands. |

## Configure paragraph options

The `paragraph` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<p>` element. It defaults to an empty object. Use `.configure()` to set it:

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes/paragraph/configure.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes/paragraph/configure.tsx %}
{% endhighlight %}
{% endtabs %}

## Commands

| Command | Description |
|---------|--------------|
| `setParagraph()` | Converts the current block into a paragraph. If the source block had `align` or `indent` attributes, they are preserved on the resulting paragraph. |

```ts
editor.commands.setParagraph();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Convert to Paragraph | <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>P</kbd> | <kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>P</kbd> |