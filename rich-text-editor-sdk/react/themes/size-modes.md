---
layout: post
title: Size Modes in React Rich Text Editor SDK | Syncfusion
description: Learn about size modes (normal and touch) for the Syncfusion React Rich Text Editor SDK and how to enable and customize them.
platform: rich-text-editor-sdk
control: Size Modes
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Size Modes

Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK components provide two size modes to support consistent experiences across devices: **normal** (default) and **touch** (bigger). These modes adapt the interface for mouse/keyboard and touch interactions, enhancing usability and accessibility.

## Overview of size modes

Size modes modify control dimensions, spacing, and tap/click target areas to suit different input methods:

- **Normal mode:** The default setting, optimized for mouse and keyboard input with standard control sizes.
- **Touch mode (bigger):** Increases control sizes and spacing to improve finger-target accuracy on touch-enabled and mobile devices.

## Enable size mode for the application

To enable touch mode (bigger) across the entire application, add the `e-bigger` class to the `<body>` element in `index.html`:

```html
<body class="e-bigger">
  ...
</body>
```

## Enable size mode for the editor

To enable touch mode for the Rich Text Editor only, apply the `e-bigger` class to its container element, or assign the class through the component's `cssClass` property.

```tsx
<RichTextEditorComponent cssClass="e-bigger">
    <p>Type or paste your content here.</p>
</RichTextEditorComponent>
```

## See also

* [Built-in Themes](./built-in-themes)
* [Icons](./icons)
