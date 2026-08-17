---
layout: post
title: Editor Modes in React Rich Text Editor | Syncfusion
description: Learn how to use HTML, Markdown, and IFrame editing modes in the React Rich Text Editor to create and edit content in different formats.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Editor Modes in React Rich Text Editor

The Rich Text Editor component supports two editing modes for creating and editing content in different formats. You can access the edited content via the `value` property or capture changes in the `change` event.

## Supported editor modes

* **HTML editor** — Default WYSIWYG mode for editing and formatting content as HTML
* **Markdown editor** — For editing and viewing content in Markdown format

## HTML editor

HTML editing is the default mode of the Rich Text Editor. In this mode, you can format content using the available toolbar commands, and the editor returns valid HTML markup.

### Setup

To use the HTML editor mode, import and inject the `HtmlEditor` module:

```tsx
import { RichTextEditorComponent, Inject, HtmlEditor, Toolbar, Image, Link, QuickToolbar } from '@syncfusion/ej2-react-richtexteditor';

<RichTextEditorComponent>
  <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
</RichTextEditorComponent>
```

To explicitly set the HTML editor mode, set the [`editorMode`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#editormode) property to `'HTML'`:

### Examples

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs3/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs3/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs3" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs4/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs4/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs4" %}

## Markdown editor

To edit content in Markdown format, set the [`editorMode`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#editormode) property to `'Markdown'`. You can then apply Markdown-compatible formatting and view the rendered output.

### Setup

To use the Markdown editor mode, import and inject the `MarkdownEditor` module:

```tsx
import { RichTextEditorComponent, Inject, MarkdownEditor, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

<RichTextEditorComponent editorMode="Markdown">
  <Inject services={[MarkdownEditor, Toolbar]} />
</RichTextEditorComponent>
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
| Subscript | `~text~` | `H~2~O` |
| Superscript | `^text^` | `E=mc^2^` |
| Uppercase | (selection formatting) | Converts selected text to uppercase |
| Lowercase | (selection formatting) | Converts selected text to lowercase |

### Markdown Conversion

Markdown content is converted to HTML using the `@syncfusion/ej2-markdown-converter` package. Ensure this package is installed in your project.

For more details on Markdown editing, refer to the [Markdown Editor Getting Started](../../markdown-editor/getting-started) guide.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/markdown-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/markdown-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/markdown-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/markdown-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/markdown-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/markdown-cs2" %}

## See Also

* [Rich Text Editor API Reference](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor)
* [Markdown Editor Documentation](https://help.syncfusion.com/rich-text-editor-sdk/react/markdown-editor/getting-started)