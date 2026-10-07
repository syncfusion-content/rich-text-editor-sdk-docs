---
layout: post
title: Inline Code Mark in React Headless Editor | Syncfusion
description: Learn how to configure the Inline Code mark in the React Headless Editor, including attributes, commands, keyboard shortcuts, and Markdown input rules.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Inline Code Mark in React Headless Editor

The `inlineCodeExtension` registers the `code` mark, which applies inline code formatting to text and renders the content as a `<code>` element. It contributes the `toggleCodeMark` command, a keyboard shortcut for toggling inline code, and Markdown-style input rules that convert `` `text` `` into inline code as the user types.

## Register the extension

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/inline-code/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/inline-code/app.tsx %}
{% endhighlight %}
{% endtabs %}

## Configure the extension

The `inlineCode` extension exposes an `htmlAttributes` option that adds custom HTML attributes to every rendered `<code>` element. Use `.configure()` to set it:

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `htmlAttributes` | `Record<string, string>` | `{}` | Custom HTML attributes applied to the rendered `<code>` element. |

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/inline-code/configure.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/inline-code/configure.tsx %}
{% endhighlight %}
{% endtabs %}

## Commands

| Command | Description |
|---------|-------------|
| `toggleCodeMark()` | Toggles inline code formatting on the current selection. |

```ts
editor.commands.toggleCodeMark();
```

## Keyboard shortcut

| Action | Windows | Mac |
|--------|---------|-----|
| Toggle Inline Code | <kbd>Ctrl</kbd> + <kbd>`</kbd> | <kbd>⌘</kbd> + <kbd>`</kbd> |

## Markdown input rules

The Inline Code mark supports Markdown-style input rules using `` `text` `` syntax.

```text
Type:    `let x = 10;`
Result:  <code>let x = 10;</code>
```