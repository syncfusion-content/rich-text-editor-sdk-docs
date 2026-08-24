---
layout: post
title: Clipboard Cleanup in Vue Rich Text Editor | Syncfusion
description: Learn how to clean and customize clipboard content in the Vue Rich Text Editor by removing unwanted styles while preserving formatting.
control: Rich Text Editor 
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Clipboard Cleanup in Vue Rich Text Editor

The Rich Text Editor supports automatic cleanup of clipboard content during copy (`Ctrl + C`) and cut (`Ctrl + X`) operations. When this feature is enabled, unwanted inline styles are automatically removed from the clipboard content while preserving important structural elements such as tables, lists, and images. You can enable this behavior using the [enableClipboardCleanup](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#enableClipboardCleanup) property.

> To use ClipboardCleanup feature, inject the `ClipboardCleanup` module in the provider section.

When `enableClipboardCleanup` is set to `true`, copy and cut operations are intercepted to remove unwanted inline styles. When set to `false`, the browser's default copy and cut behavior applies.

> For a cleaner editing experience, `enableClipboardCleanup` is `true` by default.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/clipboard-cleanup/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/clipboard-cleanup/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/clipboard-cleanup" %}

## Customizing Copied/Cut Content

You can use the [beforeClipboardWrite](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#beforeClipboardWrite) event, which fires before content is written to the clipboard during copy or cut operations. This event lets you to modify the HTML and plain-text representations of the content and also determine whether the action is a copy or a cut.

In this example, the `beforeClipboardWrite` event is used to customize the selected content only during a copy operation, while the cut operation remains unaffected. To observe this behavior, try copying any text within the Rich Text Editor.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/clipboard-cleanup-customize/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/clipboard-cleanup-customize/app.vue %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/clipboard-cleanup-customize" %}

## Best Practices & Troubleshooting

### Best Practices

- Always include `ClipboardCleanup` in production applications to prevent unwanted style retention.
- Combine with the Paste Cleanup module for stricter control over incoming paste content.
- Use `beforeClipboardWrite` judiciously—complex processing can introduce slight delays during copy operations.

### Common Issues

- **Copied content still has inline styles** — Verify that `ClipboardCleanup` is included in the provider section.
- **Event not firing** — Ensure you are using the correct event name `beforeClipboardWrite` with proper camelCase in Vue components.
