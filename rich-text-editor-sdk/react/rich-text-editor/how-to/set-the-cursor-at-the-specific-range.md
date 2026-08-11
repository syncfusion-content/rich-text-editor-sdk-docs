---
layout: post
title: Setting Cursor at Specific Range in Editor | Syncfusion
description: Learn here all about Set the cursor at the specific range in Syncfusion React Rich text editor component of Syncfusion Essential JS 2 and more.
control: Set the cursor at the specific range 
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Setting Cursor at Specific Range in Editor in React Rich Text Editor Component

This can be achieved by using `setRange` method in the Rich Text Editor using `NodeSelection` instance. In this below sample, you have passed the text node (specific location in Rich Text Editor content) in `setStart` method and passed the range in `setRange` method of Rich Text Editor.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs22/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs22/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs22" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs23/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs23/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/basic-cs23" %}
