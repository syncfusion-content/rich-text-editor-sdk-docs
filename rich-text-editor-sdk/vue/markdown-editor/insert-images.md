---
layout: post
title: Insert Images in Vuet Markdown Editor | Syncfusion
description: Learn how to insert images in the Vuet Markdown Editor using the Insert Image toolbar option. Add images from online URLs directly into your Markdown content.
platform: rich-text-editor-sdk
control: Markdown Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Insert Images in Vuet Markdown Editor

The Syncfusion Vue Markdown Editor allows users to insert images using the toolbar. This feature enables embedding images from online sources into the editor content.

## Steps to Insert an Image  

Follow these steps to add an image in the Markdown editor:

1. Click the **Insert Image** icon in the toolbar.
2. Enter the **URL** of the image from an online source.
3. Click the **Insert** button in the image dialog.

The image will be added to the editor content at the cursor position.

The following example demonstrates how to enable image insertion in the Syncfusion Vue Markdown Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-image-cs1/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-image-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/markdown-editor/markdown-image-cs1" %}