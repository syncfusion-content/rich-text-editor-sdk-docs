---
layout: post
title: Third-Party Integration in Angular Rich Text Editor | Syncfusion
description: Learn how to integrate third-party libraries and tools with the Angular Rich Text Editor to extend its functionality for custom scenarios.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Third-Party Integration in Angular Rich Text Editor

The Rich Text Editor can be integrated with third-party to suite the application scenario.

To get start quickly with Third-Party Integration for Angular Rich Text Editor component, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=F4UATDBVxXM" %}

## CodeMirror integration

RichTextEditor comes with a basic HTML source editor through the view-source property. CodeMirror plugin can be used to highlight the syntax of HTML. CodeMirror plugin for Rich Text Editor makes editing of HTML source code with a pleasant experience.

Import necessary CSS and JS files of CodeMirror to the HTML page.

Required JS files of code mirror.

```typescript
 <script src="scripts/CodeMirror/codemirror.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/javascript.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/css.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/htmlmixed.js" type="text/javascript"></script>

```

Required CSS file of code mirror

```typescript
 <link href="scripts/CodeMirror/codemirror.min.css" rel="stylesheet" />
```

Add a custom icon for HTML source editor in the toolbar of Rich Text Editor using the template option of ToolbarSettings, define the code mirror plugins, and then pass the Rich Text Editor content as argument in the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#actioncomplete) event.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs29/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs29/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/getting-started-cs29" %}

## Embedly integration

This can be achieved by binding the [`actionComplete`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#actioncomplete) event to the toolbar items in the [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#toolbarsettings) property. In the event handler, create an element and add the appropriate class. The below script is have to add in the sample to embed the content,

Include `embedly` javascript.

```typescript

<script src="https://cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

```

The above script is added to the page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/embedly-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/embedly-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/how-to/embedly-cs1" %}