---
layout: post
title: Style and Appearance in JavaScript Block Editor | Syncfusion
description: Learn how to customize the JavaScript Block Editor appearance by configuring width, height, read-only mode, and custom CSS classes.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Style and Appearance in JavaScript Block Editor

The Block Editor control provides several properties to customize its visual appearance, allowing you to control its dimensions, styling, and behavior.

## Setting width and height

You can specify the width and height for the Block Editor control using the [width](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#width) and [height](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#height) properties.

Accept values in any valid CSS unit. Recommended minimum dimensions: 300px width, 100px height for usability.

```typescript
// Responsive using viewport units
const editor = new BlockEditor({
    width: '100%',
    height: '80vh'
});

// Fixed pixel dimensions
const editor = new BlockEditor({
    width: '800px',
    height: '500px'
});
```

## Setting readonly mode

You can use the [readOnly](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#readonly) property to control whether the editor is in read-only mode. When set to `true`, users cannot edit the content but can still view it.

```typescript
const editor = new BlockEditor({
    readOnly: true
});
```

> See [Read-Only Mode](./editor-security/read-only-mode) for complete behavior details and programmatic toggle examples.

## Customization using CSS Class

You can use the [cssClass](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#cssclass) property to customize the appearance of the Block Editor control.

```typescript
const editor = new BlockEditor({
    width: '600px',
    height: '400px',
    cssClass: 'custom-editor-theme'
});
```

**Example CSS definition:**

```css
.custom-editor-theme {
    background-color: #f5f5f5;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 16px;
    font-family: 'Segoe UI', sans-serif;
}

.custom-editor-theme .e-block {
    margin-bottom: 12px;
}
```

The following example demonstrates the usage of `readOnly` and `cssClass` properties of the Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/appearance/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/appearance/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/appearance/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/appearance" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/appearance/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/appearance/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/appearance/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/appearance" %}
{% endif %}
