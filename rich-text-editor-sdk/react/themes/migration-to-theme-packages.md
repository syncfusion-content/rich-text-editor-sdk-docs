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

Earlier approaches referenced individual component style files or a single combined stylesheet from the base packages. The recommended approach is to consume the dedicated npm **theme packages**, which provide optimized, component-scoped stylesheets and CSS-variable support.

## Why migrate

- **Smaller CSS** — import only the Rich Text Editor styles instead of the full combined stylesheet.
- **CSS variables** — modern theme packages expose customizable design tokens.
- **Consistent updates** — theme packages are versioned and updated alongside the components.

## Migration steps

**1. Remove old style references** — remove imports that pointed to component styles inside the base/component packages, for example:

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

> The `index.css` in the theme package automatically imports all required dependency styles for the Rich Text Editor (buttons, popups, lists, etc.).

## See also

* [Built-in Themes](./built-in-themes)
* [CSS Variables](./css-variables)
