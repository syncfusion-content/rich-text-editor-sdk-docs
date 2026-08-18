---
layout: post
title: Add Google Fonts in Angular Rich Text Editor component | Syncfusion
description: Learn here all about adding Google Fonts in Syncfusion Angular Rich Text Editor component of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Add Google Fonts in Angular Rich Text Editor

To use web fonts in the Rich Text Editor, the web fonts do not need to be present on the local machine. To add the web fonts to the Rich Text Editor, reference the web font links and add the font names in the [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#fontfamily) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/cursor-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/cursor-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/how-to/cursor-cs1" %}

Add the following font style links to the `src/index.html` file to load the Google web fonts.

```html

<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Great+Vibes">

```

> In the above sample, two Google web fonts (`Roboto` and `Great Vibes`) are added to the Rich Text Editor Font Name dropdown.
