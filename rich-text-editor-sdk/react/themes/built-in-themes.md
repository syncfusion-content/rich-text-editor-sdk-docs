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

Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK components — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — ship with a comprehensive set of built-in themes to deliver a consistent, modern, and visually appealing appearance across applications. The same theme package covers all three editors.

## Available themes

| Theme | Style Sheet Name |
| --- | --- |
| Tailwind 3.4 | `tailwind3.css` |
| Tailwind 3.4 Dark | `tailwind3-dark.css` |
| Bootstrap 5.3 | `bootstrap5.3.css` |
| Bootstrap 5.3 Dark | `bootstrap5.3-dark.css` |
| Fluent 2 | `fluent2.css` |
| Fluent 2 Dark | `fluent2-dark.css` |
| Material 3 | `material3.css` |
| Material 3 Dark | `material3-dark.css` |
| Bootstrap 5 | `bootstrap5.css` |
| Bootstrap 5 Dark | `bootstrap5-dark.css` |
| Material | `material.css` |
| Material Dark | `material-dark.css` |
| High Contrast | `highcontrast.css` |

## Theme packages

Syncfusion<sup style="font-size:70%">&reg;</sup> built-in themes are distributed as theme packages on npm. Each package includes CSS/SCSS files for every component. The same package covers all three editors in the SDK.

| Theme | Light package | Dark package |
| --- | --- | --- |
| Tailwind 3 | [`@syncfusion/ej2-tailwind3-theme`](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-theme) | [`@syncfusion/ej2-tailwind3-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-tailwind3-dark-theme) |
| Bootstrap 5.3 | [`@syncfusion/ej2-bootstrap5.3-theme`](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5.3-theme) | [`@syncfusion/ej2-bootstrap5.3-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5.3-dark-theme) |
| Fluent 2 | [`@syncfusion/ej2-fluent2-theme`](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-theme) | [`@syncfusion/ej2-fluent2-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-fluent2-dark-theme) |
| Material 3 | [`@syncfusion/ej2-material3-theme`](https://www.npmjs.com/package/@syncfusion/ej2-material3-theme) | [`@syncfusion/ej2-material3-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-material3-dark-theme) |
| Bootstrap 5 | [`@syncfusion/ej2-bootstrap5-theme`](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5-theme) | [`@syncfusion/ej2-bootstrap5-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-bootstrap5-dark-theme) |
| Material | [`@syncfusion/ej2-material-theme`](https://www.npmjs.com/package/@syncfusion/ej2-material-theme) | [`@syncfusion/ej2-material-dark-theme`](https://www.npmjs.com/package/@syncfusion/ej2-material-dark-theme) |
| High Contrast | [`@syncfusion/ej2-highcontrast-theme`](https://www.npmjs.com/package/@syncfusion/ej2-highcontrast-theme) | — |

## Install and import

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

Import the stylesheet for each editor you use. The pattern is the same across all three editors — only the stylesheet path changes.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/block-editor/index.css";
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/markdown-editor/index.css";
```

{% endtabcontent %}

{% endtabcontents %}

## Optimized (lite) stylesheets

Each component stylesheet also ships a `lite` variant that includes only the normal size mode. Use it for smaller CSS bundles.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index-lite.css";
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/block-editor/index-lite.css";
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/markdown-editor/index-lite.css";
```

{% endtabcontent %}

{% endtabcontents %}

## See also

* [CSS Variables](./css-variables)
* [Icons](./icons)
* [Size Modes](./size-modes)
* [Migration to Theme Packages](./migration-to-theme-packages)
* [Theme Studio](./theme-studio)
