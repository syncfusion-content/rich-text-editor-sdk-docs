---
layout: post
title: File size in TypeScript Rich text editor | Syncfusion
description: Learn how to validate and restrict image upload file sizes in the TypeScript Rich Text Editor using the imageUploading event.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# File size in TypeScript Rich text editor

By using the Rich Text Editor's `imageUploading` event, you can get the image size before uploading and restrict the image from being uploaded when the given image size is greater than the allowed size.

In the following example, we have validated the image size before uploading and determined whether the image has been uploaded or not.

{% if page.publishingplatform == "typescript" %}

 {% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-check-file-size-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-check-file-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-check-file-size-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-check-file-size-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-check-file-size-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/how-to-check-file-size-cs1" %}
{% endif %}
