---
layout: post
title: Globalization in JavaScript Block Editor control | Syncfusion
description: Checkout and learn about Globalization with JavaScript Block Editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Block Editor
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Globalization in JavaScript Block Editor control

Globalization is the process of designing and developing applications that can adapt to different cultures and languages. The Syncfusion Block Editor control provides support for globalization, enabling it to serve users from diverse linguistic and cultural backgrounds.

## Localization

The Block Editor can be localized for any culture by translating its static text labels. The default locale is `en` (English). The following table lists the default text values for the `en` culture that can be translated.

|KEY|Text|
|----|----|
|`paragraph`|Write something or '/' for commands.|
|`heading1`|Heading 1|
|`heading2`|Heading 2|
|`heading3`|Heading 3|
|`heading4`|Heading 4|
|`collapsibleParagraph`|Collapsible Paragraph|
|`collapsibleHeading1`|Collapsible Heading 1|
|`collapsibleHeading2`|Collapsible Heading 2|
|`collapsibleHeading3`|Collapsible Heading 3|
|`collapsibleHeading4`|Collapsible Heading 4|
|`bulletList`|Add item|
|`numberedList`|Add item|
|`checklist`|Todo|
|`callout`|Write a callout|
|`addIconTooltip`|Click to insert below|
|`dragIconTooltipActionMenu`|Click to open|
|`dragIconTooltip`|(Hold to drag)|
|`insertLink`|Insert Link|
|`linkText`|Text|
|`linkTextPlaceholder`|Link text|
|`linkUrl`|URL|
|`linkUrlPlaceholder`|https://example.com|
|`linkTitle`|Title|
|`linkTitlePlaceholder`|Link title|
|`linkOpenInNewWindow`|Open in new window|
|`linkInsert`|Insert|
|`linkRemove`|Remove|
|`linkCancel`|Cancel|
|`codeCopyTooltip`|Copy code|

The below example shows adding the German culture locale(`de-DE`)

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/localization/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/localization/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/localization" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/localization/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/localization/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/localization" %}
{% endif %}

## RTL

The Block Editor supports Right-to-Left (RTL) mode, which reverses the layout of the control to accommodate languages read from right to left, such as Arabic, Hebrew, and Persian. This feature can be enabled by setting the [enableRtl](https://ej2.syncfusion.com/documentation/api/blockeditor/index-default#enablertl) property to `true`.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/rtl/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/rtl/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/rtl" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/rtl/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/rtl/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/block-editor/globalization/rtl" %}
{% endif %}
