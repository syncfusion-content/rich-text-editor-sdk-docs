---
layout: post
title: Toolbar Position in Angular Rich Text Editor | Syncfusion
description: Learn how to configure the toolbar position in the Angular Rich Text Editor using the position field in the toolbarSettings property.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Toolbar Position in Angular Rich Text Editor

The Angular Rich Text Editor allows you to configure the toolbar's position using the [position](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings#position) field in the [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings) property. The available positions are:

1. Top 
2. Bottom

## Configuring the toolbar position

The Rich Text Editor allows you to position the toolbar at the top or bottom of the content area, depending on your layout requirements.

By default, the toolbar is displayed at the top of the editor, making all formatting and editing tools immediately accessible above the content.

To position the toolbar at the bottom, use the [position](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings#position) property in the [toolbarSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings) configuration and set its value to `Bottom`. This places the toolbar below the content area, which can help maintain a cleaner top layout and improve accessibility in certain use cases.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/toolbar/bottom-toolbar/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/toolbar/bottom-toolbar/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/toolbar/bottom-toolbar" %}

## See also

* [Customizing Rich Text Editor Toolbar Styles](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/style#customizing-the-rich-text-editors-toolbar)
* [Implementing Inline Editing](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/editor-types/inline-editing)
* [Customizing Accessibility Shortcut Keys](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/accessibility#keyboard-interaction)