---
layout: post
title: XHTML Validation in JavaScript Rich Text Editor | Syncfusion
description: Learn how to validate XHTML content and prevent XSS attacks in the JavaScript Rich Text Editor using built-in sanitization and custom filtering.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# XHTML Validation in JavaScript Rich Text Editor

The editor includes an [`enableXhtml`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/richTextEditor#enableXhtml) property (default: `false`) that allows for continuous validation of the Rich Text Editor's source content against the XHTML standard. When content is entered or modified in the editor, this feature ensures ongoing compliance by automatically removing invalid elements and attributes.

The editor checks the following rules during validation:

## Validating attributes

* **Case Sensitivity**: All attributes must be in lowercase.
* **Quotation Marks**: Proper use of quotation marks around attribute values is enforced.
* **Validity**: Only valid attributes for corresponding HTML elements are allowed.
* **Required Attributes**: All required attributes for HTML elements must be included.

## Validating HTML elements

* **Case Sensitivity**: All HTML tags must be in lowercase.
* **Proper Closing**: All opening tags must have corresponding closing tags.
* **Element Validity**: Only valid HTML elements are permitted.
* **Nesting**: Elements must be properly nested to maintain structure.
* **Root Element**: The content must have a single root element.
* **Element Hierarchy**: Inline elements cannot contain block elements.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xhtml-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xhtml-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xhtml-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xhtml-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xhtml-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xhtml-cs1" %}
{% endif %}

## Cross-Site scripting (XSS)

The Rich Text Editor helps secure your content by preventing cross-site scripting (XSS) attacks. By default, it provides built-in support to remove elements from editor content that could be used to execute malicious scripts. This process runs whenever content is entered, pasted, or programmatically updated.

### Enable XSS validation

The [enableHtmlSanitize](https://ej2.syncfusion.com/documentation/api/rich-text-editor/richTextEditor#enableHtmlSanitizer) property determines whether XSS prevention is active. It's set to `true` by default.

In the following sample, we removed the `script` tag and `onmouseover` attribute from the content of the Rich Text Editor. 

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-cs1" %}
{% endif %}

> The XSS prevention feature is only applicable when the [editorMode](https://ej2.syncfusion.com/documentation/api/rich-text-editor/richTextEditor#editorMode) is set to `EditorMode.HTML` (TypeScript) or `'HTML'` (JavaScript).

### Custom cross-site scripting prevention

For more precise control over XSS prevention, you can implement custom filtering logic using the [beforeSanitizeHtml](https://ej2.syncfusion.com/documentation/api/rich-text-editor/richTextEditor#beforeSanitizeHtml) event.

### Implementing custom cross-site scripting and filtering in Rich Text Editor

1. Use the [beforeSanitizeHtml](https://ej2.syncfusion.com/documentation/api/rich-text-editor/richTextEditor#beforeSanitizeHtml) event to define custom filtering rules.
2. Utilize the `helper` function from the event argument to apply your custom filters.
3. Set the `cancel` argument to `true` if you want to override the built-in XSS prevention entirely.

The following sample demonstrates how to filter the `script` tag by value.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-event-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-event-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-event-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-event-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/xss-attack-event-cs1" %}
{% endif %}

You can also filter out the [`e.selectors.tags`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/sanitizeSelectors#tags) and [`e.selectors.attributes`](https://ej2.syncfusion.com/documentation/api/rich-text-editor/sanitizeSelectors#attributes) in the [beforeSanitizeHtml](https://ej2.syncfusion.com/documentation/api/rich-text-editor/richTextEditor#beforeSanitizeHtml) event to control which HTML tags and attributes are allowed to appear.

For instance, to allow or block `<iframe>`, manipulate the `e.selectors.tags` property inside the event. This approach lets you safely include or exclude iframes while preventing potential XSS vulnerabilities.

The following sample demonstrates how to filter the `iframe` tag.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/prevent-cross-site-scripting-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/prevent-cross-site-scripting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/prevent-cross-site-scripting-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/prevent-cross-site-scripting-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/prevent-cross-site-scripting-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/rich-text-editor/prevent-cross-site-scripting-cs1" %}
{% endif %}
