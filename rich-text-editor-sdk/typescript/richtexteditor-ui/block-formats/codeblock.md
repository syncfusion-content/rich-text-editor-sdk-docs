---
layout: post
title: Code Block in TypeScript Modern Rich Text Editor | Syncfusion
description: Learn how to insert and configure code blocks in the TypeScript Modern Rich Text Editor using the CodeBlock toolbar item and the codeBlock command.
platform:
control: Modern Rich Text Editor
documentation: ug
domainurl:
---

# Code Block in TypeScript Modern Rich Text Editor

A code block inserts a `<pre>` element at the current selection and tags it
with a language identifier for syntax highlighting. Code blocks are reached
through the `CodeBlock` built-in toolbar identifier in the Modern Rich Text
Editor. There is no slash-command entry for the code block; users reach it
through the toolbar or through the `codeBlock` command.

## Command support

The `codeBlock` command accepts a `CodeBlockCommand` payload
(`{ language: string }`). The `language` value is the language identifier
applied to the block — common values include `"javascript"`, `"typescript"`,
`"html"`, `"css"`, `"python"`, and `"plaintext"`. An empty string applies a
plain code block with no specific language annotation.

| Command | Payload | Toolbar item | Keyboard shortcut |
| --- | --- | --- | --- |
| `codeBlock` | `CodeBlockCommand` (`{ language: string }`) | `CodeBlock` | `Ctrl+Shift+B` (Windows) / `⌘ ⇧ B` (macOS) |

Add the `CodeBlock` toolbar item next to the other block-format buttons to
expose the command.

{% tabs %}

{% highlight ts tabtitle="main.ts" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-codeblock/index.ts %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-codeblock/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/richtexteditor-ui/blockformats-codeblock/" %}

When the user clicks the `CodeBlock` toolbar button, the editor dispatches
the `codeBlock` command with a default language value. The command is
non-destructive — invoking it on a block that is already a code block
toggles the block back to a paragraph. See [Text Formats](text-formats.md)
for the full block-format command map.