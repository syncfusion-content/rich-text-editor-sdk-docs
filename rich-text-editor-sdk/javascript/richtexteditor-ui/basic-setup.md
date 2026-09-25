---
layout: post
title: Basic Setup in JavaScript Modern Rich Text Editor | Syncfusion
description: Learn the four properties you'll typically configure first in the JavaScript Modern Rich Text Editor — value, valueFormat, toolbarSettings, and imageSettings.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
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

## Set Editor content.

Configure the `value` property to load content when the editor is initialized. This is commonly used to display existing content for editing or to provide starter content.

```js
value: '<p>Getting started with the Rich Text Editor UI.</p>'
```

## valueFormat

Before setting editor content, choose the appropriate `valueFormat`. Use html when working with HTML strings and json when storing or exchanging content using the editor's structured document model.

```js
valueFormat: 'html'
```
### supported values

* 'json' - Uses the structured document model.
* 'html' - Uses HTML string content.

> **Note**: `valueFormat` is set to **'json'** by default. Set it to **'html'** when loading editor content as an HTML string.

## toolbarSettings

Configure `toolbarSettings.items` to display only the editing tools required by your application. Keeping the toolbar focused helps simplify the editing experience and reduces unnecessary commands

```js
toolbarSettings: {
    items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
}
```

See [Toolbar](toolbar) for layout, floating behavior, and toolbar events.

## imageSettings

Configure `imageSettings` to control how images are uploaded and validated. You can specify accepted file types, file size limits, and server endpoints used for upload and removal operations.

```js
var hostUrl = 'https://services.syncfusion.com/js/production/';
imageSettings: {
    allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
    maxFileSize: 30000000,
    uploadUrl: hostUrl + 'api/RichTextEditor/SaveFile',
    removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
    imageUrl: hostUrl + 'RichTextEditor/'
}
```

See [Insert Image](insert-image) for upload, storage, and display configuration beyond this basic validation.

## Set placeholder text 

Use the `placeholder` property to display instructional text when the editor is empty. This helps users understand what content is expected before they start typing.

```js
placeholder: 'Type something.'
```

## set save Interval

When `enableAutoSave` is enabled, use `saveInterval` to control how long the editor waits before automatically saving unsaved changes. The value is specified in milliseconds and is triggered after the user becomes idle.

```js
saveInterval: 1000
```
