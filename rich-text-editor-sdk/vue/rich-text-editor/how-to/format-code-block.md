---
layout: post
title: Add Code Block Formatting in Vue Rich Text Editor | Syncfusion
description: Learn how to add code block formatting in the Vue Rich Text Editor using the InsertCode toolbar button to apply and remove code styles.
control: Rich Text Editor 
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Add Code Block Formatting in Vue Rich Text Editor

You can configure code block formatting as a separate toolbar button by adding the **InsertCode** keyword within the [`toolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/rich-text-editor/toolbarsettings#toolbarsettings) items property.

The **InsertCode** button has a toggle state to apply code block formatting to the editor and remove code block formatting from the editor.

The following sample demonstrates how to configure the **InsertCode** button in the toolbar and set the background color for the `<pre>` tag to highlight the code block.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs9/app-composition.vue %}
{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}
{% include code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs9/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/vue/rich-text-editor/toolbar-cs9" %}
