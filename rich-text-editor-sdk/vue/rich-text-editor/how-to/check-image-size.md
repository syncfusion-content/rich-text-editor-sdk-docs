---
layout: post
title: Validate Image Size in Vue Rich Text Editor | Syncfusion
description: Learn how to validate image dimensions before uploading in the Vue Rich Text Editor and restrict images that exceed the allowed size.
control: Rich Text Editor 
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Validate Image Size Before Upload in Vue Rich Text Editor

By using the Rich Text Editor's `imageUploading` event, you can get the image size before uploading and restrict the image from being uploaded when the given image size is greater than the allowed size.

In the following example, we have validated the image size before uploading and determined whether the image has been uploaded or not.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs14/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs14/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs14" %}
