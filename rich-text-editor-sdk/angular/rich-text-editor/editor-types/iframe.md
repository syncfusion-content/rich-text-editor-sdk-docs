---
layout: post
title: IFrame Editing Mode in Angular Rich Text Editor | Syncfusion
description: Learn how to enable IFrame editing mode in the Angular Rich Text Editor to isolate styles and scripts within the editor surface.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# IFrame Editing Mode in Angular Rich Text Editor

The iframe editor in the Rich Text Editor provides an isolated environment for content editing by using an iframe element as the content area. This ensures separation from the parent page's styles and scripts, preventing conflicts and enhancing compatibility. In this mode, the editor displays only the body tag of the iframe, offering a clean and isolated workspace for content creation.

## Configuring the Iframe editor

Iframe editing mode is enabled using the [`iframeSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#iframesettings) property. When this option is enabled, the Rich Text Editor creates an iframe element as the content area during initialization.

The following example demonstrates enabling iframe mode:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs5/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs5/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs5" %}

## Customizing IFrame attributes

Custom attributes can be applied to the iframe's body element using the `attributes` field of the [iframeSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#iframesettings) property. This property accepts name/value pairs in string format, enabling you to override the default appearance of the content area.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs6/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs6/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs6" %}

## Integrating external CSS and scripts

You can apply external CSS and script files to the iframe by using the `resources` property of [`iframeSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#iframesettings). This allows you to customize the appearance and functionality of the editor's content while maintaining style isolation.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs7/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs7/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs7" %}

> You can also explore our [iframe in Angular Rich Text Editor example](https://ej2.syncfusion.com/angular/demos/#/tailwind3/rich-text-editor/iframe) that shows how to render the iframe in Angular Rich Text Editor.

## Integrating Mention with Iframe

The Rich Text Editor supports the Mention component even when rendered inside an iframe. To enable mention functionality in iframe mode, you must set the Mention component's [`target`](https://ej2.syncfusion.com/angular/documentation/api/mention/index-default#target) property to the Rich Text Editor's input element.

The Mention popup is triggered when the user types a designated character (e.g., `@`) inside the Rich Text Editor's editable area.

Here's an example of how to integrate Mention with Iframe editor,

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/mention-iframe/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/mention-iframe/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/mention-iframe" %}

## See also

* [Implementing Inline Editing](https://ej2.syncfusion.com/angular/documentation/rich-text-editor/editor-types/inline-editing)
* [Using the Markdown Editor](https://ej2.syncfusion.com/angular/documentation/markdown-editor/getting-started)
