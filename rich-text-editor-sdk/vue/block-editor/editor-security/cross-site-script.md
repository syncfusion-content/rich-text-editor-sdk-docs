---
layout: post
title: Cross-Site scripting in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Cross-Site scripting with Vue Block Editor component of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Cross-Site scripting(XSS) prevention in Vue Block Editor component

The Block Editor lets users edit content securely by preventing cross-site scripting (XSS) attacks. By default, it provides built-in support to remove elements and attributes from the editor content that could be used to execute a script.

## Enabling XSS prevention

The [enableHtmlSanitizer](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#enablehtmlsanitizer) property controls XSS prevention and is `true` (enabled) by default. When active, the editor automatically removes disallowed elements, such as `<script>`, and disallowed attributes, such as `onmouseover`, from the content.

```typescript
enableHtmlSanitizer: true
```

> **Note:** Disabling `enableHtmlSanitizer` (setting it to `false`) removes this protection and can expose your application to XSS attacks. Only disable it if you sanitize content through another trusted mechanism.

The following example shows XSS prevention removing a `<script>` tag and `onmouseover` attribute:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/enable-html-sanitizer/app-composition.vue %}
{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/enable-html-sanitizer/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/enable-html-sanitizer" %}
        
