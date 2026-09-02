---
layout: post
title: File Browser in Angular Rich Text Editor | Syncfusion
description: Learn how to browse, select, and insert files from server folders and cloud storage using the File Browser in the Angular Rich Text Editor.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# File Browser in Angular Rich Text Editor

The File Browser in the Rich Text Editor enables browsing and inserting files, such as images, in the edit panel. File browser allows the users to browse and select a file or folder from the file system and it supports various cloud services.

To get start quickly about Inserting Images in the Angular Rich Text Editor Using a File Manager, refer to the video below.

{% youtube "https://www.youtube.com/watch?v=teTOxZx4MCc" %}

## Required dependencies
Install the FileManager package and related dependencies:

```bash
npm install @syncfusion/ej2-filemanager @syncfusion/ej2-layouts @syncfusion/ej2-grids
```

### Dependency structure

```
@syncfusion/ej2-angular-richtexteditor
├── @syncfusion/ej2-layouts
├── @syncfusion/ej2-grids
└── @syncfusion/ej2-filemanager
```

## CSS theme reference

Additionally add below styles in the `[src/styles.css]` file.

```css

  @import "https://ej2.syncfusion.com/angular/documentation/node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-filemanager/styles/tailwind3.css";

```
## Setup steps

The following example demonstrates how to configure the file browser within the Rich Text Editor:

1. **Add FileManager to toolbar** — Configure the `FileManager` toolbar item in the `toolbarSettings.items` property
2. **Enable file browser** — Set the `enable` property to `true` in the [fileManagerSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#filemanagersettings) property
3. **Inject module** — Add `FileManager` to the `<Inject services={[FileManager]} />` array
4. **Configure endpoints** — Map server endpoints for file upload, deletion, and browsing

> Rich Text Editor features are segregated into individual feature-wise modules. To use the file browser tool, configure `FileManagerService` in providers.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/file-browser-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/file-browser-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/file-browser-cs1" %}

## See also

* [FileManager Documentation](https://ej2.syncfusion.com/angular/documentation/file-manager/getting-started)
* [Image Insertion](./insert-images)
* [Video Insertion](./video)
* [Audio Insertion](./audio)