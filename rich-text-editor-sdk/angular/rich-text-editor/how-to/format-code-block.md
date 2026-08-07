---
layout: post
title: Add Code Block Formatting in Angular Rich Text Editor | Syncfusion
description: Learn how to add code block formatting in the Angular Rich Text Editor using the InsertCode toolbar button to apply and remove code styles.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Add Code Block Formatting in Angular Rich Text Editor

You can configure code block formatting as a separate toolbar button by adding the **InsertCode** keyword within the [`toolbarSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/toolbarsettings#toolbarsettings) items property.

The InsertCode button has a toggle state to apply code block formatting to the editor and remove code block formatting from the editor.

The following sample demonstrates how to config the InsertCode button in toolbar and set the background color to “pre” tag for highlighting the code block.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/format-code-block-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/format-code-block-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/how-to/format-code-block-cs1" %}
