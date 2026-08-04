---
layout: post
title: Implement Ctrl+S Shortcut in Angular Rich Text Editor | Syncfusion
description: Learn how to implement the Ctrl+S keyboard shortcut in the Angular Rich Text Editor to update the editor value with a keydown event handler.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Implement Ctrl+S Shortcut in Angular Rich Text Editor

To implement this functionality, you need to bind a `keydown` event to the Rich Text Editor content and capture the <kbd>Ctrl</kbd> + <kbd>S</kbd> key press using the keyCode.

In the `keydown` event handler, the `updateValue` method is called to update the [value](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#value) property, and then you can save the content to the required database using the same.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/save-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/save-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/how-to/save-cs1" %}