---
layout: post
title: Toolbar Position in JavaScript Rich Text Editor | Syncfusion
description: Learn how to position the toolbar at the top or bottom of the JavaScript Rich Text Editor to match your application layout and editing experience.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Toolbar Position in JavaScript Rich Text Editor

The Rich Text Editor allows you to configure the toolbar's position using the [position](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarSettings#position) field in the [toolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarSettings#toolbarSettings) property. The available positions are:

1. Top (default)
2. Bottom

## Configuring the toolbar position

The Rich Text Editor allows you to position the toolbar at the top or bottom of the content area, depending on your layout requirements. By default, the toolbar is displayed at the top of the editor.

To position the toolbar at the bottom, set the `position` property in the [`toolbarSettings`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarSettings#position) configuration to `ToolbarPosition.Bottom` (or `'Bottom'` for JavaScript). This places the toolbar below the content area, which can help maintain a cleaner top layout and improve accessibility in certain use cases.

> When using TypeScript, import the `ToolbarPosition` enum from `@syncfusion/ej2-richtexteditor` to take advantage of compile-time validation.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-position/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-position/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-position" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-position/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-position/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/toolbar-position" %}
{% endif %}

## See also

* [Customizing Rich Text Editor Toolbar Styles](../style)
* [Implementing Inline Editing](../inline-editing)
* [Customizing Accessibility Shortcut Keys](../accessibility)
