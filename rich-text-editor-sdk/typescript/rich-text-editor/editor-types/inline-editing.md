---
layout: post
title: Inline Editing in TypeScript Rich Text Editor | Syncfusion
description: Learn how to enable inline editing in the TypeScript Rich Text Editor to edit content directly in place with an inline toolbar for quick formatting.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Inline Editing in TypeScript Rich Text Editor

Inline editing is a feature of the Rich Text Editor that allows users to edit content directly within the editor where it is displayed. Unlike traditional editing interfaces where the editor toolbar is in a separate area at the top or bottom, inline editing offers a seamless, on-the-spot editing experience. You can click on the text or select the text you wish to edit and make changes immediately.

Enable inline editing in the Rich Text Editor by using the [inlineMode](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#inlinemode) with the `enable` property as `true`. This configuration activates the feature, allowing direct content editing within its displayed context.

## Edit on select

The inline toolbar in the Rich Text Editor is triggered based on the [onSelection](https://ej2.syncfusion.com/documentation/api/rich-text-editor/inlinemodemodel#onselection) option within the inlineMode settings. 

When `onSelection` is set to `true`, the toolbar appears only when text is selected. If `onSelection` is set to `false`, the inline toolbar appears when editable text is focused, regardless of selection.

This feature enhances the inline editing experience by providing immediate access to formatting options.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/inline-cs1" %}
{% endif %}