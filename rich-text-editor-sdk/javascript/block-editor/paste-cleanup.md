---
layout: post
title: Paste Clean-up in JavaScript Block Editor control | Syncfusion
description: Checkout and learn about Paste Clean-up with JavaScript Block Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Paste Clean-up in JavaScript Block Editor control

The Block Editor control provides robust paste clean-up functionalities to ensure that pasted content integrates seamlessly and maintains styling and structural consistency. This feature helps remove unwanted formatting, scripts, and elements copied from external sources like web pages or word processors.

You can configure the paste behavior using the [pasteCleanupSettings](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#pastecleanupsettings) property, which allows you to define how content is handled when pasted into the editor.

## Configuring allowed styles

The [allowedStyles](https://ej2.syncfusion.com/documentation/api/blockeditor/pastecleanupsettingsmodel#allowedstyles) property lets you define which CSS styles are permitted in pasted content. Any style not in this list is stripped out, ensuring that only desired visual attributes are preserved.

By default, the following styles are allowed:

['font-weight', 'font-style', 'text-decoration', 'text-transform'].

In the below example, only `font-weight` and `font-style` styles will be retained from the pasted content. All other inline styles will be removed.

```typescript
const editor = new BlockEditor({
    pasteCleanupSettings: {
        allowedStyles: ['font-weight', 'font-style']
    }
});
```

## Setting denied tags

The [deniedTags](https://ej2.syncfusion.com/documentation/api/blockeditor/pastecleanupsettingsmodel#deniedtags) property specifies a list of HTML tags to be removed from pasted content. This is useful for stripping potentially problematic elements like `<script>` or `<iframe>` tags. By default, this property is an empty array, so no tags are removed.

In the below example, any `<script>` or `<iframe>` tags found in the pasted content will be removed, preventing unwanted behavior or styling issues.

```typescript
const editor = new BlockEditor({
    pasteCleanupSettings: {
        deniedTags: ['script', 'iframe']
    }
});
```

Below example demonstrates the usage of paste settings that allows only specific styles and also removes the specific tags from the pasted content.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/allowedstyle/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/allowedstyle/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/allowedstyle" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/allowedstyle/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/allowedstyle/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/allowedstyle" %}
{% endif %}

## Disable Keep format

By default, the editor retains the formatting of pasted content (e.g., bold, italics, links). You can disable this by setting the [keepFormat](https://ej2.syncfusion.com/documentation/api/blockeditor/pastecleanupsettingsmodel#keepformat) property to `false`. When disabled, the editor primarily pastes content as plain text, regardless of the `allowedStyles` configuration.

```typescript
const editor = new BlockEditor({
    pasteCleanupSettings: {
        keepFormat: false
    }
});
```

## Allowing plain text

To paste content as plain text, stripping all HTML tags and inline styles, set the [plainText](https://ej2.syncfusion.com/documentation/api/blockeditor/pastecleanupsettingsmodel#plaintext) property to `true` in [pasteCleanupSettings](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#pastesettings). This ensures that only raw text is inserted, which is ideal for maintaining strict content consistency. By default, this property is `false`.

```typescript
const editor = new BlockEditor({
    pasteCleanupSettings: {
        plainText: true
    }
});
```

Below example demonstrates the usage of paste settings that disables the keep format and allows plain text.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/plaintext/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/plaintext/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/plaintext" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/plaintext/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/plaintext/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/paste-cleanup/plaintext" %}
{% endif %}

### Events

The Block Editor provides events to monitor and interact with the paste action.

|Name|Args|Description|
|---|---|---|
|[beforePasteCleanup](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#beforepastecleanup)|BeforePasteCleanupEventArgs|Triggers before the content is pasted into the editor.|
|[afterPasteCleanup](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#afterpastecleanup)|AfterPasteCleanupEventArgs|Triggers after the content is pasted into the editor.|

Below snippet demonstrates how to configure above events in the editor.

```typescript
const editor = new BlockEditor({
    beforePasteCleanup: onBeforePasteCleanup()
});
```

```typescript
const editor = new BlockEditor({
    afterPasteCleanup: onAfterPasteCleanup()
});
```
