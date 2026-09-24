---
layout: post
title: Style and Appearance in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to size, style, and theme the JavaScript Modern Rich Text Editor using width, height, cssClass, htmlAttributes, and placeholder.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Style and appearance in JavaScript Modern Rich Text Editor

## Setting width and height

Set `width` and `height` to control the editor's footprint — both accept CSS units (`'100%'`, `'600px'`, `'40em'`) or a bare number treated as pixels. Leaving `height` at its default `'auto'` lets the editor grow taller as content is added, which suits most content-entry scenarios; set an explicit height instead if you need a fixed-size editing area.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/style-appearance/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/style-appearance/index.html %}
{% endhighlight %}
{% endtabs %}

## Custom CSS class and attributes

Add `cssClass` to hook your own CSS rules to the editor's root element without needing to override the built-in theme classes directly. If you need to set attributes for accessibility, testing, or integration purposes — an `id`, a `data-*` attribute, an ARIA role — use `htmlAttributes` to apply them to that same root element.

## Placeholder text

Set `placeholder` to hint text that appears whenever the document is empty, the same way a text input shows placeholder text — useful for prompting readers on what to write ("Start typing here...", "Describe the issue...").

## Theming

The editor ships with the same theme family as other EJ2 components — Bootstrap, Bootstrap 4/5/5.3, Fabric, Fluent, Tailwind, and High Contrast, each with `-lite` and `-dark` variants. Switch themes the same way you would for any EJ2 control: swap the theme CSS reference in `index.html` for a different one (see [Getting Started](getting-started)).
