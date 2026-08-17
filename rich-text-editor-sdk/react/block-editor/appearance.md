---
layout: post
title: Style and Appearance in React Block Editor | Syncfusion
description: React Block Editor style and appearance provides a consolidated guide to built-in themes, CSS customization, dimensions, and appearance-related properties.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Style and Appearance in React Block Editor

The Block Editor component provides several properties to customize its visual appearance, allowing you to control its dimensions, styling, and behavior.

## Setting width and height

You can specify the width and height for the Block Editor component using the [width](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#width) and [height](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#height) properties.

{% raw %}
```typescript
<BlockEditorComponent width="100%" height="80vh"></BlockEditorComponent>

// Or with specific pixel values
<BlockEditorComponent width="800px" height="500px"></BlockEditorComponent>
```
{% endraw %}

## Setting readonly mode

You can utilize the [readOnly](https://ej2.syncfusion.com/react/documentation/api/blockeditor/index-default#readonly) property to control whether the editor is in read-only mode. When set to `true`, users cannot edit the content but can still view it.

{% raw %}
```typescript
<BlockEditorComponent readOnly={true}></BlockEditorComponent>
```
{% endraw %}

## Customization using CSS Class

You can use the [cssClass](https://ej2.syncfusion.com/react/documentation/api/blockeditor#cssclass) property to customize the appearance of the Block Editor control.

{% raw %}
```typescript
<BlockEditorComponent width="600px" height="400px" cssClass="custom-editor-theme"></BlockEditorComponent>
```
{% endraw %}

The following example demonstrates the usage of the `readOnly` and `cssClass` properties of the Block Editor.

{% tabs %}
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/appearance/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/appearance/app/index.tsx %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/appearance" %}

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
{% highlight js tabtitle="index.jsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/theme-customization/app/index.jsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.tsx" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/theme-customization/app/index.tsx %}
{% endhighlight %}
{% highlight ts tabtitle="index.css" %}
{% include code-snippet/rich-text-editor-sdk/react/block-editor/theme-customization/styles.css %}
{% endhighlight %}
{% endtabs %}

{% previewsample "https://help.syncfusion.com/code-snippet/rich-text-editor-sdk/react/block-editor/theme-customization" %}


## Using Theme Studio

Syncfusion Theme Studio provides an advanced way to create a fully customized theme for the Block Editor and other EJ2 components.

1. Visit the [Syncfusion<sup style="font-size:70%">&reg;</sup> Theme Studio](https://ej2.syncfusion.com/themestudio/?theme=material).
2. Select a base theme such as Material 3, Fluent 2, Bootstrap 5.3, or Tailwind 3.
3. Customize colors, typography, borders, and component styles.
4. Download the generated CSS file.
5. Include the generated theme in your application.

This approach ensures consistent styling across all Syncfusion components in your application.