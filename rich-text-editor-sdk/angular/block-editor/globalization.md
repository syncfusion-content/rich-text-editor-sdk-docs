---
layout: post
title: Globalization in Angular Block Editor | Syncfusion
description: Learn how to localize the Angular Block Editor with localization, right-to-left (RTL) support, and translated UI text for global applications.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Globalization in Angular Block Editor

Globalization is the process of designing and developing applications that can adapt to different cultures and languages. The Syncfusion Block Editor component provides support for globalization, enabling it to serve users from diverse linguistic and cultural backgrounds.

## Localization

The Block Editor can be localized for any culture by translating its static text labels. The default locale is `en-US` (English). The following table lists the default text values for the `en-US` culture that you can override through the Syncfusion `L10n` loader:

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

The example below adds a German culture locale to the editor. The first argument to `L10n.load` is the **culture key** (`'de'`) that the editor references through its [`locale`](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#locale) property — for example `de`, `de-DE`, or `fr`, `fr-FR`. The same key you load with `L10n.load` must be assigned to `[locale]` on the component:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/globalization/localization/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/globalization/localization/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/globalization/localization" %}

## Right-to-left (RTL) support

The Block Editor supports right-to-left (RTL) mode, which reverses the layout of the component to accommodate languages read from right to left, such as Arabic, Hebrew, and Persian. Enable RTL by setting the [enableRtl](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#enablertl) property on the editor to `true`. You can also enable RTL globally for the page through the [`enableRtl` common setting](https://ej2.syncfusion.com/angular/documentation/common/globalization#right-to-left-rtl), which is inherited by every Syncfusion component on the page.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/globalization/rtl/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/globalization/rtl/src/main.ts %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/globalization/rtl" %}