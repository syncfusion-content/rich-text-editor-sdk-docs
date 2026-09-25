---
layout: post
title: Block Quote in TypeScript Modern Rich Text Editor | Syncfusion
description: Learn how to configure the block quote toolbar item and slash command in the TypeScript Modern Rich Text Editor.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Block Quote in TypeScript Modern Rich Text Editor

A block quote wraps the current block in a `<blockquote>` element to visually
set it apart from surrounding text. The Modern Rich Text Editor exposes the
block quote through the `Quote` built-in toolbar identifier and through the
`Blockquote` slash-command entry.

## Commands support

The `blockQuote` command does not require a payload. It toggles a blockquote
on the current selection: invoking it on a plain paragraph wraps it in a
blockquote, and invoking it again on the resulting blockquote unwraps it.

| Command | Payload | Toolbar item | Slash-command entry |
| --- | --- | --- | --- |
| `blockQuote` | — | `Quote` | `Blockquote` |

Add the `Quote` toolbar item alongside the other block-format buttons, and
add `Blockquote` to `slashCommandSettings.items` if you want to expose it
through the slash-command popup as well.

{% tabs %}

{% highlight ts tabtitle="main.ts" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-blockquote/index.ts %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-blockquote/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-blockquote/" %}

Because the command is non-destructive, the user can toggle the blockquote
on and off by activating the `Quote` toolbar button or the `Blockquote`
slash-command entry repeatedly. See [Text Formats](text-formats.md) for the
full block-format command map.