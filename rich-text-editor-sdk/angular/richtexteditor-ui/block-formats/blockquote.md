---
layout: post
title: Block Quote in Angular Modern Rich Text Editor | Syncfusion
description: Learn how to configure the block quote toolbar item and slash command in the Angular Modern Rich Text Editor.
control: Modern Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Block Quote in Angular Modern Rich Text Editor

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
add `Blockquote` to [`slashCommandSettings.items`](https://ej2.syncfusion.com/angular/documentation/api/richtexteditor-ui/slashcommandsettings#items) if you want to expose it
through the slash-command popup as well.

{% tabs %}

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/block-formats/blockquote/blockformats-blockquote/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/block-formats/blockquote/blockformats-blockquote/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/richtexteditor-ui/block-formats/blockquote/blockformats-blockquote" %}
