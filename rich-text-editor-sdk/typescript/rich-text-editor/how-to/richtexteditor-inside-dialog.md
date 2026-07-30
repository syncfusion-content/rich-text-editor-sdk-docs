---
layout: post
title: Editor inside Dialog in TypeScript Richtexteditor | Syncfusion
description: Learn here all about Rich Text Editor inside Dialog in TypeScript Rich text editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Integrating Rich Text Editor in Dialog control 
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Integrating Rich Text Editor in Dialog Control

When rendering the Rich Text Editor inside a Dialog control, the dialog container and its wrapper elements are initially styled with `display: none`. This styling prevents the editor's toolbar from calculating the proper offset width. As a result, the toolbar may render incorrectly, appearing above the edit area container.

To resolve this issue, we can utilize the [refreshUI](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#refreshui) method of the Rich Text Editor in conjunction with the [open](https://ej2.syncfusion.com/documentation/api/dialog/index-default#open) event. This approach ensures that the Rich Text Editor's UI is properly refreshed and rendered once the Dialog is visible.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-dialog/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-dialog/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-dialog" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-dialog/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-dialog/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/richtexteditor-inside-dialog" %}
{% endif %}