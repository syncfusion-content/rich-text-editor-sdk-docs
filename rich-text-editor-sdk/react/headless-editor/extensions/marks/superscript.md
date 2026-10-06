---
layout: post
title: Superscript Mark in React Headless Editor | Syncfusion
description: Learn how to configure the Superscript mark in the React Headless Editor, including attributes, commands, keyboard shortcuts, and input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdkappliesto: UI Component Suite, Rich Text Editor SDK
---

# Superscript Mark in React Headless Editor

The `superscriptExtension` registers the `superscript` mark, which applies superscript formatting to text and renders the content as a `<sup>` element. It contributes the `toggleSuperscript` command, a keyboard shortcut for toggling superscript, and input rules that convert `^text^` into superscript as the user types.

## Register the extension

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/superscript/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/superscript/app.tsx %}
{% endhighlight %}
{% endtabs %}

## Configure the extension

The `superscript` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<sup>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<sup>` element. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/superscript/configure.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/superscript/configure.tsx %}
{% endhighlight %}
{% endtabs %}

## Commands

| Command | Description |
|---------|-------------|
| `toggleSuperscript()` | Toggles superscript formatting on the current selection. |

```ts
editor.commands.toggleSuperscript();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Superscript | <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> | <kbd>⌘</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd> |

## Input rules

The Superscript mark supports `^text^` syntax for inline conversion.

```text
Type:    ^2^
Result:  <sup>2</sup>
```