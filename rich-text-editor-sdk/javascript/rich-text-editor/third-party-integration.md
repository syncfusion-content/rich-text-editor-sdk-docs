---
layout: post
title: Third-Party Integrations in JavaScript Rich Text Editor | Syncfusion
description:  Learn how to integrate CodeMirror, Embedly, Highlight.js, and other third-party libraries with the JavaScript Rich Text Editor.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Third-Party Integration in JavaScript Rich Text Editor

The Rich Text Editor can be integrated with third-party libraries to suit the application scenario.

## CodeMirror integration

Rich Text Editor comes with a basic HTML source editor through view-source property. [`Code mirror`](https://codemirror.net/) plugin can be used to highlight the syntax of HTML. CodeMirror plugin for Rich Text Editor makes editing of HTML source code with a pleasant experience.

Import necessary CSS and JS files of CodeMirror to the HTML page.

Required JS files of CodeMirror.

```ts
 <script src="scripts/CodeMirror/codemirror.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/javascript.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/css.js" type="text/javascript"></script>
 <script src="scripts/CodeMirror/htmlmixed.js" type="text/javascript"></script>

```

Required CSS file of CodeMirror.

```ts
 <link href="scripts/CodeMirror/codemirror.min.css" rel="stylesheet" />

```

Add a custom icon for HTML source editor in the toolbar of Rich Text Editor using template option of [`toolbarSettings`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#toolbarsettings) and define the code mirror plugins, and then pass the Rich Text Editor content as argument in [`actionComplete`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#actioncomplete) event.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/code-mirror-cs2/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/code-mirror-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/code-mirror-cs2" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/code-mirror-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/code-mirror-cs2/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/code-mirror-cs2" %}
{% endif %}

## Embedly integration

Rich Text Editor easily integrate with [`Embed.ly`](https://embed.ly/) which is probably the best service when it comes to embed the rich content such as Twitter, Facebook and lots of other publishing platform embeds.

This can be achieved by binding the [actionComplete](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#actioncomplete) event to the toolbar items in the [toolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#toolbarsettings) property. In the event handler, create an element and add the appropriate class. The below script has to be added in the sample to embed the content.

```ts

<script src="https://cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>

```

The above script is added to the page.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-embedly-integration-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-embedly-integration-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-embedly-integration-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-embedly-integration-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-embedly-integration-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/how-to-embedly-integration-cs1" %}
{% endif %}
