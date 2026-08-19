---
layout: post
title: Toolbar Types in TypeScript Rich Text Editor | Syncfusion
description: Learn how to configure Expand, MultiRow, Scrollable, and Popup toolbar types in the TypeScript Rich Text Editor for different layout requirements.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Toolbar Types in TypeScript Rich Text Editor

The Rich Text Editor toolbar provides formatting, styling, and editing tools. Use the [type](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#type) field in the [toolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings) property to change the toolbar layout.

> To create Rich Text Editor with Toolbar feature, inject the toolbar module to the Rich Text Editor using the `RichTextEditor.Inject(Toolbar)` method.

## Toolbar types

The accepted values for `type` are `Expand` (default), `MultiRow`, `Scrollable`, and `Popup`. Use the value that matches the layout you need.

## Expanding the toolbar

Setting the `type` to `Expand` in [toolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#type) groups the toolbar items so that they fit on a single row. Items that do not fit are collapsed into an expand menu.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs3/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs3/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs3" %}
{% endif %}

## Configuring a multi-row toolbar

Setting the `type` to `MultiRow` in [toolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#type) arranges the toolbar items across multiple rows, displaying every configured toolbar item without collapsing.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs4/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs4" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs4/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs4/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs4" %}
{% endif %}

## Implementing a scrollable toolbar

Setting the `type` to `Scrollable` in [toolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#toolbarsettings) will display the toolbar items in a single line, enabling horizontal scrolling in the toolbar.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs5/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs5/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs5" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs5/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs5/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-cs5" %}
{% endif %}

## Configuring a popup toolbar

Setting the `type` to `Popup` in [toolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#toolbarsettings) will display overflowing toolbar items into a popup container, optimizing the toolbar layout for limited space and smaller screens.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-popup/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-popup/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-popup" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-popup/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-popup/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/toolbar-popup" %}
{% endif %}

## Creating a sticky toolbar

By default, the toolbar remains fixed at the top of the Rich Text Editor when the page is scrolled. You can enable or disable this behavior using the [enableFloating](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#enablefloating) property of [toolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings). The default value is `true`.

To control the vertical distance (in pixels) between the sticky toolbar and the top of the viewport, set [floatingToolbarOffset](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#floatingtoolbaroffset) to a numeric value. The default is `0`.

Additionally, you can enable or disable the floating toolbar using the [enableFloating](https://ej2.syncfusion.com/documentation/api/rich-text-editor/toolbarsettings#enablefloating) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/floating-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/floating-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/floating-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/floating-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/floating-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/floating-toolbar-cs1" %}
{% endif %}

## See also

* [Toolbar Position in TypeScript Rich Text Editor](./toolbar-position)
* [Quick Toolbars in TypeScript Rich Text Editor](./quick-toolbar)
* [Customizing Accessibility Shortcut Keys](../accessibility#keyboard-navigation)
