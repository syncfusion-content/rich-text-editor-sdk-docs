---
layout: post
title: Resizable Editor in Vue Rich Text Editor | Syncfusion
description: Learn how to resize the Vue Rich Text Editor dynamically by enabling editor resizing and controlling the available resize area.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Resizable Editor in Vue Rich Text Editor

The resizable editor feature allows dynamic resizing of the editor. Enable or disable this feature using the [enableResize](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#enableresize) property in the Rich Text Editor. When `enableResize` is set to `true`, a grip appears at the bottom right corner for diagonal resizing.

> To use the Resizable feature, inject the `Resize` module in the provider section.

The following sample demonstrates the resizable feature.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs12/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs12/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs12" %}

## Restrict resize

To restrict the resizable area of the Rich Text Editor, set the `min-width`, `max-width`, `min-height`, and `max-height` CSS properties for the component's wrapper element. 

By default, the control resizes up to the current viewport size. Apply these styles using the `e-richtexteditor`  CSS class in the component's wrapper.

```CSS

.e-richtexteditor {
  max-width: 880px;
  min-width: 250px;
  min-height: 250px;
  max-height: 400px;
}

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs13/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs13/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs13" %}

## See also

* [Working with IFrame Editing Mode](./iframe)
* [Using the Markdown Editor](../../markdown-editor/getting-started)
