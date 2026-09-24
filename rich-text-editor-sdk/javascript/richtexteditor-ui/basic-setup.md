---
layout: post
title: Basic Setup in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn the four properties you'll typically configure first in the JavaScript Modern Rich Text Editor — value, valueFormat, toolbarSettings, and imageSettings.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Basic setup in JavaScript Modern Rich Text Editor

Once the editor is rendering (see [Getting Started](getting-started)), these four properties are usually the first things you configure — what content it starts with, what format that content is in, which tools appear on the toolbar, and how inserted images are handled.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/basic-setup/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/basic-setup/index.html %}
{% endhighlight %}
{% endtabs %}

## value

Set `value` to load initial content into the editor when it's created:

```js
value: '<p>Getting started with the Rich Text Editor UI.</p>'
```

## valueFormat

`valueFormat` determines whether `value` is treated as an HTML string or a structured `EditorDocument` JSON object. Set it to `'html'` if you're working with HTML strings, or leave it at its default `'json'` to work with the structured document model instead.

```js
valueFormat: 'html'
```

## toolbarSettings

`toolbarSettings.items` sets the ordered list of buttons (and `'|'` separators) shown on the main toolbar. Configure it with just the tools your application actually needs, rather than the full default set:

```js
toolbarSettings: {
    items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
}
```

See [Toolbar](toolbar) for layout, floating behavior, and toolbar events.

## imageSettings

`imageSettings` controls how images are validated when a reader inserts one — most commonly, which file types are accepted and how large a file can be:

```js
imageSettings: {
    allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
    maxFileSize: 30000000
}
```

See [Insert Image](insert-image) for upload, storage, and display configuration beyond this basic validation.
