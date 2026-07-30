---
layout: post
title: Toolbar position in JavaScript Rich text editor | Syncfusion
description: Learn here all about Toolbar position in Syncfusion JavaScript Rich text editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Toolbar position
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Toolbar position in JavaScript Rich Text Editor control

The Rich Text Editor allows you to configure the toolbar's position using the [position](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#position) field in the [toolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#toolbarsettings) property. The available positions are:

1. Top 
2. Bottom

## Configuring the toolbar position

The Rich Text Editor allows you to position the toolbar at the top or bottom of the content area, depending on your layout requirements.

By default, the toolbar is displayed at the top of the editor, making all formatting and editing tools immediately accessible above the content.

To position the toolbar at the bottom, use the [position](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#position) property in the [`toolbarSettings`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#position) configuration and set its value to `Bottom`. This places the toolbar below the content area, which can help maintain a cleaner top layout and improve accessibility in certain use cases.

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

* [Customizing Rich Text Editor Toolbar Styles](../style#customizing-editor-toolbar)
* [Implementing Inline Editing](../inline-editing)
* [Customizing Accessibility Shortcut Keys](../accessibility#keyboard-navigation)