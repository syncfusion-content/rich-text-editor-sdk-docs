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

The Essential<sup style="font-size:70%">&reg;</sup> JS 2 icon package includes a comprehensive library of icons across multiple themes. Each theme demo below shows the icon name, CSS class, and visual preview.

<!-- markdownlint-disable MD033 -->

### Material 3

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/material3/demo.html" style="height:1000px;width:100%;" title="Material 3 icons preview" loading="lazy"></iframe>

### Material

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/material/demo.html" style="height:1000px;width:100%;" title="Material icons preview" loading="lazy"></iframe>

### Fabric

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fabric/demo.html" style="height:1000px;width:100%;" title="Fabric icons preview" loading="lazy"></iframe>

### Bootstrap

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap/demo.html" style="height:1000px;width:100%;" title="Bootstrap icons preview" loading="lazy"></iframe>

### Bootstrap 4

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap4/demo.html" style="height:1000px;width:100%;" title="Bootstrap 4 icons preview" loading="lazy"></iframe>

### Bootstrap 5

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/bootstrap5/demo.html" style="height:1000px;width:100%;" title="Bootstrap 5 icons preview" loading="lazy"></iframe>

### High Contrast

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/highcontrast/demo.html" style="height:1000px;width:100%;" title="High Contrast icons preview" loading="lazy"></iframe>

### Tailwind CSS

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/tailwind/demo.html" style="height:1000px;width:100%;" title="Tailwind CSS icons preview" loading="lazy"></iframe>

### Tailwind 3.4

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/tailwind3/demo.html" style="height:1000px;width:100%;" title="Tailwind 3.4 icons preview" loading="lazy"></iframe>

### Fluent 2

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fluent2/demo.html" style="height:1000px;width:100%;" title="Fluent 2 icons preview" loading="lazy"></iframe>

### Fluent

<iframe class="doc-sample-frame" src="https://ej2.syncfusion.com/products/icons/fluent/demo.html" style="height:1000px;width:100%;" title="Fluent icons preview" loading="lazy"></iframe>

## See also

* [Built-in Themes](./built-in-themes)
* [Size Modes](./size-modes)
* [Custom Tools](../components/rich-text-editor/tools/custom-tools)
