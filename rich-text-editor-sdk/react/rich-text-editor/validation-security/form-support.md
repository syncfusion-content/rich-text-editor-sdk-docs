---
layout: post
title: Form Support in React Rich Text Editor | Syncfusion
description: Learn how to integrate the React Rich Text Editor with HTML forms, capture editor content, and validate user input in web applications.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Form Support in React Rich Text Editor

The following sample demonstrates how to get the Rich Text Editor value in button click.

Render the Rich Text Editor in a form.

```ts
  <form id="myForm" class="form-vertical">
    <div class="form-group">
      <textarea id="defaultRTE" name="defaultRTE" required maxlength="100" minlength="20" data-msg-containerid="dateError"></textarea>
      <div id="dateError"></div>
    </div>
    <div class="form-btn-section">
      <button id="validateSubmit" class="sample-btn e-control e-btn" type="submit" data-ripple="true">Submit</button>
      <button id="resetbtn" class="sample-btn e-control e-btn" type="reset" data-ripple="true">Reset</button>
    </div>
  </form>
```

Upon submitting the form, the getValue method will be triggered. Through the FormData class, get the Rich Text Editor value.

`[Class-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/form-cs1/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/form-cs1/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/form-cs1" %}

`[Functional-component]`

{% tabs %}
{% highlight js tabtitle="app.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/form-cs2/app/App.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="app.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/rich-text-editor/form-cs2/app/App.tsx %}
{% endhighlight %}
{% endtabs %}

 {% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/rich-text-editor/form-cs2" %}