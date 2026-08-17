---
layout: post
title: Read-Only Mode in JavaScript Block Editor | Syncfusion
description: Learn how to enable read-only mode in the JavaScript Block Editor to display content without allowing users to edit it.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Read-Only Mode in JavaScript Block Editor

The Syncfusion Block Editor provides a read-only mode to control user interaction with the editor. This feature is useful when you want to display formatted content without permitting modifications, or to temporarily restrict input.

## Read-only mode

To enable read-only mode, set the [readOnly](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#readonly) property to `true`. The content remains viewable with its formatting intact, but editing is restricted.

```typescript
const editor = new BlockEditor({
    readOnly: true
});
```

The following example demonstrates how to enable read-only mode in the Block Editor:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/readonly/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/readonly/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/readonly" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/readonly/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/readonly/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/readonly" %}
{% endif %}
