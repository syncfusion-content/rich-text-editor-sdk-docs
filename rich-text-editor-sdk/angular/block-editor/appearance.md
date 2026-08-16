---
layout: post
title: Style and Appearance in Angular Block Editor | Syncfusion
description: Angular Block Editor style and appearance provides a consolidated guide to built-in themes, CSS customization, dimensions, and appearance-related properties.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Style and Appearance in Angular Block Editor

The Block Editor component provides properties to customize its visual appearance, allowing you to control its dimensions, theming, and behavior. This page covers the four properties most commonly used for layout and styling: `width`, `height`, `cssClass`, and `readOnly`.

## Setting width and height

You can specify the width and height of the Block Editor using the [width](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#width) and [height](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#height) properties. Both accept a CSS length value, such as a percentage, viewport unit, or pixel value:

```html
<!-- Fluid layout that fills its container -->
<ejs-blockeditor [width]="'100%'" [height]="'80vh'" />

<!-- Fixed-size layout -->
<ejs-blockeditor [width]="'800px'" [height]="'500px'" />
```

If `width` and `height` are not set, the editor defaults to `width: '100%'` and `height: 'auto'`.

## Customization using CSS class

You can apply a custom theme to the Block Editor by passing one or more CSS class names through the [cssClass](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#cssclass) property. The class is added to the editor's root element, so selectors should target `.e-block-editor.your-class` (or whichever root class the editor renders). This property is useful for things like brand colors, gradient backgrounds, or dark-mode overrides:

```html
<ejs-blockeditor [width]="'600px'" [height]="'400px'" [cssClass]="'custom-editor-theme'" />
```

## Setting read-only mode

You can place the Block Editor in read-only mode by setting the [readOnly](https://ej2.syncfusion.com/angular/documentation/api/blockeditor/index-default#readonly) property to `true`. While read-only, the user can view the content with all formatting intact but cannot make changes. This is useful for previews and reports — see the [Read-Only Mode](editor-security/read-only-mode.html) page for full details and a runtime-toggle example:

```html
<ejs-blockeditor [readOnly]="true" />
```

The following example demonstrates the usage of `readOnly` and `cssClass` together with runtime toggling via component methods.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/appearance/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/appearance/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/appearance/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/appearance/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/appearance" %}

## Theme Customization

The Block Editor provides flexible theme customization options to help match the editor appearance with your application design. You can customize built-in themes by overriding CSS variables or create a fully customized theme using Syncfusion Theme Studio.

### Default CSS Override

The Block Editor uses CSS variables with the unified `--sf` naming convention. These variables control colors, typography, backgrounds, borders, icons, and other visual elements across the editor.

### Common Block Editor Theme Variables

| Name | Purpose |
|------|---------|
| `--e-font-name` | Specifies the default font family used throughout the Block Editor |
| `--color-sf-content-bg-color` | Controls the editor background color |
| `--color-sf-content-text-color` | Specifies the primary text color used in editor content |
| `--color-sf-content-text-color-alt1` | Specifies alternate text color used in highlighted elements |
| `--color-sf-placeholder-text-color` | Controls placeholder text appearance |
| `--color-sf-border-light` | Defines light border styling |
| `--color-sf-border` | Defines the default border color |
| `--color-sf-primary` | Defines the primary theme color used throughout the editor |
| `--color-sf-primary-bg-color` | Controls primary element backgrounds |
| `--color-sf-primary-border-color` | Controls primary element borders |
| `--color-sf-primary-text-color` | Controls text color displayed on primary elements |
| `--color-sf-icon-color` | Defines toolbar and action icon colors |

### Theme Customization Example

The following example demonstrates how to customize the Block Editor appearance using CSS variable overrides with multiple built-in themes.

{% tabs %}
{% highlight ts tabtitle="app.component.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/theme-customization/src/app.component.ts %}
{% endhighlight %}

{% highlight ts tabtitle="main.ts" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/theme-customization/src/main.ts %}
{% endhighlight %}
{% highlight html tabtitle="app.component.html" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/theme-customization/src/app.component.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor-sdk/angular/block-editor/theme-customization/src/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/samples/rich-text-editor-sdk/angular/block-editor/theme-customization" %}


## Using Theme Studio

Syncfusion Theme Studio provides an advanced way to create a fully customized theme for the Block Editor and other EJ2 components.

1. Visit the [Syncfusion<sup style="font-size:70%">&reg;</sup> Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).
2. Select a base theme such as Material 3, Fluent 2, Bootstrap 5.3, or Tailwind 3.
3. Customize colors, typography, borders, and component styles.
4. Download the generated CSS file.
5. Include the generated theme in your application.

This approach ensures consistent styling across all Syncfusion components in your application.