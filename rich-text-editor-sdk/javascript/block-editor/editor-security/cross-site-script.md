---
layout: post
title: XSS Prevention in JavaScript Block Editor | Syncfusion
description: Learn how to enable XSS prevention in the JavaScript Block Editor to sanitize script tags and unsafe attributes from content.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# XSS Prevention in JavaScript Block Editor

The Block Editor helps prevent cross-site scripting (XSS). It sanitizes content to remove XSS vectors by default. The editor removes dangerous elements and attributes that could execute scripts.

## Enabling XSS prevention
The [enableHtmlSanitizer](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#enablehtmlsanitizer), enabled by default, activates XSS prevention. When active, the editor automatically removes elements like `<script>` and attributes like `onmouseover` from the content.

```typescript
const editor = new BlockEditor({
    enableHtmlSanitizer: true
});
```

> **Note:** Disabling `enableHtmlSanitizer` (setting it to `false`) removes this protection and can expose your application to XSS attacks. Only disable it if you sanitize content through another trusted mechanism.

The following example shows XSS prevention removing a `<script>` tag and `onmouseover` attribute:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/enable-html-sanitizer/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/enable-html-sanitizer/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/enable-html-sanitizer" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/enable-html-sanitizer/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/enable-html-sanitizer/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/enable-html-sanitizer" %}
{% endif %}
