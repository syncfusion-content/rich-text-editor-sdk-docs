---
layout: post
title: Editor Modes in TypeScript Rich Text Editor | Syncfusion
description: Learn how to use HTML, Markdown, and IFrame editing modes in the TypeScript Rich Text Editor to create and edit content in different formats.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Editor Modes in TypeScript Rich Text Editor

The Rich Text Editor component supports two editing modes for creating and editing content in different formats. You can access the edited content via the `value` property or capture changes in the `change` event.

## Supported editor modes

* **HTML editor** — Default WYSIWYG mode for editing and formatting content as HTML
* **Markdown editor** — For editing and viewing content in Markdown format

## HTML editor

HTML editing is the default mode of the Rich Text Editor. In this mode, you can format content using the available toolbar commands, and the editor returns valid HTML markup.

### Setup

To use the HTML editor mode, inject the `HtmlEditor` module:

```typescript
import { RichTextEditor, HtmlEditor, Toolbar, Image, Link, QuickToolbar } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(HtmlEditor, Toolbar, Image, Link, QuickToolbar);

let editor: RichTextEditor = new RichTextEditor({
  // ...
});
editor.appendTo('#defaultRTE');
```

To explicitly set the HTML editor mode, set the [`editorMode`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#editormode) property to `'HTML'`:

### Examples

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs2" %}
{% endif %}

## Markdown editor

To edit content in Markdown format, set the [`editorMode`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#editormode) property to `'Markdown'`. You can then apply Markdown-compatible formatting and view the rendered output.

### Setup

To use the Markdown editor mode, inject the `MarkdownEditor` module:

```typescript
import { RichTextEditor, MarkdownEditor, Toolbar } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(MarkdownEditor, Toolbar);

let editor: RichTextEditor = new RichTextEditor({
  editorMode: 'Markdown',
  // ...
});
editor.appendTo('#defaultRTE');
```

### Supported Markdown tags

The following HTML tags are generated from Markdown syntax:

| Markdown Syntax | HTML Tag | Example |
|-----------------|----------|---------|
| `# Heading` | `<h1>` | `# Main Title` |
| `## Heading` | `<h2>` | `## Subtitle` |
| `### Heading` | `<h3>` | `### Section` |
| `#### Heading` | `<h4>` | `#### Subsection` |
| `##### Heading` | `<h5>` | `##### Minor` |
| `###### Heading` | `<h6>` | `###### Tiny` |
| `> Blockquote` | `<blockquote>` | `> Quote text` |
| `` ``` code ``` `` | `<pre>` | `` ``` code block ``` `` |
| `Paragraph` | `<p>` | Regular text |
| `1. Item` | `<ol>` | Ordered list |
| `- Item` | `<ul>` | Unordered list |

### Selection formatting tags

The following text formatting options are available in Markdown mode:

| Format | Markdown | Example |
|--------|----------|---------|
| Bold | `**text**` | `**bold text**` |
| Italic | `*text*` | `*italic text*` |
| Strikethrough | `~~text~~` | `~~strikethrough~~` |
| Inline Code | `` `code` `` | `` `code` `` |
| Subscript | (selection formatting) | Converts selected text to Subscript |
| Superscript | (selection formatting) | Converts selected text to Superscript ||
| Uppercase | (selection formatting) | Converts selected text to uppercase |
| Lowercase | (selection formatting) | Converts selected text to lowercase |

### Markdown Conversion

Markdown content is converted to HTML using the `@syncfusion/ej2-markdown-converter` package. Ensure this package is installed in your project.

For more details on Markdown editing, refer to the [Markdown Editor Getting Started](../../markdown-editor/getting-started) guide.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/getting-started-cs3" %}
{% endif %}

## See Also

* [Rich Text Editor API Reference](https://ej2.syncfusion.com/documentation/api/rich-text-editor)
* [Markdown Editor Documentation](https://help.syncfusion.com/rich-text-editor-sdk/typescript/markdown-editor/getting-started)
