---
layout: post
title: Managing Editor Value in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn how to get, set, save, and auto-save content in the JavaScript Modern Rich Text Editor using value, valueFormat, getHtml, getText, getDocument, and save.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Managing editor value in JavaScript Modern Rich Text Editor

The Modern Rich Text Editor lets you load initial content, read the current document back out in the format your application needs, and control when in-progress edits are committed.

## Setting the editor value

To load content when the editor is created, pass it through the `value` property. Whether that content is treated as an HTML string or a structured `EditorDocument` JSON object depends on `valueFormat` — set it to `'html'` if you're working with HTML strings, or leave it at its default `'json'` to work with the structured document model instead.

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/editor-value/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/editor-value/index.html %}
{% endhighlight %}
{% endtabs %}

## Getting the editor value

Depending on what your application needs to do with the content — display it, store it, or hand it to another system — read it back using whichever of these fits:

* Call `editor.getHtml()` when you need the document as an HTML string, for example to render a preview elsewhere on the page.
* Call `editor.getText()` when you only need the plain text, with no markup — useful for search indexing or word counts.
* Call `editor.getDocument()` when you want the structured JSON document model, which is a storage-neutral format you can persist and later feed straight back into `value` to restore the same content.

Each of these returns an empty result (`''` for HTML/text, `null` for the document) if the editor hasn't been mounted yet.

## Saving editor content

Call `editor.save()` when you need to be sure the latest content is captured before an action like navigating away or submitting a form — it commits the current content into `value` (using whichever format `valueFormat` specifies) and raises the `change` event, the same way it would if the user had triggered a save themselves.

## Auto-saving content

Rather than requiring an explicit `save()` call, you can have the editor commit automatically after the user pauses. Set `saveInterval` to the number of milliseconds of inactivity to wait before auto-committing dirty content:

```js
var editor = new ej.richtexteditorui.RichTextEditorUI({
    saveInterval: 5000
});
editor.appendTo('#editor');
```

I> There's no separate on/off switch for auto-save — it's controlled entirely by `saveInterval`.

If you'd rather the editor survive a page reload on its own, without you wiring up any storage yourself, turn on `enablePersistence` — the editor will keep its state, including content, in `localStorage` and restore it automatically.
