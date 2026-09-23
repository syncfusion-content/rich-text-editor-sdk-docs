---
layout: post
title: Inline Editing in Angular Rich Text Editor | Syncfusion
description: Learn how to enable inline editing in the Angular Rich Text Editor to edit content directly in place with an inline toolbar for quick formatting.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Inline Editing in Angular Rich Text Editor

Inline editing enables users to edit content directly within the editor where it is displayed. Unlike traditional editors with separate toolbars, inline editing provides a seamless, on-the-spot editing experience. The toolbar appears contextually when you click or select text.

Enable inline editing in the Rich Text Editor by using the [inlineMode](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#inlinemode) with the `enable` property as `true`. This configuration activates the feature, allowing direct content editing within its displayed context.

## Toolbar trigger behavior

The inline toolbar appears based on the [`onSelection`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/inlinemode#onselection) property within `inlineMode` settings.

| Setting | Behavior |
|---------|----------|
| `onSelection: true` | Toolbar appears only when text is selected |
| `onSelection: false` | Toolbar appears when the editor is focused |

The following code demonstrates enabling inline editing with the toolbar appearing on text selection:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs12/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs12/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs12" %}