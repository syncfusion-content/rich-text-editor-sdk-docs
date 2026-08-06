---
layout: post
title: Icons in React Rich Text Editor SDK | Syncfusion
description: Learn about the built-in icon library used by the Syncfusion React Rich Text Editor SDK and how to customize icons.
platform: rich-text-editor-sdk
control: Icons
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Icons

Syncfusion's icon library ships a large collection of font-based icons (embedded as base64 in themes) to keep the React Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — visually consistent. Icons are rendered by combining the base class `e-icons` with a specific icon class prefixed `e-`. Each theme automatically applies its weights and styling.

## Referencing the icon library

Icons ship with every theme package. You can reference them through the theme package or the dedicated [@syncfusion/ej2-icons](https://www.npmjs.com/package/@syncfusion/ej2-icons) package.

{% tabs %}
{% highlight bash tabtitle="Theme Package" %}

npm install @syncfusion/ej2-tailwind3-theme --save

{% endhighlight %}
{% highlight bash tabtitle="Icon Package" %}

npm install @syncfusion/ej2-icons --save

{% endhighlight %}
{% endtabs %}

Import the icon stylesheet for each editor you use.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/icons/tailwind3.css";
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/icons/tailwind3.css";
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```css
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/icons/tailwind3.css";
```

{% endtabcontent %}

{% endtabcontents %}

> The icon stylesheet is the same for all three editors — import it once per theme you use.

### CDN reference

Match the version in the CDN URL to your installed `@syncfusion/ej2-*` packages to prevent icon mismatches.

```html
<link
  href="https://cdn.syncfusion.com/ej2/<version>/ej2-icons/styles/tailwind3.css"
  rel="stylesheet"
/>
```

## Using the icon library

Add the `e-icons` class plus the specific icon class to an HTML element. For example, the Bold tool icon:

```html
<span class="e-icons e-bold"></span>
```

Each glyph is defined as a `:before` pseudo-element:

```css
.e-bold:before {
  content: '\e33d';
}
```

### Icon size

The `ej2-icons` package provides utility classes to scale icons:

| Class | Size |
| --- | --- |
| `e-small` | 8px |
| `e-medium` | 16px |
| `e-large` | 24px |

```html
<span class="e-icons e-small e-search"></span>
<span class="e-icons e-medium e-search"></span>
<span class="e-icons e-large e-search"></span>
```

## Customizing icons

Override styles on the `e-icons` class or on a specific icon element to change color, alignment, or font-family. For deeper customization (such as custom font glyphs in a custom toolbar tool), see [Custom Tools](../components/rich-text-editor/tools/custom-tools).

```css
.e-rte-custom-icon::before {
  content: '\e700';
  font-family: 'MyCustomFont';
}
```

## Available icons

The full icon library is available per theme at [https://ej2.syncfusion.com/react/documentation/appearance/icons#available-icons](https://ej2.syncfusion.com/react/documentation/appearance/icons#available-icons). All themes' icons render the same glyphs; only the visual weight and primary color change with the theme.

## See also

* [Built-in Themes](./built-in-themes)
* [Size Modes](./size-modes)
* [Custom Tools](../components/rich-text-editor/tools/custom-tools)
