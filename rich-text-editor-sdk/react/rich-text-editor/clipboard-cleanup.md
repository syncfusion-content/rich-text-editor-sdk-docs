---
layout: post
title: Clipboard Cleanup in React Rich Text Editor | Syncfusion
description: Learn how to clean and customize clipboard content in the React Rich Text Editor by removing unwanted styles and preserving formatting during copy and cut operations.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Clipboard Cleanup in React Rich Text Editor

The Rich Text Editor supports automatic cleanup of clipboard content during copy (`Ctrl + C`) and cut (`Ctrl + X`) operations. When this feature is enabled, unwanted inline styles are automatically removed from the clipboard content while preserving important structural elements such as tables, lists, and images. You can enable this behavior using the [enableClipboardCleanup](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#enableClipboardCleanup) property.

> To use ClipboardCleanup feature, inject link module using the `<Inject services{[ClipboardCleanup]} />`.

When `enableClipboardCleanup` is set to `true`, copy and cut operations are intercepted to remove unwanted inline styles. When set to `false` the browser’s default copy and cut behavior applies.

> For a cleaner editing experience, `enableClipboardCleanup` is `true` by default.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-cs2" %}

## Customizing Copied/Cut Content

You can use the [beforeClipboardWrite](https://ej2.syncfusion.com/react/documentation/api/rich-text-editor/index-default#beforeClipboardWrite) event, which fires before content is written to the clipboard during copy or cut operations. This event lets you to modify the HTML and plain-text representations of the content and also determine whether the action is a copy or a cut.

In this example, the `beforeClipboardWrite` event is used to customize the selected content only during a copy operation, while the cut operation remains unaffected. To observe this behavior, try copying any text within the Rich Text Editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-customize-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-customize-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-customize-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-customize-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-customize-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/clipboard-cleanup-customize-cs2" %}

## Best Practices & Troubleshooting

### Best Practices

- Always include `ClipboardCleanup` in production application - it’s the #1 way to prevent style explosion.
- Combine with Paste Cleanup module for even stricter incoming paste handling.
- Use `beforeClipboardWrite` sparingly — heavy processing can slightly delay `Ctrl+C`.

### Common Issues

- “Copied content still has inline styles” → Confirm `ClipboardCleanup` is in providers.
- “Event not firing” → Make sure you’re using the correct event name `beforeClipboardWrite` (camelCase in React).
