---
layout: post
title: Quick toolbars in TypeScript Rich text editor control | Syncfusion
description: Learn here all about Quick toolbars in Syncfusion TypeScript Rich text editor control of Syncfusion Essential JS 2 and more.
platform: rich-text-editor-sdk
control: Quick toolbars
publishingplatform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Quick Toolbars in TypeScript Rich Text Editor control

The Rich Text Editor has quick toolbars that act as context-menus, appearing when you click on elements like images, links, audio, video, and tables. By default, specific quick toolbar items are displayed when clicking on the corresponding element. You can customize these items using the [quickToolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#quicktoolbarsettings) property.

> Rich Text Editor features are segregated into individual feature-wise modules. To use quick toolbar features, inject the quick toolbar module using the `RichTextEditor.Inject(QuickToolbar)`.

## Image quick toolbar

You can customize the quick toolbar options for images using the `image` property within the [quickToolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#quicktoolbarsettings). The Rich Text Editor provides essential tools such as 'Replace', 'Align', 'WrapText', 'Caption', 'Remove', 'InsertLink', 'Display', 'AltText', and 'Dimension' allowing seamless image management and editing directly within the content.

By configuring these options in the [quickToolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#quicktoolbarsettings) property, you can enhance the editor’s functionality, ensuring a user-friendly experience for efficiently handling image elements.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-image-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-image-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-image-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-image-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-image-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-image-cs1" %}
{% endif %}

## Link quick toolbar

The link quick toolbar appears when you click on a link in the editor. You can customize its items using the `link` property in the  [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#link).

The Rich Text Editor provides essential tools in the link quick toolbar, including "Open", "Edit Link", "Remove Link", and "Custom Tool".

The following example demonstrates how to customize the link quick toolbar using the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#link) property.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/link-quick-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/link-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/link-quick-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/link-quick-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/link-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/link-quick-toolbar-cs1" %}
{% endif %}

## Table quick toolbar

The table quick toolbar opens when you click anywhere within a table. Customize its items using the `table` property in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#table).

The Rich Text Editor provides essential tools in the table quick toolbar, such as 'Tableheader', 'TableRemove', 'TableRows', 'TableColumns', 'TableCell', 'Styles', 'BackgroundColor', 'Alignments', 'TableCellVerticalAlign', 'TableEditProperties', 'TableCellProperties'.

The following sample demonstrates the customization of table quick toolbar.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/table-quick-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/table-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/table-quick-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/table-quick-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/table-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/table-quick-toolbar-cs1" %}
{% endif %}

## Audio quick toolbar

Customize the quick toolbar items for audio elements using the `audio` property in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#audio).The Rich Text Editor provides essential tools such as "AudioReplace", "Remove", and "AudioLayoutOption", allowing seamless management and editing of audio content.

By configuring these options in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#audio) property, you can enhance the editor’s capabilities, ensuring a user-friendly experience for handling audio elements efficiently.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight js tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-audio-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-audio-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-audio-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-audio-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-audio-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-audio-cs1" %}
{% endif %}

## Video quick toolbar

The video quick toolbar appears when you click on a video element. You can customize its tools using the `video` property in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#video).

The Rich Text Editor allows you to tailor the video quick toolbar with essential tools such as "VideoReplace", "VideoAlign", "VideoRemove", "VideoLayoutOption", and "VideoDimension", enabling seamless management of embedded videos.

By configuring these options in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#video) property, you enhance the editor’s capabilities, ensuring a user-friendly experience for editing and customizing video elements effortlessly.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-video-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-video-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-video-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-video-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-video-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/customize-video-cs1" %}
{% endif %}

## Text quick toolbar

The text quick toolbar provides easy access to commonly used formatting tools, enabling users to apply styles and adjustments effortlessly. This enhances the editing experience by streamlining text formatting.

Customize the quick toolbar items using the `text` property in the [quickToolbarSettings](https://helpej2.syncfusion.com/documentation/api/rich-text-editor/quicktoolbarsettingsmodel#text). Any toolbar items available in the Rich Text Editor can be configured for the text quick toolbar. The example below demonstrates its customization.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/text-quick-toolbar-cs1/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/text-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/text-quick-toolbar-cs1" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/text-quick-toolbar-cs1/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/text-quick-toolbar-cs1/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/text-quick-toolbar-cs1" %}
{% endif %}

## Render quick toolbar in document body

To render the quick toolbar and inline toolbar in the document body, configure `enableAppendToBody` in [quickToolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/quicktoolbarsettings). This prevents clipping and improves visibility in constrained layouts, such as when the editor's dimensions are very small.

The following example demonstrates how to render the quick toolbar directly in the document body using `enableAppendToBody` in [quickToolbarSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/quicktoolbarsettingsmodel).

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/quick-toolbar-body/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/quick-toolbar-body/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/quick-toolbar-body" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight ts tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/quick-toolbar-body/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/quick-toolbar-body/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}

@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';

{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/quick-toolbar-body" %}
{% endif %}