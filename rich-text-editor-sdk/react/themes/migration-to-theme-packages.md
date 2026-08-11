---
layout: post
title: Migration to Theme Packages in React Rich Text Editor SDK | Syncfusion
description: Learn how to migrate the Syncfusion React Rich Text Editor SDK styles to the npm theme packages from older styling approaches.
platform: rich-text-editor-sdk
control: Migration to Theme Packages
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Migration to Theme Packages

Earlier Syncfusion<sup style="font-size:70%">&reg;</sup> styling approaches referenced individual component style files or a single combined stylesheet from the base/component packages. The recommended approach for the React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — is to consume the dedicated npm **theme packages**, which bundle optimized, component-scoped stylesheets, expose CSS-variable support, and inject all required dependency styles for the editor you import.

## Why migrate

- **Smaller CSS** — import only the styles for the editor you render, instead of the full combined stylesheet.
- **Automatic dependency loading** — `index.css`/`index.scss` in each editor folder automatically pulls in all required dependency styles (buttons, popups, lists, calendars, and so on).
- **CSS variables** — modern theme packages expose customizable design tokens.
- **Consistent updates** — theme packages are versioned and updated alongside the editor packages.

## Migrate each editor

The migration steps are the same for all three editors — only the stylesheet path differs. Pick the tab for the editor you use.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

**1. Remove old style references:**

```css
/* Old approach — remove */
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/material.css';
```

**2. Install the theme package:**

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

**3. Import the Rich Text Editor stylesheet from the theme package:**

```css
/* New approach */
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css';
```

> The `index.css` automatically loads the buttons, popups, and other dependency styles the editor relies on.

{% endtabcontent %}

{% tabcontent Block Editor %}

**1. Remove old style references:**

```css
/* Old approach — remove */
@import '../node_modules/@syncfusion/ej2-blockeditor/styles/material.css';
```

**2. Install the theme package:**

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

**3. Import the Block Editor stylesheet from the theme package:**

```css
/* New approach */
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/block-editor/index.css';
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

**1. Remove old style references:**

```css
/* Old approach — remove */
@import '../node_modules/@syncfusion/ej2-markdowneditor/styles/material.css';
```

**2. Install the theme package:**

```bash
npm install @syncfusion/ej2-tailwind3-theme
```

**3. Import the Markdown Editor stylesheet from the theme package:**

```css
/* New approach */
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/markdown-editor/index.css';
```

{% endtabcontent %}

{% endtabcontents %}

## SCSS migration

When you reference SCSS instead of CSS, replace the legacy imports with the matching theme-package SCSS.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```scss
@use '@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.scss' as *;
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```scss
@use '@syncfusion/ej2-tailwind3-theme/styles/block-editor/index.scss' as *;
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```scss
@use '@syncfusion/ej2-tailwind3-theme/styles/markdown-editor/index.scss' as *;
```

{% endtabcontent %}

{% endtabcontents %}

## See also

* [Built-in Themes](./built-in-themes)
* [CSS Variables](./css-variables)
* [Theme Studio](./theme-studio)
