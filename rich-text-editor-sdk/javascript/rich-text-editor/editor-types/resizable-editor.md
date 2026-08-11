---
layout: post
title: Resizable Editor in JavaScript Rich Text Editor | Syncfusion
description: Learn how to resize the JavaScript Rich Text Editor dynamically by enabling editor resizing and controlling the available resize area.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Resizable Editor in JavaScript Rich Text Editor

The resizable editor feature allows dynamic resizing of the editor. Enable or disable this feature using the [enableResize](https://helpej2.syncfusion.com/documentation/api/rich-text-editor#enableresize) property in the Rich Text Editor. When `enableResize` is set to `true`, a grip appears at the bottom right corner for diagonal resizing.

> To use the Resizable feature, inject the Resize module to the Rich Text Editor using the `RichTextEditor.Inject(Resize)` method.

The following sample demonstrates the resizable feature.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-cs1" %}
{% endif %}

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

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/resizable-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/resizable-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/resizable-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/resizable-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/resizable-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/resizable-cs1" %}
{% endif %}

## See also

* [Working with IFrame Editing Mode](./iframe)
* [Using the Markdown Editor](../../markdown-editor/js/getting-started)