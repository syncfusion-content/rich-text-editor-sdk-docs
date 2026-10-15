---
layout: post
title: Code Block in Angular Modern Rich Text Editor | Syncfusion
description: Learn how to insert and configure code blocks in the Angular Modern Rich Text Editor using the CodeBlock toolbar item and the codeBlock command.
control: Modern Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Code Block in Angular Modern Rich Text Editor

A code block inserts a `<pre>` element at the current selection and tags it
with a language identifier for syntax highlighting. Code blocks are reached
through the `CodeBlock` built-in toolbar identifier in the Modern Rich Text
Editor. There is no slash-command entry for the code block; users reach it
through the toolbar or through the `codeBlock` command.

## Commands support

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

{% highlight ts tabtitle="app.component.ts" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/block-formats/codeblock/blockformats-codeblock/src/app.component.ts %}

{% endhighlight %}

{% highlight html tabtitle="app.component.html" %}

{% include code-snippet/rich-text-editor-sdk/angular/richtexteditor-ui/block-formats/codeblock/blockformats-codeblock/src/app.component.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/richtexteditor-ui/block-formats/codeblock/blockformats-codeblock" %}
