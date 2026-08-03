---
layout: post
title: Built-in Themes in React Rich Text Editor SDK | Syncfusion
description: Explore the built-in themes available for the Syncfusion React Rich Text Editor SDK, including Tailwind 3.4, Material 3, Fluent 2, and Bootstrap 5.3, and how to reference them.
platform: rich-text-editor-sdk
control: Built-in Themes
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Built-in Themes

Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK components provide a comprehensive set of built-in themes to deliver a consistent, modern, and visually appealing appearance across applications. These themes apply to the Rich Text Editor, Block Editor, and Markdown Editor components.

## Available themes

| Theme | Style Sheet Name |
|-----------------------|-----------------------|
| Tailwind 3.4 | tailwind3.css |
| Tailwind 3.4 Dark | tailwind3-dark.css |
| Bootstrap 5.3 | bootstrap5.3.css |
| Bootstrap 5.3 Dark | bootstrap5.3-dark.css |
| Fluent 2 | fluent2.css |
| Fluent 2 Dark | fluent2-dark.css |
| Material 3 | material3.css |
| Material 3 Dark | material3-dark.css |
| Bootstrap 5 | bootstrap5.css |
| Bootstrap 5 Dark | bootstrap5-dark.css |
| Material | material.css |
| Material Dark | material-dark.css |
| High Contrast | highcontrast.css |

## Theme packages

Syncfusion<sup style="font-size:70%">&reg;</sup> built-in themes are distributed as theme packages available on npm. Each package includes CSS/SCSS files for all components. For the Rich Text Editor, install the desired theme package and import the component-specific stylesheet.

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

Import the Rich Text Editor styles into your application stylesheet:

```css
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css';
```

> For details on referencing themes through npm, CDN, or SASS, and on runtime theme switching, refer to [CSS Variables](./css-variables) and [Referencing themes](./css-variables).

## See also

* [Size Modes](./size-modes)
* [Icons](./icons)
* [Theme Studio](./theme-studio)
* [CSS Variables](./css-variables)
