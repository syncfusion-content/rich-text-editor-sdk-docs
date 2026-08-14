---
layout: post
title: Globalization in Blazor Block Editor | Syncfusion®
description: Learn how to localize the Blazor Block Editor with localization, right-to-left (RTL) support, and translated UI text for global applications.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
---

# Globalization in Blazor Block Editor

The Blazor Block Editor component supports globalization features like `Localization` and `Right-to-Left (RTL)` alignment, enabling it to be adapted for different cultures and languages.

## Localization

Block Editor can be localized for any culture by translating its static text labels. The default locale is `en` (English). The following table lists the default text values for the `en` culture that can be translated.

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

Refer to the [Blazor Localization](https://blazor.syncfusion.com/documentation/common/localization) documentation for detailed steps on registering translated resource strings and implementing localization in Blazor components.

## Right-to-Left (RTL)

The Right-to-Left (RTL) feature reverses the component's layout and text direction to support languages that are read from right to left, such as Arabic or Hebrew. Set the `EnableRtl` property to `true` to enable RTL rendering:

```cshtml
@using Syncfusion.Blazor.BlockEditor

<div id="container">
    <SfBlockEditor EnableRtl="true"></SfBlockEditor>
</div>
```

Refer to the [Blazor RTL](https://blazor.syncfusion.com/documentation/common/right-to-left) topic to provide RTL support for the Blazor components.
