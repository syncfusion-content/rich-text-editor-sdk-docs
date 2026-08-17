---
layout: post
title: Validate Image Size in React Rich Text Editor | Syncfusion
description: Learn how to validate image dimensions before uploading in the React Rich Text Editor and restrict images that exceed the allowed size.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Validate Image Size Before Upload in React Rich Text Editor

By using the Rich Text Editor's `imageUploading` event, you can get the image size before uploading and restrict the image from being uploaded when the given image size is greater than the allowed size.

In the following example, we have validated the image size before uploading and determined whether the image has been uploaded or not.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/how-to-check-image-size-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/how-to-check-image-size-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/how-to-check-image-size-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/how-to-check-image-size-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/how-to-check-image-size-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/how-to-check-image-size-cs2" %}