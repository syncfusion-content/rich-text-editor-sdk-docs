---
layout: post
title: To Upper Case in React Headless Editor | Syncfusion
description: Learn how to configure the To Upper Case extension in the React Headless Editor, including the toUpperCase command and usage examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# To Upper Case in React Headless Editor

The `toUpperCaseExtension` registers the `toUpperCase` command, which transforms the literal text characters in the current selection to UPPERCASE.

## Register the extension

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/upper-case/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/upper-case/app.tsx %}
{% endhighlight %}
{% endtabs %}

## Commands

| Command | Description |
|---------|-------------|
| `toUpperCase()` | Converts the literal text characters of the current selection to UPPERCASE. |

```ts
// Convert the current selection to uppercase
editor.commands.toUpperCase();
```