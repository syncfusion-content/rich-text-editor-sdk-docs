---
layout: post
title: Inline Editing in TypeScript Rich Text Editor | Syncfusion
description: Learn how to enable inline editing in the TypeScript Rich Text Editor to edit content directly in place with an inline toolbar for quick formatting.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Inline Editing in TypeScript Rich Text Editor


Inline editing enables users to edit content directly within the editor where it is displayed. Unlike traditional editors with separate toolbars, inline editing provides a seamless, on-the-spot editing experience. The toolbar appears contextually when you click or select text.

## Setup

To enable inline editing, inject the necessary modules and set the `inlineMode` property:

```typescript
import { RichTextEditor, HtmlEditor, Toolbar, QuickToolbar } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(HtmlEditor, Toolbar, QuickToolbar);

let editor: RichTextEditor = new RichTextEditor({
  inlineMode: { enable: true, onSelection: true }
});
editor.appendTo('#defaultRTE');
```

## Toolbar trigger behavior

The inline toolbar appears based on the [`onSelection`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/inlinemode#onselection) property within `inlineMode` settings.

| Setting | Behavior |
|---------|----------|
| `onSelection: true` | Toolbar appears only when text is selected |
| `onSelection: false` | Toolbar appears when the editor is focused |

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1" %}
{% endif %}
