---
layout: post
title: Validate Image Size Before Upload in Angular Rich Text Editor | Syncfusion
description: Learn how to validate image dimensions before uploading in the Angular Rich Text Editor and restrict images that exceed the allowed size.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Validate Image Size Before Upload in Angular Rich Text Editor

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