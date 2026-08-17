---
layout: post
title: XSS Prevention in React Block Editor | Syncfusion
description: Learn how to enable XSS prevention in the React Block Editor to sanitize script tags and unsafe attributes from content.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# XSS Prevention in React Block Editor

The Block Editor lets users edit content securely by preventing cross-site scripting (XSS) attacks. By default, it provides built-in support to remove elements and attributes from the editor content that could be used to execute a script, such as `<script>` tags and event handler attributes like `onmouseover`.

## Prerequisites

Before running the sample below, make sure you have:

* A working React project with the Block Editor package installed. Refer to the [Getting Started](https://ej2.syncfusion.com/react/documentation/block-editor/getting-started) guide if you haven't set up the Block Editor yet.
* The required Block Editor styles and component imported into your project.

## Enabling XSS prevention

The [enableHtmlSanitizer](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#enablehtmlsanitizer) property controls XSS prevention and is `true` (enabled) by default. When active, the editor automatically removes disallowed elements, such as `<script>`, and disallowed attributes, such as `onmouseover`, from the pasted or entered content.

```jsx
<BlockEditorComponent enableHtmlSanitizer={true} />
```

> **Note:** Disabling `enableHtmlSanitizer` (setting it to `false`) removes this protection and can expose your application to XSS attacks. Only disable it if you sanitize content through another trusted mechanism.

The following example shows XSS prevention removing a `<script>` tag and an `onmouseover` attribute from the content:

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/enable-html-sanitizer/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/enable-html-sanitizer/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/enable-html-sanitizer" %}
