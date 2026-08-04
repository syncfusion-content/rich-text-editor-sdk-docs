---
layout: post
title: Check Image Size in Angular Rich Text Editor | Syncfusion
description: Learn how to check the image size in the Angular Rich Text Editor using the imageUploading event to restrict uploads that exceed a limit.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Check Image Size in Angular Rich Text Editor

By using the Rich Text Editor's [imageUploading](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#imageuploading) event, you can get the image size before uploading and restrict the upload if the image size is greater than the allowed size.

In the following example, we validate the image size before uploading and determine whether the image is uploaded or not.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/check-image-size-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/check-image-size-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/how-to/check-image-size-cs1" %}