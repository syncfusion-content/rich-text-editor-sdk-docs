---
layout: post
title: Toolbar Types in Angular Rich Text Editor | Syncfusion
description: Learn how to configure Expand, MultiRow, Scrollable, and Popup toolbar types in the Angular Rich Text Editor for different layout requirements.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Toolbar Types in Angular Rich Text Editor

The Rich Text Editor toolbar provides formatting, styling, and editing tools. Use the [type](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings#type) field in the [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings) property to change the toolbar layout.

> To use toolbar feature, configure `ToolbarService` in the provider section.

To get start quickly about customizing the toolbar in Angular Rich Text Editor component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=zQtXvvPxAJQ" %}

## Toolbar types

The accepted values for `type` are `Expand` (default), `MultiRow`, `Scrollable`, and `Popup`. Use the value that matches the layout you need.

## Expanding the toolbar

Setting the `type` to `Expand` in [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings#type) groups the toolbar items so that they fit on a single row. Items that do not fit are collapsed into an expand menu.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/toolbar/expand-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/toolbar/expand-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/toolbar/expand-cs1" %}

## Configuring a multi-row toolbar

Setting the `type` to `MultiRow` in [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings#type) arranges the toolbar items across multiple rows, displaying every configured toolbar item without collapsing.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/toolbar/multirow-cs3/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/toolbar/multirow-cs3/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/toolbar/multirow-cs3" %}

## Implementing a scrollable toolbar

Setting the `type` to `Scrollable` in [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings#type) will display the toolbar items in a single line, enabling horizontal scrolling in the toolbar.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/toolbar/scrollable-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/toolbar/scrollable-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/toolbar/scrollable-cs1" %}

## Configuring a popup toolbar

Setting the `type` to `Popup` in [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings#type) will display overflowing toolbar items into a popup container, optimizing the toolbar layout for limited space and smaller screens.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/toolbar/popup-toolbar/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/toolbar/popup-toolbar/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/toolbar/popup-toolbar" %}

## Creating a sticky toolbar

By default, the toolbar remains fixed at the top of the Rich Text Editor when the page is scrolled. You can enable or disable this behavior using the [enableFloating](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings#enablefloating) property of [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings). The default value is `true`.

To control the vertical distance (in pixels) between the sticky toolbar and the top of the viewport, set [floatingToolbarOffset](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#floatingtoolbaroffset) to a numeric value. The default is `0`.

Additionally, you can enable or disable the floating toolbar using the [enableFloating](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings#enablefloating) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/floating-toolbar-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/floating-toolbar-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/floating-toolbar-cs1" %}

## See also


* [Toolbar Position in Angular Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/angular/rich-text-editor/toolbar/toolbar-position)
* [Quick Toolbars in Angular Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/angular/rich-text-editor/toolbar/quick-toolbar)
* [Customizing Accessibility Shortcut Keys](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/accessibility#keyboard-interaction)