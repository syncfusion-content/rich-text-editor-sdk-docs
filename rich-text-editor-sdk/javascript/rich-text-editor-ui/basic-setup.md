---
layout: post
title: Basic Setup in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn the four properties you'll typically configure first in the JavaScript Modern Rich Text Editor — value, valueFormat, toolbarSettings, and imageSettings.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Basic setup in JavaScript Modern Rich Text Editor

After initializing the Modern Rich Text Editor (see [Getting Started](getting-started)), configure the properties that define its initial content, content format, toolbar options, image handling behavior, and editing experience. These settings establish the editor's default configuration and provide a foundation for further customization based on application requirements.

{% tabs %}

{% highlight js tabtitle="index.js" %}

{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/basic-setup/index.js %}

{% endhighlight %}

{% highlight html tabtitle="index.html" %}

{% include code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/basic-setup/index.html %}

{% endhighlight %}

{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/javascript/richtexteditor-ui/basic-setup/" %}

## Set Editor content.

Configure the [`value`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#value) property to load content when the editor is initialized. This is commonly used to display existing content for editing or to provide starter content.

```javascript
value: '<p>Getting started with the Rich Text Editor UI.</p>'
```

## Set content format

Before setting editor content, choose the appropriate [`valueFormat`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#valueformat). Use html when working with HTML strings and json when storing or exchanging content using the editor's structured document model.

```javascript
valueFormat: 'html'
```

## Supported values

* 'json' - Uses the structured document model.
* 'html' - Uses HTML string content.

> **Note**: `valueFormat` is set to **'json'** by default. Set it to **'html'** when loading editor content as an HTML string.

## Configure toolbar options

Configure [`toolbarSettings.items`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/toolbarsettings#items) to display only the editing tools required by your application. Keeping the toolbar focused helps simplify the editing experience and reduces unnecessary commands

```javascript
toolbarSettings: {
    items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
}
```

## Configure image settings

Configure [`imageSettings`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#imagesettings) to control how images are uploaded and validated. You can specify accepted file types, file size limits, and server endpoints used for upload and removal operations.

```javascript
var hostUrl = 'https://services.syncfusion.com/js/production/';
imageSettings: {
    allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
    maxFileSize: 30000000,
    uploadUrl: hostUrl + 'api/RichTextEditor/SaveFile',
    removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
    imageUrl: hostUrl + 'RichTextEditor/'
}
```

## Set placeholder text

Use the [`placeholder`](https://ej2.syncfusion.com/documentation/api/richtexteditor-ui/index-default#placeholder) property to display instructional text when the editor is empty. This helps users understand what content is expected before they start typing.

```javascript
placeholder: 'Type something.'
```
