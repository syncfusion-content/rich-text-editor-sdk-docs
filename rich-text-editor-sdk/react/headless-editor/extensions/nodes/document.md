---
layout: post
title: Document Extension in React Headless Editor | Syncfusion
description: Learn about the Document extension in the React Headless Editor, which registers the root document node for the editor schema.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdkappliesto: UI Component Suite, Rich Text Editor SDK
---

# Document Extension in React Headless Editor

The `documentExtension` registers the root `document` node of the editor schema. Every Headless Editor instance requires exactly one `document` node, which acts as the top-level container that wraps all block-level content, such as paragraphs, headings, lists, and tables.

## Register the extension

The `document` extension has no configurable options. Add it to the `extensions` array when initializing the editor.

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes/document/app.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/headless-editor/extensions/nodes/document/app.tsx %}
{% endhighlight %}
{% endtabs %}

The `document` node itself does not carry any attributes. It is the schema root and is owned by the editor, so you do not create, update, or remove it directly. It is rendered as a `<div>` and automatically wraps whatever block-level content you insert, such as paragraphs, headings, or lists. You manage its content indirectly by inserting, updating, or removing the block nodes it contains.

I> Omitting the `document` extension results in an invalid schema. The Headless Editor automatically adds the required `document` extension if they are not registered.