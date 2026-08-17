---
layout: post
title: Paste Cleanup in React Block Editor | Syncfusion
description: Learn how to configure paste cleanup in React Block Editor to control pasted content, preserve or remove formatting, and paste content as plain text.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Paste Cleanup in React Block Editor

The Block Editor component provides robust paste clean-up functionalities to ensure that pasted content integrates seamlessly and maintains styling and structural consistency. This feature helps remove unwanted formatting, scripts, and elements copied from external sources like web pages or word processors.

You can configure the paste behavior using the [pasteCleanupSettings](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#pastecleanupsettings) property, which allows you to define how content is handled when pasted into the editor.

## Configuring allowed styles

The [allowedStyles](https://ej2.syncfusion.com/react/documentation/api/blockeditor/pasteCleanupSettingsModel#allowedstyles) property lets you define which CSS styles are permitted in pasted content. Any style not in this list is stripped out, ensuring that only desired visual attributes are preserved.

By default, the following styles are allowed:

- `font-weight` — Bold/normal text weight
- `font-style` — Italic/oblique text style
- `text-decoration` — Underline, overline, line-through
- `text-transform` — Uppercase, lowercase, capitalize transformations

The following example retains only `font-weight` and `font-style` styles. All other inline styles will be removed.

{% raw %}
```typescript
<BlockEditorComponent pasteCleanupSettings={{ allowedStyles: ['font-weight', 'font-style'] }}></BlockEditorComponent>
```
{% endraw %}

## Setting denied tags

The [deniedTags](https://ej2.syncfusion.com/react/documentation/api/blockeditor/pasteCleanupSettingsModel#deniedtags) property specifies a list of HTML tags to be removed from pasted content. For security, certain tags are automatically removed by default: `<script>`, `<iframe>`, `<form>`, and event handlers. By specifying additional `deniedTags`, you can extend this default list to remove other potentially problematic elements.

The following example adds `<script>` and `<iframe>` to the denied tags (in addition to the automatically blocked tags), preventing unwanted behavior or security issues.

{% raw %}
```typescript
<BlockEditorComponent pasteCleanupSettings={{ deniedTags: ['script', 'iframe'] }}></BlockEditorComponent>
```
{% endraw %}

The following example demonstrates the usage of paste settings that allows only specific styles and also removes the specific tags from the pasted content.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/paste-cleanup/allowedstyle/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/paste-cleanup/allowedstyle/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/paste-cleanup/allowedstyle" %}

## Disable Keep format

By default, the editor retains the formatting of pasted content (e.g., bold, italics, links). You can disable this by setting the [keepFormat](https://ej2.syncfusion.com/react/documentation/api/blockeditor/pasteCleanupSettingsModel#keepformat) property to `false`. When disabled, the editor primarily pastes content as plain text, regardless of the `allowedStyles` configuration.

{% raw %}
```typescript
<BlockEditorComponent pasteCleanupSettings={{ keepFormat: false }}></BlockEditorComponent>
```
{% endraw %}

## Allowing plain text

To paste content as plain text, stripping all HTML tags and inline styles, set the [plainText](https://ej2.syncfusion.com/react/documentation/api/blockeditor/pasteCleanupSettingsModel#plaintext) property to `true` in [pasteCleanupSettings](https://ej2.syncfusion.com/react/documentation/api/blockeditor/pastecleanupsettings). This ensures that only raw text is inserted, which is ideal for maintaining strict content consistency. By default, this property is `false`.

{% raw %}
```typescript
<BlockEditorComponent pasteCleanupSettings={{ plainText: true }}></BlockEditorComponent>
```
{% endraw %}

The following example demonstrates the usage of paste settings that disables the keep format and allows plain text.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/paste-cleanup/plaintext/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/paste-cleanup/plaintext/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/paste-cleanup/plaintext" %}

## Events

The Block Editor provides events to monitor and interact with the paste action.

|Name|Args|Description|
|---|---|---|
|[beforePasteCleanup](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#beforepastecleanup)|BeforePasteCleanupEventArgs|Triggers before the content is pasted into the editor.|
|[afterPasteCleanup](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#afterpastecleanup)|AfterPasteCleanupEventArgs|Triggers after the content is pasted into the editor.|

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
