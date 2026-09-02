---
layout: post
title: Clipboard Cleanup in Angular Rich Text Editor | Syncfusion
description: Learn how to clean and customize clipboard content in the Angular Rich Text Editor by removing unwanted styles while preserving formatting.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Clipboard Cleanup in Angular Rich Text Editor

The Rich Text Editor supports automatic cleanup of clipboard content during copy (`Ctrl + C`) and cut (`Ctrl + X`) operations. When this feature is enabled, unwanted inline styles are automatically removed from the clipboard content while preserving important structural elements such as tables, lists, and images. You can enable this behavior using the [`enableClipboardCleanup`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#enableClipboardCleanup) property.

> Rich Text Editor features are segregated into individual feature-wise modules. To enable clipboard cleanup, include the `ClipboardCleanupService` in the providers section.

When `enableClipboardCleanup` is set to `true`, copy and cut operations are intercepted to remove unwanted inline styles. When set to `false` the browser’s default copy and cut behavior applies.

> For a cleaner editing experience, [`enableClipboardCleanup`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#enableClipboardCleanup) is `true` by default.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/clipboard-cleanup-default/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/clipboard-cleanup-default/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/clipboard-cleanup-default" %}

## Customize copied/cut content

You can use the [`beforeClipboardWrite`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#beforeClipboardWrite) event, which fires before content is written to the clipboard during copy or cut operations. This event lets you modify the HTML and plain-text representations of the content and also determine whether the action is a copy or a cut.

In this example, the `beforeClipboardWrite` event is used to customize the selected content only during a copy operation, while the cut operation remains unaffected. To observe this behavior, try copying any text within the Rich Text Editor.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/clipboard-cleanup/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/clipboard-cleanup/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/clipboard-cleanup" %}

## Best practices and troubleshooting

### Best practices

- Always include `ClipboardCleanupService` in your application. It is the primary way to prevent style explosion.
- Combine with the Paste Cleanup module for stricter incoming paste handling.
- Use `beforeClipboardWrite` sparingly; heavy processing can slightly delay `Ctrl+C`.

### Common issues

- "Copied content still has inline styles": confirm `ClipboardCleanupService` is in the component's `providers` array.
- "Event not firing": make sure you are using the correct event name `beforeClipboardWrite` (camelCase in Angular).
