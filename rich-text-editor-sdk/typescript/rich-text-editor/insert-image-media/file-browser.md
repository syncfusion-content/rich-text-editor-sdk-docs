---
layout: post
title: File Browser in TypeScript Rich Text Editor | Syncfusion
description: Learn how to browse, select, and insert files from server folders and cloud storage using the File Browser in the TypeScript Rich Text Editor.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# File Browser in TypeScript Rich Text Editor

The File Browser in the Rich Text Editor enables browsing and inserting files, such as images, in the edit panel. File browser allows the users to browse and select a file or folder from the file system and it supports various cloud services.

## Required dependencies

Install the FileManager package and related dependencies:

```bash
npm install @syncfusion/ej2-filemanager @syncfusion/ej2-layouts @syncfusion/ej2-grids
```

### Dependency structure

```
@syncfusion/ej2-richtexteditor
├── @syncfusion/ej2-layouts
├── @syncfusion/ej2-grids
└── @syncfusion/ej2-filemanager
```

Map the above packages style and script reference in sample as like below

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="systemjs.config.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/file-browser-config/systemjs.config.js %}
{% endhighlight %}
{% endtabs %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/file-browser-config/index.html %}
{% endhighlight %}
{% endtabs %}

{% endif %}

## CSS theme reference

Additionally add the below styles in the `index.html` file.

```css
  @import "../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-filemanager/styles/tailwind3.css";
```

## Setup steps

The following example demonstrates how to configure the file browser within the Rich Text Editor:

1. **Add FileManager to toolbar** — Configure the `FileManager` toolbar item in the `toolbarSettings.items` property
2. **Enable file browser** — Set the `enable` property to `true` in the [fileManagerSettings](https://ej2.syncfusion.com/documentation/api/rich-text-editor/index-default#filemanagersettings) property
3. **Inject module** — Add `FileManager` to the `RichTextEditor.Inject(FileManager)` array
4. **Configure endpoints** — Map server endpoints for file upload, deletion, and browsing

> Rich Text Editor features are segregated into individual feature-wise modules. To use the file browser tool, inject the `FileManager` module using `RichTextEditor.Inject(FileManager)`.

The following example demonstrates configuring the file browser within the Rich Text Editor:

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/file-browser-cs3/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/file-browser-cs3/index.html %}
{% endhighlight %}
{% endtabs %}
          
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/file-browser-cs3" %}

{% elsif page.publishingplatform == "javascript" %}

{% tabs %}
{% highlight js tabtitle="index.js" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/file-browser-cs2/index.js %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/file-browser-cs2/index.html %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/file-browser-cs2" %}

{% endif %}

## See also

* [FileManager Documentation](https://ej2.syncfusion.com/documentation/file-manager/getting-started)
* [Image Insertion](./insert-images)
* [Video Insertion](./video)
* [Audio Insertion](./audio)
