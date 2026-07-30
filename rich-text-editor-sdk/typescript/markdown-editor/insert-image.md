---
layout: post
title: Insert Images in TypeScript Markdown Editor control | Syncfusion
description: Learn here all about Insert Images in Syncfusion TypeScript Markdown Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Insert Images
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Insert Images in TypeScript Markdown Editor Control

The Markdown Editor allows users to insert images using the toolbar. This feature enables embedding images from online sources into the editor content.

## Steps to Insert an Image  

Follow these steps to add an image in the Markdown editor:

1. Click the **Insert Image** icon in the toolbar.
2. Enter the **URL** of the image from an online source.
3. Click the **Insert** button in the image dialog.

The image will be added to the editor content at the cursor position.

The following example demonstrates how to enable image insertion in the Markdown Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/markdown-editor/markdown-insert-image/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/markdown-editor/markdown-insert-image/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/markdown-editor/markdown-insert-image" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/markdown-editor/markdown-insert-image/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/markdown-editor/markdown-insert-image/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/markdown-editor/markdown-insert-image" %}
{% endif %}