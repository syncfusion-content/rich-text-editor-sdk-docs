---
layout: post
title: Collapsible Headings in TypeScript Modern Rich Text Editor | Syncfusion
description: Learn how to configure collapsible sections (paragraph and heading 1–4) in the TypeScript Modern Rich Text Editor through slash commands.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Collapsible Headings in TypeScript Modern Rich Text Editor

Collapsible sections wrap a block of text in a foldable container that the
user can expand or collapse. The Modern Rich Text Editor ships five
collapsible variants — `Collapsible Paragraph` and
`Collapsible Heading 1` through `Collapsible Heading 4`. Collapsible
sections are reached **only** through the slash-command popup; there is no
dedicated public toolbar item for them.

## Available types

| Type | Slash-command entry | Dispatched payload |
| --- | --- | --- |
| Collapsible Paragraph | `Collapsible Paragraph` | `{ triggerType: 'paragraph' }` |
| Collapsible Heading 1 | `Collapsible Heading 1` | `{ triggerType: 'heading', level: 1 }` |
| Collapsible Heading 2 | `Collapsible Heading 2` | `{ triggerType: 'heading', level: 2 }` |
| Collapsible Heading 3 | `Collapsible Heading 3` | `{ triggerType: 'heading', level: 3 }` |
| Collapsible Heading 4 | `Collapsible Heading 4` | `{ triggerType: 'heading', level: 4 }` |

All five entries funnel through the `collapsible` command with a
`ToggleCollapsiblePayload`
(`{ triggerType: 'paragraph' | 'heading', level?: 1 | 2 | 3 | 4 }`).

## Configuring collapsible headings

Enable `slashCommandSettings` and list the five collapsible entries in
`slashCommandSettings.items` to expose them through the popup. Each entry is
a string identifier from `SlashCommandItems`.

{% tabs %}

{% highlight ts tabtitle="main.ts" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-collapsable-heading/index.ts %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-collapsable-heading/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-collapsable-heading/" %}

## Commands support

The `collapsible` command accepts a `ToggleCollapsiblePayload`
(`{ triggerType: 'paragraph' | 'heading', level?: 1 | 2 | 3 | 4 }`). The
`triggerType` selects between a collapsible paragraph and a collapsible
heading; when `triggerType` is `'heading'`, `level` is required and selects
the heading level (1–4).

| Slash-command entry | Command | Payload |
| --- | --- | --- |
| `Collapsible Paragraph` | `collapsible` | `{ triggerType: 'paragraph' }` |
| `Collapsible Heading 1` | `collapsible` | `{ triggerType: 'heading', level: 1 }` |
| `Collapsible Heading 2` | `collapsible` | `{ triggerType: 'heading', level: 2 }` |
| `Collapsible Heading 3` | `collapsible` | `{ triggerType: 'heading', level: 3 }` |
| `Collapsible Heading 4` | `collapsible` | `{ triggerType: 'heading', level: 4 }` |

The command is non-destructive — invoking it on a block that is already a
collapsible section of the same type and level toggles it back to a normal
paragraph or heading. See [Text Formats](text-formats.md) for the full
block-format command map.