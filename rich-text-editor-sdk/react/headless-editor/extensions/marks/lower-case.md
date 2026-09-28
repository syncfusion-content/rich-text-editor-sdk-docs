---
layout: post
title: To Lower Case in React Headless Editor | Syncfusion
description: Learn how to configure the To Lower Case extension in the React Headless Editor, including the toLowerCase command and usage examples.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# To Lower Case in React Headless Editor

The `toLowerCaseExtension` registers the `toLowerCase` command, which transforms the literal text characters in the current selection to lowercase.

## Register the extension

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/lower-case/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/marks/lower-case/app.tsx %}
{% endhighlight %}
{% endtabs %}

## Commands

| Command | Description |
|---------|-------------|
| `toLowerCase()` | Converts the literal text characters of the current selection to lowercase. |

```ts
// Convert the current selection to lowercase
editor.commands.toLowerCase();
```