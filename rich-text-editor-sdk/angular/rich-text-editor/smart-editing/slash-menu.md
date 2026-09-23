---
layout: post
title: Slash Commands in Angular Rich Text Editor | Syncfusion
description: Learn how to use slash commands in the Angular Rich Text Editor to quickly insert content, apply formatting, and access editing actions.
control: Rich Text Editor
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Slash Commands in Angular Rich Text Editor

The Slash Menu in the Rich Text Editor enables users to apply formatting, insert elements, and execute custom commands by typing the `/` character. This feature enhances editing efficiency by providing quick access to common actions directly within the editor.

## Enable the slash menu

To use the Slash Menu feature, inject SlashMenuService in the provider section of AppComponent.

To enable the Slash Menu, set the `enable` property within [`slashMenuSettings`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/index-default#slashmenusettings) to `true`. By default, this feature is disabled. Once enabled, the Slash Menu appears when the user types the `/` character in the editor.

## Configure the slash menu items

The `slashMenuSettings` property lets you customize the `items` displayed in the Slash Menu. By defining the [`items`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/slashMenusettingsmodel#items) property, you can provide a list of available commands for users to choose from when they type a slash (`/`) in the Rich Text Editor.

This list can include various formatting options such as paragraph and heading levels. The following code snippet configures the Slash Menu items:

```typescript

slashMenuSettings: {
    enable: true,
    items: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3']
    }

```

## Customize the popup dimensions

The Slash Menu popup's size can be customized using the [`popupWidth`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/slashmenusettingsmodel#popupwidth) and [`popupHeight`](https://ej2.syncfusion.com/angular/documentation/api/rich-text-editor/slashmenusettingsmodel#popupHeight) properties within `slashMenuSettings`. Adjusting these values allows you to control the menu's dimensions.

The following code snippet shows how to customize both the width and height of the popup:

```typescript

slashMenuSettings: {
    enable: true,
    items: ['Paragraph', 'Heading 1', 'Heading 2', 'Heading 3'],
    popupHeight: 300,
    popupWidth: 250
}

```

## Add custom slash menu items

Custom items can be added by defining the items property inside slashMenuSettings. This property accepts either a string of predefined items or an array of objects representing custom menu items.

Each custom item object can include the following properties:

| Property    | Description                                           |
|-------------|-------------------------------------------------------|
| text        | The label of the menu item.                           |
| command     | The action to be executed when the item is clicked.   |
| type        | Groups related items in the Slash Menu.               |
| iconCss     | Specifies the CSS class for the item's icon.          |
| description | Provides a short description for the item.            |
 

The following code demonstrates how to set up a custom Slash Menu item in the Rich Text Editor to insert meeting notes and a signature:

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/slash-menu-cs1/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/rich-text-editor/slash-menu-cs1/src/main.ts %}
{% endhighlight %}
{% endtabs %}
  
{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/rich-text-editor/slash-menu-cs1" %}