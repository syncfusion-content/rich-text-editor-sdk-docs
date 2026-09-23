---
layout: post
title: Move Cursor to End in Angular Rich Text Editor | Syncfusion
description: Learn how to move the cursor to the end of content in the Angular Rich Text Editor using the focus method and selection handling.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Move Cursor to End in Angular Rich Text Editor

To position the cursor at the end of the content in the Rich Text Editor, you need to ensure the editor is focused and then manipulate the selection to place the cursor at the end. This involves focusing the editor using the `focus` method and then using the `Range` and `Selection` objects to collapse the range at the end of the content. Adding a slight delay (using `setTimeout`) ensures that the focus is properly set before manipulating the cursor position.

The following example illustrates how to programmatically focus the cursor at the end of the Rich Text Editor content.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/cursor-at-end-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/cursor-at-end-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/how-to/cursor-at-end-cs1" %}