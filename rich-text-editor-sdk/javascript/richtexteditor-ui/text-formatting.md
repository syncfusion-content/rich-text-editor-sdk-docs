---
layout: post
title: Text Formatting and Block Content in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to apply inline formatting, block content, alignment, lists, and color using the fluent commands API in the JavaScript Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Text formatting and block content in JavaScript Modern Rich Text Editor

Every formatting toolbar button, under the hood, calls into the same programmatic API — `commands()` — which you can also call directly from your own code whenever you need to apply formatting outside of a toolbar click, such as from a custom button or in response to some other event in your application.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/text-formatting/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/text-formatting/index.html %}
{% endhighlight %}
{% endtabs %}

## Inline formatting commands

Call `editor.commands().bold().apply()` to toggle bold on the current selection — the same pattern applies to `italic()`, `underline()`, `strikethrough()`, `subscript()`, `superscript()`, `lowercase()`, `uppercase()`, and `inlineCode()`. If you need to strip all of these back off a selection at once, `clearFormat()` resets it to plain text.

## Block content commands

Beyond inline marks, `commands()` also handles block-level structure: `paragraph()` for body text, `heading1()` through `heading4()` for headings, `blockQuote()` for quoted content, `horizontalRule()` to insert a divider, and `codeBlock()` for a fenced code block. For content that needs to be collapsed and expanded, `collapsible()` wraps the selection in a collapsible section; for callouts like tips or warnings, `callout().variant('info' | 'warning' | 'error' | 'success' | 'note').apply()` inserts the matching admonition block. Use `indent()` and `outdent()` to move a block in or out one level.

## Alignment, color, and typography commands

Set block-level alignment with `setTextAlign().align('left' | 'center' | 'right' | 'justify').apply()`. Apply color with `fontColor().color(value).apply()` for the text itself or `backgroundColor().color(value).apply()` for a highlight, both accepting a hex or named color string. Change typography with `fontSize().size('16px').apply()` and `fontName().family('Arial').apply()`.

For list commands (`numberedList()`, `bulletList()`, `setListStyle()`, `toggleTaskList()`), see [Lists](lists).

## Configuring toolbar dropdown options

The Format, Font Size, and Font Family toolbar dropdowns each pull their entries from a settings object you can override — `format`, `fontSize`, and `fontFamily` respectively — if your application needs a different set of headings, sizes, or fonts than the defaults (Paragraph/Heading 1–4; Default, 8–24; Default, Arial, Helvetica, Times New Roman, Courier New).

The `fontColor` and `backgroundColor` color pickers are configurable the same way — palette or picker mode, column count, a custom preset palette, whether a mode switcher is shown, and whether recently used colors are tracked.

I> `commands()` is the public entry point for every command on this page — the underlying builder classes aren't meant to be constructed directly.
