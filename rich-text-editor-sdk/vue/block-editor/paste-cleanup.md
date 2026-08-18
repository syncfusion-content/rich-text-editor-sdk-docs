---
layout: post
title: Paste Clean-up in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Paste Clean-up with Syncfusion Essential Vue Block Editor component, its elements, and more details.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Paste Clean-up in Vue Block Editor component

The Block Editor component provides robust paste clean-up functionalities to ensure that pasted content integrates seamlessly and maintains styling and structural consistency. This feature helps remove unwanted formatting, scripts, and elements copied from external sources like web pages or word processors.

You can configure the paste behavior using the [pasteCleanupSettings](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#pastecleanupsettings) property, which allows you to define how content is handled when pasted into the editor.

## Configuring allowed styles

The [allowedStyles](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/pastecleanupsettingsmodel#allowedstyles) property lets you define which CSS styles are permitted in pasted content. Any style not in this list is stripped out, ensuring that only desired visual attributes are preserved.

By default, the following styles are allowed: `font-weight`, `font-style`, `text-decoration`, and `text-transform`.

The example below shows how only `font-weight` and `font-style` styles will be retained from the pasted content. All other inline styles will be removed.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/paste-cleanup/allowedstyle/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/paste-cleanup/allowedstyle/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/paste-cleanup/allowedstyle" %}

## Setting denied tags

The [deniedTags](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/pastecleanupsettingsmodel#deniedtags) property specifies a list of HTML tags to be removed from pasted content. This is useful for stripping potentially problematic elements like `<script>` or `<iframe>` tags. By default, this property is an empty array, so no tags are removed.

The example below removes any `<script>` or `<iframe>` tags found in the pasted content, preventing unwanted behavior or styling issues.

```typescript
pasteCleanupSettings: {
    deniedTags: ['script', 'iframe']
}
```

## Disable Keep format

By default, the editor retains the formatting of pasted content (e.g., bold, italics, links). You can disable this by setting the [keepFormat](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/pastecleanupsettingsmodel#keepformat) property to `false`. When disabled, the editor primarily pastes content as plain text, regardless of the `allowedStyles` configuration.

## Allowing plain text

To paste content as plain text, stripping all HTML tags and inline styles, set the [plainText](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/pastecleanupsettingsmodel#plaintext) property to `true` in [pasteCleanupSettings](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#pastecleanupsettings). This ensures that only raw text is inserted, which is ideal for maintaining strict content consistency. By default, this property is `false`.

The example below demonstrates the usage of paste settings that disables the keep format and allows plain text.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/paste-cleanup/plaintext/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/paste-cleanup/plaintext/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/paste-cleanup/plaintext" %}

### Events

The Block Editor provides events to monitor and interact with the paste action.

|Name|Args|Description|
|---|---|---|
|[beforePasteCleanup](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#beforepastecleanup)|BeforePasteCleanupEventArgs|Triggers before the content is pasted into the editor.|
|[afterPasteCleanup](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#afterpastecleanup)|AfterPasteCleanupEventArgs|Triggers after the content is pasted into the editor.|

The snippet below demonstrates how to configure the above events in the editor.

```html
<template>
  <ejs-blockeditor @beforePasteCleanup="onBeforePasteCleanup" @afterPasteCleanup="onAfterPasteCleanup"></ejs-blockeditor>
</template>

<script>
import { BlockEditorComponent } from '@syncfusion/ej2-vue-blockeditor';

export default {
  components: { 'ejs-blockeditor': BlockEditorComponent },
  methods: {
    onBeforePasteCleanup(args) {
      // Inspect or modify args; return args to apply changes
    },
    onAfterPasteCleanup(args) {
      // Run post-processing after the paste is applied
    }
  }
};
</script>
```
