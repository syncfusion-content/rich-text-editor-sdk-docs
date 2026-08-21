---
layout: post
title: Placeholder Text in Vue Rich Text Editor | Syncfusion
description: Learn how to display and customize placeholder text in the Vue Rich Text Editor using the placeholder property and CSS styling.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Placeholder Text in Vue Rich Text Editor

Specifies the placeholder for the Rich Text Editor's content, which is displayed when the editor's content area is empty, through the [placeholder](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/index-default#placeholder) property.

You can customize the appearance of the placeholder text by targeting the `e-rte-placeholder` class in your CSS. This allows you to modify properties such as font family, color, and other styles.

```css

.e-richtexteditor .e-rte-placeholder {
    font-family: monospace;
}

```

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs15/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs15/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/getting-started-cs15" %}

## See Also

