---
layout: post
title: Toolbar Types in React Rich Text Editor | Syncfusion
description: Learn how to configure Expand, MultiRow, Scrollable, and Popup toolbar types in the React Rich Text Editor for different layout requirements.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Toolbar Types in React Rich Text Editor

The Rich Text Editor toolbar provides formatting, styling, and editing tools. Use the [type](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarsettings#type) field in the [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarsettings) property to change the toolbar layout.

> To create Rich Text Editor with Toolbar feature, inject the toolbar module to the Rich Text Editor using the `RichTextEditor.Inject(Toolbar)` method.

## Toolbar types

The accepted values for `type` are `Expand` (default), `MultiRow`, `Scrollable`, and `Popup`. Use the value that matches the layout you need.

## Expanding the toolbar

Setting the `type` to `Expand` in [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarsettings#type) groups the toolbar items so that they fit on a single row. Items that do not fit are collapsed into an expand menu.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs70/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs70/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs70" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs71/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs71/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs71" %}

## Configuring a multi-row toolbar

Setting the `type` to `MultiRow` in [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarsettings#type) arranges the toolbar items across multiple rows, displaying every configured toolbar item without collapsing.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs72/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs72/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs72" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs73/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs73/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs73" %}

## Implementing a scrollable toolbar

Setting the `type` to `Scrollable` in [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarsettings#type) will display the toolbar items in a single line, enabling horizontal scrolling in the toolbar.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/scrollable-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/scrollable-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/scrollable-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/scrollable-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/scrollable-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/scrollable-cs2" %}

 ## Configuring a popup toolbar

Setting the `type` to `Popup` in [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarsettings#type) will display overflowing toolbar items into a popup container, optimizing the toolbar layout for limited space and smaller screens.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/toolbar-popup/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/toolbar-popup/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/toolbar-popup" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/toolbar-popup/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/toolbar-popup/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/toolbar-popup" %}

## Creating a sticky toolbar

By default, the toolbar remains fixed at the top of the Rich Text Editor when the page is scrolled. You can enable or disable this behavior using the [enableFloating](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarsettings#enablefloating) property of [toolbarSettings](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarsettings). The default value is `true`.

To control the vertical distance (in pixels) between the sticky toolbar and the top of the viewport, set [floatingToolbarOffset](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#floatingtoolbaroffset) to a numeric value. The default is `0`.

Additionally, you can enable or disable the floating toolbar using the [enableFloating](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/toolbarsettings#enablefloating) property.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs74/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs74/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs74" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs75/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs75/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs75" %}

## See also

* [Toolbar Position in React Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/react/rich-text-editor/toolbar/toolbar-position)
* [Quick Toolbars in React Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/react/rich-text-editor/toolbar/quick-toolbar)
* [Customizing Accessibility Shortcut Keys](https://ej2.syncfusion.com/react/documentation/rich-text-editor/accessibility#keyboard-interaction)
