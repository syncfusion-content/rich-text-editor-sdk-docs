---
layout: post
title: Inline Editing in React Rich Text Editor | Syncfusion
description: Learn how to enable inline editing in the React Rich Text Editor to edit content directly in place with an inline toolbar for quick formatting.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Inline Editing in React Rich Text Editor


Inline editing enables users to edit content directly within the editor where it is displayed. Unlike traditional editors with separate toolbars, inline editing provides a seamless, on-the-spot editing experience. The toolbar appears contextually when you click or select text.

### Setup

To enable inline editing, import the necessary modules and set the `inlineMode` property:

```tsx
import { RichTextEditorComponent, Inject, HtmlEditor, Toolbar, InlineMode } from '@syncfusion/ej2-react-richtexteditor';

<RichTextEditorComponent
  inlineMode={{ enable: true, onSelection: true }}
>
  <Inject services={[HtmlEditor, Toolbar]} />
</RichTextEditorComponent>
```

## Toolbar Trigger Behavior

The inline toolbar appears based on the [`onSelection`](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/inlinemode#onselection) property within `inlineMode` settings.

| Setting | Behavior |
|---------|----------|
| `onSelection: true` | Toolbar appears only when text is selected |
| `onSelection: false` | Toolbar appears when the editor is focused, regardless of selection |

### Inline Toolbar Properties

```tsx
inlineMode={{
  enable: true,
  onSelection: true  // Show toolbar on text selection
}}
```

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs34/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs34/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs34" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs35/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs35/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs35" %}