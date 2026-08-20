---
layout: post
title: Toolbar Types in Vue Rich Text Editor | Syncfusion
description: Learn how to configure Expand, MultiRow, Scrollable, and Popup toolbar types in the Vue Rich Text Editor for different layout requirements.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Toolbar Types in Vue Rich Text Editor

The Rich Text Editor toolbar provides formatting, styling, and editing tools. Use the [type](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarsettings#type) field in the [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarsettings) property to change the toolbar layout.

>To use Toolbar feature, configure `Toolbar` in the provider section.

The accepted values for `type` are `Expand` (default), `MultiRow`, `Scrollable`, and `Popup`. Use the value that matches the layout you need.

## Expanding the toolbar

The default mode of the toolbar is `Expand`, configured through [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarsettings#type) with `type: 'Expand'`. This mode hides any overflowing toolbar items in the next row, which can viewed by clicking the expand arrow.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs16/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs16/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs16" %}

## Configuring a multi-row toolbar

Setting the `type` to `MultiRow` in [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarsettings#type) arranges the toolbar items across multiple rows, displaying every configured toolbar item without collapsing.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs17/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs17/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs17" %}

## Implementing a scrollable toolbar

Setting the `type` to `Scrollable` in [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarsettings#type) will display the toolbar items in a single line, enabling horizontal scrolling in the toolbar.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/scrollable-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/scrollable-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/scrollable-cs1" %}

## Configuring a popup toolbar

Setting the `type` to `Popup` in [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarsettings#type) will display overflowing toolbar items into a popup container, optimizing the toolbar layout for limited space and smaller screens.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-popup/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-popup/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-popup" %}

## Creating a sticky toolbar

By default, the toolbar remains fixed at the top of the Rich Text Editor when the page is scrolled. You can enable or disable this behavior using the [enableFloating](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarsettings#enablefloating) property of [toolbarSettings](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarsettings). The default value is `true`.

To control the vertical distance (in pixels) between the sticky toolbar and the top of the viewport, set [floatingToolbarOffset](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#floatingtoolbaroffset) to a numeric value. The default is `0`.

Additionally, you can enable or disable the floating toolbar using the [enableFloating](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarsettings#enablefloating) property.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs18/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs18/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs18" %}

## See also

* [Toolbar Position in Vue Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/vue/rich-text-editor/toolbar/toolbar-position)
* [Quick Toolbars in Vue Rich Text Editor](https://help.syncfusion.com/rich-text-editor-sdk/vue/rich-text-editor/toolbar/quick-toolbar)
* [Customizing Accessibility Shortcut Keys](https://ej2.syncfusion.com/vue/documentation/rich-text-editor/accessibility#keyboard-interaction)
