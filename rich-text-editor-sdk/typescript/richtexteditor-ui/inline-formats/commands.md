---
layout: post
title: Inline Format Commands in TS Modern Rich Text Editor | Syncfusion
description: Learn how to invoke inline format commands programmatically in the TypeScript Modern Rich Text Editor using the fluent commands builder.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Inline Format Commands in TypeScript Modern Rich Text Editor

The Modern Rich Text Editor exposes every inline format through two equivalent surfaces — a toolbar click and the fluent `editor.commands().<builder>().<setter>().apply()` chain. Both routes converge on the same `actionBegin` / `actionComplete` pipeline and share identical cancellation and history semantics.

The set of available inline formats is on [Supported Formats](supported-formats.md). The configuration surface (`fontSize`, `fontFamily`, `fontColor`, `backgroundColor`) is on [Options](options.md).

## Toggle text-style commands

Toggle commands carry no payload. They flip the mark for the selection or set the active typing mark for a collapsed caret.

## Fluent builder

```ts
editor.commands().bold().apply();
editor.commands().italic().apply();
editor.commands().underline().apply();
editor.commands().strikethrough().apply();
editor.commands().subscript().apply();
editor.commands().superscript().apply();
editor.commands().inlineCode().apply();
editor.commands().clearFormat().apply();
editor.commands().uppercase().apply();
editor.commands().lowercase().apply();
```

## Color commands

Both color commands share the `ColorCommand { color: string }` payload. An empty string removes the corresponding mark from the selection.

### Apply a color

```ts
editor.commands().fontColor().color('#DC2626').apply();
editor.commands().backgroundColor().color('rgba(255, 247, 199, 1)').apply();
```

### Remove a color

```ts
editor.commands().fontColor().color('').apply();
editor.commands().backgroundColor().color('').apply();
```

The empty-string signal is the documented convention for removing a color mark. Any other "no color" string is treated as a literal color.

## Typography commands

### Font size

```ts
editor.commands().fontSize().size('16px').apply();
editor.commands().fontSize().size('').apply(); // remove the font size
```

`size` accepts any CSS size string — `'12px'`, `'1.5em'`, `'small'`, `'120%'`. The default dropdown item sends `{ size: 'Default' }`, which is treated as remove the font size.

### Font family

```ts
editor.commands().fontName().family('Georgia, serif').apply();
editor.commands().fontName().family('').apply(); // remove the font family
```

The toolbar item label is `FontName`, but the command name and mark type are both `fontFamily`. The fluent builder is exposed as `.fontName()` to match the toolbar label.

## Programmatic end-to-end example

{% tabs %}

{% highlight ts tabtitle="main.ts" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/inlineformats-commands1/index.ts %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/inlineformats-commands1/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/inlineformats-commands1/" %}

## See also

* [Supported Formats](supported-formats.md) — the inventory of marks and serialization shapes.
* [Options](options.md) — `fontSize`, `fontFamily`, `fontColor`, `backgroundColor` configuration, including the full color picker reference.
