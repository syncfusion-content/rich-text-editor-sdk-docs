---
layout: post
title: Add Google Fonts in Angular Rich Text Editor | Syncfusion
description: Learn how to add Google web fonts to the Angular Rich Text Editor by adding font links and listing the font names in the fontFamily property.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Add Google Fonts in Angular Rich Text Editor

To use web fonts in RTE, it is not needed for the web fonts to be present in local machine. To add the web fonts to RTE, you need to refer the web font links and add the font names in the [`fontFamily`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#fontfamily) property.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/cursor-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/how-to/cursor-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/how-to/cursor-cs1" %}

The below font style links are referred in the page.

```typescript

<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto">
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Great+Vibes">

```

> In the above sample, you can see that you have added two Google web fonts (`Roboto` and `Great vibes`) to `RTE`.