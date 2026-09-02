---
layout: post
title: Style Encapsulation in Angular Rich Text Editor | Syncfusion
description: Learn how to isolate or apply application styles in the Angular Rich Text Editor using iframe mode and control CSS styling behavior.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Style Encapsulation in Angular Rich Text Editor

Style encapsulation determines how styles are applied within the Syncfusion Angular Rich Text Editor. This feature helps control whether the component's content inherits global styles from the application or remains isolated.

## Encapsulation modes

Syncfusion's Angular Rich Text Editor offers two rendering modes for controlling style encapsulation:

1. **Encapsulated mode (iframe mode)**
   - When enabled, the Rich Text Editor is rendered inside an `<iframe>`.
   - The application's global CSS rules will not affect the content inside the editor.
   - This ensures that the editor's content remains styled independently.
   - **Usage:** bind `[iframeSettings]="iframeSettings"` and set `iframeSettings = { enable: true }` on the component.

2. **Non-encapsulated mode (default)**
   - The Rich Text Editor is rendered without an `<iframe>`.
   - The application's global CSS will apply to the content inside the editor.
   - This mode allows seamless integration with existing styles.
   - **Usage:** bind `[iframeSettings]="iframeSettings"` and set `iframeSettings = { enable: false }` on the component.

### Default behavior

By default, the Rich Text Editor uses non-encapsulated mode (`iframeSettings = { enable: false }`), allowing the application's styles to affect the editor's content.

Below is a sample implementation of both encapsulated and non-encapsulated modes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/style-encapsulation/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/style-encapsulation/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/style-encapsulation" %}

## See also

* [Iframe Editor](./editor-types/iframe.md)
* [Style and Appearance](./style.md)