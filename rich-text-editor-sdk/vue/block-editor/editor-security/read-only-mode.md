---
layout: post
title: Controlled Access in Vue Block Editor Component | Syncfusion
description: Checkout and learn about Controlling Editor Access with Vue Block Editor component of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Controlling Editor Access in Vue Block Editor component

The Block Editor provides a read-only mode to control user interaction with the editor. This feature is useful when you want to display formatted content without permitting modifications, or to temporarily restrict input.

## Read-only mode

To enable read-only mode, set the [readOnly](https://ej2.syncfusion.com/vue/documentation/api/blockeditor/index-default#readonly) property to `true`. The content remains viewable with its formatting intact, but editing is restricted.

```typescript
readOnly: true
```

The following example demonstrates how to enable read-only mode in the Block Editor:

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/readonly/app-composition.vue %}
{% endhighlight %}

{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/block-editor/readonly/app.vue %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/block-editor/readonly" %}
        
