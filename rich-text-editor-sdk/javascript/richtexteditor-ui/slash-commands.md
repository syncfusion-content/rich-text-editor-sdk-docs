---
layout: post
title: Slash Commands in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to enable and configure the slash command popup in the JavaScript Modern Rich Text Editor for fast, keyboard-driven block insertion.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Slash commands in JavaScript Modern Rich Text Editor

For readers who'd rather stay on the keyboard than reach for the toolbar, typing `/` at the start of an empty block opens an inline popup they can use to insert headings, lists, tables, callouts, and more without leaving the keyboard.

## Enabling slash commands

Unlike the editor's other features, slash commands are opt-in and need two things: register the `SlashCommand` module with `RichTextEditorUI.Inject(SlashCommand)`, and set `slashCommandSettings.enable` to `true`.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/slash-commands/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/slash-commands/index.html %}
{% endhighlight %}
{% endtabs %}

I> `SlashCommand` is the only module in this editor that needs an explicit `Inject()` call — every other module (`ToolbarModule`, `QuickToolbarModule`, `ImageModule`, `TableModule`) is wired in automatically.

## Configuring slash command items

Out of the box, the popup lists 22 items covering paragraphs, headings, lists (including task lists), blockquotes, tables, links, images, collapsible sections, and callout variants (Info, Warning, Error, Success, Note). Set `slashCommandSettings.items` if you want to trim that list down to just what your application uses, or reorder it to put the most common items first.

If the default popup size doesn't suit your layout, adjust `slashCommandSettings.popupWidth` and `slashCommandSettings.popupHeight` (both default to `'300px'` and `'320px'`).

## Slash command events

Listen for `itemSelect` if you need to intervene when a reader picks an item — for example, to route a custom item to your own handler instead of the built-in command. It's cancelable, so setting `args.cancel = true` inside the handler stops the default command from running.
