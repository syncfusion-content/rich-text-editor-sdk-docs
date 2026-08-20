---
layout: post
title: Clipboard Cleanup in JavaScript Rich Text Editor | Syncfusion
description: Learn how to clean and customize clipboard content in the JavaScript Rich Text Editor by removing unwanted styles while preserving formatting.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Clipboard Cleanup in JavaScript Rich Text Editor

The Rich Text Editor supports automatic cleanup of clipboard content during copy (`Ctrl + C`) and cut (`Ctrl + X`) operations. When this feature is enabled, unwanted inline styles are automatically removed from the clipboard content while preserving important structural elements such as tables, lists, and images. You can enable this behavior using the [enableClipboardCleanup](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#enableclipboardcleanup) property.

When `enableClipboardCleanup` is set to `true`, copy and cut operations are intercepted to remove unwanted inline styles. When set to `false`, the browser's default copy and cut behavior applies.

> For a cleaner editing experience, `enableClipboardCleanup` is `true` by default.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup" %}
{% endif %}

## Customizing Copied/Cut Content

You can use the [beforeClipboardWrite](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#beforeclipboardwrite) event, which fires before content is written to the clipboard during copy or cut operations. This event lets you to modify the HTML and plain-text representations of the content and also determine whether the action is a copy or a cut.

In this example, the `beforeClipboardWrite` event is used to customize the selected content only during a copy operation, while the cut operation remains unaffected. To observe this behavior, try copying any text within the Rich Text Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup-customize/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup-customize/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup-customize" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup-customize/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup-customize/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/clipboard-cleanup-customize" %}
{% endif %}

## Best Practices & Troubleshooting

### Best Practices

- Always include `ClipboardCleanup` in production applications to prevent unwanted style retention.
- Combine with the Paste Cleanup for stricter control over incoming paste content.
- Use `beforeClipboardWrite` judiciously—complex processing can introduce slight delays during copy operations.

### Common Issues

- **Copied content still has inline styles** — Verify that `ClipboardCleanup` is included in the `RichTextEditor.Inject(ClipboardCleanup)` call.
- **Event not firing** — Ensure you are using the correct event name `beforeClipboardWrite` with proper camelCase in your TypeScript/JavaScript code.
