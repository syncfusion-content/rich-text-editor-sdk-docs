---
layout: post
title: Read-Only Mode in Angular Block Editor | Syncfusion
description: Learn how to enable read-only mode in the Angular Block Editor to display content without allowing users to edit it.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Read-Only Mode in Angular Block Editor

The Syncfusion Angular Block Editor provides read-only modes to control user interaction with the editor. This allows users to view formatted content without editing. This features are useful for displaying content without modifications or temporarily restricting input.

## Read-only mode

Read-only mode prevents users from editing the content in the Block Editor while preserving the ability to view formatted text. This feature is particularly useful when you want to display formatted content without permitting modifications.

To enable the read-only mode, set the [readonly](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#readonly) property to `true`. The content remains viewable with its formatting intact, but editing is restricted.

The following example demonstrates how to enable read-only mode in the Block Editor:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/readonly/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/readonly/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/readonly/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/readonly/src/styles.css %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/readonly" %}
        