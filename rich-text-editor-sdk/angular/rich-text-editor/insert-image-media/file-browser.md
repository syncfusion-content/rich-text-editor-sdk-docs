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

## Required additional dependency

The following list of additional dependencies are required to use the file browser feature in the Rich Text Editor.

```js

|-- @syncfusion/ej2-angular-richtexteditor
    |-- @syncfusion/ej2-layouts
    |-- @syncfusion/ej2-grids
    |-- @syncfusion/ej2-filemanager

```

## Additional CSS references

Additionally add below styles in the `[src/styles.css]` file.

```css

  @import "https://ej2.syncfusion.com/angular/documentation/node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
  @import "../node_modules/@syncfusion/ej2-filemanager/styles/tailwind3.css";

```

The following example explains about how to configure the file browser within the Rich Text Editor.

* Configure the `FileManager` toolbar item in the `toolbarSettings` API `items` property.
* Set the `enable` property as `true` on [fileManagerSettings](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#filemanagersettings) property to make the file browser in the  Rich Text Editor to appear on the `FileManager` toolbar click action.

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