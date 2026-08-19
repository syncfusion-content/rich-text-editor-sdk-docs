---
layout: post
title: Customize Themes in TypeScript Rich Text Editor | Syncfusion
description: Learn how to create and apply custom themes in the Syncfusion Essential JS 2 
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Customize Themes in TypeScript Rich Text Editor

The Rich Text Editor uses CSS custom properties (CSS variables) for theming, which allows you to create and apply custom themes to match your brand identity. This guide demonstrates how to design, implement, and switch between themes dynamically.

## Built-in themes

Built-in themes are ready-to-use CSS and SCSS files shipped by Syncfusion as npm packages for all controls, including the Rich Text Editor. They deliver a consistent look across components and act as the base for any further customization.

To apply a theme, install its package and import its CSS or SCSS file. Themes are selected by design language (Material, Bootstrap, Fluent, Fabric, Tailwind, or High Contrast) and by light or dark variant.

N> For the complete list of built-in themes and their npm packages, refer to the [Theme Packages](https://ej2.syncfusion.com/documentation/appearance/theme#theme-packages) documentation.

## Recommended themes

The **Material 3, Fluent 2, Bootstrap 5.3, and Tailwind 3** are modern, CSS variable-based themes that support full customization and provide the best experience for dynamic theme switching.

N> For complete details on CSS variable-based theming and customization, see the [Themes using CSS Variables](https://ej2.syncfusion.com/documentation/appearance/css-variables) documentation.

## Custom themes

Use custom themes when brand-specific colors and visual styles are required. Create them by overriding CSS variables—no need to fork or modify Syncfusion source code.

N> Custom CSS variable overrides must be declared **after** the theme stylesheet in the document load order to take effect.

The following example demonstrates custom theme variants for the Rich Text Editor using CSS variable overrides.

{% if page.publishingplatform == "typescript" %}

{% tabs %}
{% highlight ts tabtitle="index.ts" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/themes/index.ts %}
{% endhighlight %}
{% highlight html tabtitle="index.html" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/themes/index.html %}
{% endhighlight %}
{% highlight css tabtitle="styles.css" %}
{% include code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/themes/index.css %}
{% endhighlight %}
{% endtabs %}

{% endif %}

{% previewsample "page.domainurl/code-snippet/rich-text-editor-sdk/typescript/rich-text-editor/themes" %}

## Switching themes

The Rich Text Editor supports dynamic theme switching at runtime by updating the `cssClass` property and calling `dataBind()`. This enables theme changes without reinitializing the component, making it suitable for user-driven theme selection such as a theme picker.

T> Theme switching is a two-step operation. After updating the `cssClass` property, `dataBind()` must be called to apply the change to the editor's DOM.

{% highlight ts hl_lines="1 2" %}
rte.cssClass = 'custom ' + theme;
rte.dataBind();
{% endhighlight %}

### Theme variable reference

Syncfusion themes expose CSS variables for customizing colors, backgrounds, text, borders, and component states. Override these variables to create consistent branding and custom visual styles across all components. Variables defined on `.e-component` apply globally, while variables scoped under a custom class, such as `.e-richtexteditor` apply only to that instance.

N> Refer to the complete list of supported theme variables in the [Common Theme](https://ej2.syncfusion.com/documentation/appearance/theme) documentation.

## Accessibility

When customizing themes, ensure sufficient contrast between the text and background colors by appropriately configuring the variables `--color-sf-content-text-color` and `--color-sf-content-bg-color`. To enhance readability and accessibility, maintain a minimum contrast ratio of 4.5:1 for normal text and 3:1 for large text (18pt or 14pt bold), in accordance with WCAG 2.1 SC 1.4.3.

### Testing your theme

After customizing your theme, validate the implementation by performing the following checks:
 
**Color contrast** - Run the [WCAG Color Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify that text and background color combinations meet accessibility standards.
