---
layout: post
title: Appearance in TypeScript Block Editor control | Syncfusion
description: Checkout and learn about appearance with TypeScript Block Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Appearance in TypeScript Block Editor control

The Block Editor control provides several properties to customize its visual appearance, allowing you to control its dimensions, styling, and behavior.

## Setting width and height

You can specify the width and height for the Block Editor control using the [width](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#width) and [height](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#height) properties.

```typescript
const editor = new BlockEditor({
    width: '100%',
    height: '80vh'
});

// Or with specific pixel values
const editor = new BlockEditor({
    width: '800px',
    height: '500px'
});
```

## Setting readonly mode

You can utilize the [readOnly](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#readonly) property to control whether the editor is in read-only mode. When set to `true`, users cannot edit the content but can still view it.

```typescript
const editor = new BlockEditor({
    readOnly: true
});
```

## Customization using CSS Class

You can use the [cssClass](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#cssclass) property to customize the appearance of the Block Editor control.

```typescript
const editor = new BlockEditor({
    width: '600px',
    height: '400px',
    cssClass: 'custom-editor-theme'
});
```

The following example demonstrates the usage of `readOnly` and `cssClass` properties of the Block Editor.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.html %}
{% endhighlight %}
{% highlight css tabtitle="index.css" %}
{% include code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance/index.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/block-editor/appearance" %}
{% endif %}