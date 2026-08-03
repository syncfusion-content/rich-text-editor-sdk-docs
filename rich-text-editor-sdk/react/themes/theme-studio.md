---
layout: post
title: Theme Studio in React Rich Text Editor SDK | Syncfusion
description: Learn how to customize and generate a custom theme for the Syncfusion React Rich Text Editor SDK using Syncfusion Theme Studio.
platform: rich-text-editor-sdk
control: Theme Studio
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Theme Studio

[Syncfusion<sup style="font-size:70%">&reg;</sup> Theme Studio](https://ej2.syncfusion.com/themestudio/) is an online tool that lets you customize the built-in themes and generate a tailored theme for the Rich Text Editor SDK components. You can adjust the primary color, typography, and other design tokens, then download a ready-to-use CSS file.

## Customizing a theme

1. Open [Theme Studio](https://ej2.syncfusion.com/themestudio/) and select a base theme (for example, Material 3, Fluent 2, Bootstrap 5.3, or Tailwind 3.4).
2. Adjust the color palette and other design tokens.
3. Select the components you need — including the Rich Text Editor — to keep the output CSS lean.
4. Download the generated CSS.

## Using the generated theme

Reference the downloaded CSS file in your React application:

```css
@import './custom-theme.css';
```

Then import the stylesheet into your component (for example, `src/App.tsx`).

## See also

* [Built-in Themes](./built-in-themes)
* [CSS Variables](./css-variables)
* [Migration to Theme Packages](./migration-to-theme-packages)
