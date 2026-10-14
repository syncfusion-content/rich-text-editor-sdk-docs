---
layout: post
title: Nodes and Marks Preview | React Headless Editor | Syncfusion
description: A preview that exercises the block nodes and inline marks in the React Headless Editor, including callout, collapsible, superscript, subscript, and link.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Nodes and Marks Preview in React Headless Editor

This example demonstrates the built-in **nodes** and **marks** available in the React Headless Editor. It includes common text blocks, lists, tables, callouts, collapsible content, and text formatting such as bold, italic, underline, strikethrough, superscript, subscript, inline code, and links.

## Extensions used

The example uses the following extensions:

| Extension              | Description                                       |
| ---------------------- | ------------------------------------------------- |
| `basicExtensions`      | Includes the commonly used nodes and marks.       |
| `tableExtension`       | Adds table support.                               |
| `calloutExtension`     | Adds the callout block.                           |
| `collapsibleExtension` | Adds collapsible content.                         |
| `subscriptExtension`   | Adds the subscript mark.                          |
| `superscriptExtension` | Adds the superscript mark.                        |
| `linkExtension`        | Adds the link mark.                               |

## Nodes

The example demonstrates the following nodes:

| Node             | Description                              |
| ---------------- | ---------------------------------------- |
| `document`       | Defines the root of the document.        |
| `paragraph`      | Adds a paragraph for regular text.       |
| `heading`        | Adds headings from level 1 to 6.         |
| `blockquote`     | Adds a block quote.                      |
| `codeBlock`      | Adds a multi-line code block.            |
| `horizontalRule` | Adds a horizontal divider.               |
| `hardBreak`      | Adds a line break within text.           |
| `bulletList`     | Adds an unordered list.                  |
| `orderedList`    | Adds an ordered list.                    |
| `taskList`       | Adds a checklist.                        |
| `table`          | Adds tables with rows and cells.         |
| `callout`        | Adds a highlighted info box.             |
| `collapsible`    | Adds expandable and collapsible content. |

The `text` node is also included for text content.

## Marks

The example demonstrates the following marks:

| Mark            | Description                   |
| --------------- | ----------------------------- |
| `bold`          | Makes text bold.              |
| `italic`        | Makes text italic.            |
| `underline`     | Underlines text.              |
| `strikethrough` | Adds a strikethrough to text. |
| `code`          | Formats text as inline code.  |
| `superscript`   | Raises text above the baseline.   |
| `subscript`     | Lowers text below the baseline.   |
| `link`          | Adds a hyperlink to text.          |

## Run the example

The following example registers the required extensions and loads sample content into the editor.

{% tabs %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes/index.tsx %}
{% endhighlight %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes/index.jsx %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes" %}