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

The modern Syncfusion<sup style="font-size:70%">&reg;</sup> themes leverage CSS variables for consistent, easily customizable styling across the Rich Text Editor SDK components. The supported CSS-variable themes are:

* Material 3
* Fluent 2
* Bootstrap 5.3
* Tailwind 3.4

Each theme ships `light` and `dark` variants.

## Referencing themes

You can reference the theme in a React application through npm, CDN, or SASS.

**npm (recommended):** install the theme package and import the Rich Text Editor stylesheet.

```bash
npm install @syncfusion/ej2-material3-theme
```

```css
@import '../node_modules/@syncfusion/ej2-material3-theme/styles/rich-text-editor/index.css';
```

## Overriding the primary color

Override a theme variable in your own stylesheet, loaded after the theme CSS. For example, to change the primary color in Material 3:

> Material 3 defines color variables using `rgb()` values (comma-separated). Using hex values may produce inconsistent results.

```css
:root {
    --color-sf-primary: 103, 80, 164;
}
```

## Switching between light and dark

Reference the light theme by default and swap to the dark stylesheet at runtime (for example, based on a user preference or `prefers-color-scheme`).

```css
/* dark */
@import '../node_modules/@syncfusion/ej2-material3-dark-theme/styles/rich-text-editor/index.css';
```

## See also

* [Built-in Themes](./built-in-themes)
* [Theme Studio](./theme-studio)
* [Styled Component Support](./styled-component-support)
