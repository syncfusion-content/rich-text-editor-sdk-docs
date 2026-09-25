---
layout: post
title: Callouts in TypeScript Modern Rich Text Editor | Syncfusion
description: Learn how to configure Info, Success, Warning, Error, and Note callouts in the TypeScript Modern Rich Text Editor using toolbar and slash commands.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Callouts in TypeScript Modern Rich Text Editor

Callouts highlight a block of text with a status indicator. The Modern Rich
Text Editor ships five callout variants — `Info`, `Success`, `Warning`,
`Error`, and `Note` — each available through two public surfaces: the
`Callout` split-button toolbar item (which exposes all five variants
together) and the slash-command popup (which exposes each variant as its
own entry). The variants cannot be wired as separate top-level toolbar
buttons; the public `callout` command only fires through the `Callout`
split-button child or through a slash-command selection.

## Available types

| Variant | Slash-command entry |
| --- | --- |
| Info | `Info` |
| Success | `Success` |
| Warning | `Warning` |
| Error | `Error` |
| Note | `Note` |

All five variants funnel through the same `callout` command with a
`CalloutCommand` payload
(`{ callout: 'info' | 'success' | 'warning' | 'error' | 'note' }`).

## Configuring callouts

Add the `Callout` split-button to expose all five variants through a single
toolbar control. To surface the variants through the slash-command popup,
enable `slashCommandSettings` and list the matching entries in
`slashCommandSettings.items`.

{% tabs %}

{% highlight ts tabtitle="main.ts" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-callout/index.ts %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-callout/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-callout/" %}

## Commands support

The `callout` command accepts a `CalloutCommand` payload
(`{ callout: 'info' | 'success' | 'warning' | 'error' | 'note' }`). The
following table shows how every public surface dispatches the same command
with the matching variant.

| Public surface | Identifier | Dispatched command | Payload `callout` |
| --- | --- | --- | --- |
| Toolbar split-button | `Callout` (child: `CalloutInfo`) | `callout` | `'info'` |
| Toolbar split-button | `Callout` (child: `CalloutSuccess`) | `callout` | `'success'` |
| Toolbar split-button | `Callout` (child: `CalloutWarning`) | `callout` | `'warning'` |
| Toolbar split-button | `Callout` (child: `CalloutError`) | `callout` | `'error'` |
| Toolbar split-button | `Callout` (child: `CalloutNote`) | `callout` | `'note'` |
| Slash command | `Info` | `callout` | `'info'` |
| Slash command | `Success` | `callout` | `'success'` |
| Slash command | `Warning` | `callout` | `'warning'` |
| Slash command | `Error` | `callout` | `'error'` |
| Slash command | `Note` | `callout` | `'note'` |

The command is non-destructive — invoking it on a block that is already a
callout of the same variant toggles the callout off. See
[Text Formats](text-formats.md) for the full block-format command map.