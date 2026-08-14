---
layout: post
title: Read-Only Mode in TypeScript Block Editor | Syncfusion
description: Learn how to enable read-only mode in the TypeScript Block Editor to display content without allowing users to edit it.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Read-Only Mode in TypeScript Block Editor

The Block Editor provides a read-only mode to control user interaction with the editor. This feature allows users to view formatted content without enabling editing capabilities, useful for displaying content without modifications or temporarily restricting user input.

## Read-only mode

Read-only mode prevents users from editing content in the Block Editor while preserving the ability to view formatted text with its original styling intact. This is particularly useful when you want to display content without permitting modifications.

To enable read-only mode, set the [readonly](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#readonly) property to `true`. Users can still view and select content, but cannot make edits.

The following example demonstrates how to enable read-only mode in the Block Editor:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/readonly/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/readonly/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/readonly" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/readonly/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/readonly/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/readonly" %}
{% endif %}
