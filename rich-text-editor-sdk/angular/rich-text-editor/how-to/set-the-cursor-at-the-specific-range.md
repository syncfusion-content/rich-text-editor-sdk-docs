---
layout: post
title: Set Cursor Position by Range in Angular Rich Text Editor | Syncfusion
description: Learn how to set the cursor position at a specific range in the Angular Rich Text Editor using the NodeSelection and setRange methods.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Set Cursor Position by Range in Angular Rich Text Editor

This can be achieved by using the `setRange` method in the Rich Text Editor with a `NodeSelection` instance. In the sample below, the text node (the exact position inside the editor content) is passed to the `setStart` method, and then the range is applied using the `setRange` method of the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/cut-copy-cs2/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/cut-copy-cs2/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/how-to/cut-copy-cs2" %}
