---
layout: post
title: Themes using CSS Variables in React Rich Text Editor SDK | Syncfusion
description: Learn how to use and customize Syncfusion React Rich Text Editor SDK themes with CSS variables, including light/dark switching and primary color overrides.
platform: rich-text-editor-sdk
control: CSS Variables
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Themes using CSS Variables

[CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), also known as custom properties, allow authors to define reusable values in CSS files. Variable names start with two hyphens (`--`) followed by an identifier and can store values such as colors, lengths, or fonts.

The modern Syncfusion<sup style="font-size:70%">&reg;</sup> themes leverage CSS variables for consistent, easily customizable styling across the React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor**. The supported CSS-variable themes are:

* Material 3
* Fluent 2
* Bootstrap 5.3
* Tailwind 3.4

Each theme ships `light` and `dark` variants.

> Material 3 defines color variables using `rgb()` values (comma-separated). Using hex values may produce inconsistent results.

## Reference the theme in your application

Install the theme package and import the stylesheet for each editor you use.

```bash
npm install @syncfusion/ej2-material3-theme
```

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```css
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/rich-text-editor/index.css";
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```css
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/block-editor/index.css";
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```css
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/markdown-editor/index.css";
```

{% endtabcontent %}

{% endtabcontents %}

## Customize the primary color

Override a theme variable in your own stylesheet, loaded after the theme CSS. The pattern is the same for all three editors.

```css
:root {
  --color-sf-primary: 103, 80, 164;
}
```

## Switch between light and dark at runtime

Each editor stylesheet has a matching `-dark-theme` stylesheet. Swap the import at runtime (for example, based on a user preference or `prefers-color-scheme`).

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```css
/* dark */
@import "../node_modules/@syncfusion/ej2-material3-dark-theme/styles/rich-text-editor/index.css";
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```css
/* dark */
@import "../node_modules/@syncfusion/ej2-material3-dark-theme/styles/block-editor/index.css";
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```css
/* dark */
@import "../node_modules/@syncfusion/ej2-material3-dark-theme/styles/markdown-editor/index.css";
```

{% endtabcontent %}

{% endtabcontents %}

To switch with a single class (such as `e-dark-mode` on the `<body>`), prefer the unified theme stylesheet that ships light and dark variants and toggle the class instead of swapping the import.

## See also

* [Built-in Themes](./built-in-themes)
* [Theme Studio](./theme-studio)
* [Styled Component Support](./styled-component-support)
