---
layout: post
title: Accessibility in Angular Block Editor | Syncfusion
description: Learn about accessibility in the Angular Block Editor, including WAI-ARIA roles, keyboard navigation, screen reader support, and WCAG 2.2 compliance.
platform: rich-text-editor-sdk
control: Block Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Accessibility in Angular Block Editor

The Block Editor component is designed to be accessible and follows widely accepted guidelines and standards, including [ADA](https://www.ada.gov/), [Section 508](https://www.section508.gov/), [WCAG 2.2](https://www.w3.org/TR/WCAG22/), and the [WAI-ARIA roles](https://www.w3.org/TR/wai-aria#roles) specification.

The accessibility compliance for the Block Editor component is summarized in the table below.

| Accessibility Criteria | Compatibility |
| -- | -- |
| [WCAG 2.2 Support](https://ej2.syncfusion.com/angular/documentation/common/accessibility#accessibility-standards) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Section 508 Support](https://ej2.syncfusion.com/angular/documentation/common/accessibility#accessibility-standards) |<img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Screen Reader Support](https://ej2.syncfusion.com/angular/documentation/common/accessibility#screen-reader-support) | <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> |
| [Right-To-Left Support](https://ej2.syncfusion.com/angular/documentation/common/accessibility#right-to-left-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Color Contrast](https://ej2.syncfusion.com/angular/documentation/common/accessibility#color-contrast) | <img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> |
| [Mobile Device Support](https://ej2.syncfusion.com/angular/documentation/common/accessibility#mobile-device-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Keyboard Navigation Support](https://ej2.syncfusion.com/angular/documentation/common/accessibility#keyboard-navigation-support) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |
| [Accessibility Checker Validation](https://ej2.syncfusion.com/angular/documentation/common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> |
| [Axe-core Accessibility Validation](https://ej2.syncfusion.com/angular/documentation/common/accessibility#ensuring-accessibility) | <img src="https://cdn.syncfusion.com/content/images/landing-page/yes.png" alt="Yes"> |

**Legend**

| Icon | Meaning |
|------|---------|
| <img src="https://cdn.syncfusion.com/content/images/documentation/full.png" alt="Yes"> | All features of the component meet the requirement. |
| <img src="https://cdn.syncfusion.com/content/images/documentation/partial.png" alt="Intermediate"> | Some features of the component do not meet the requirement. |
| <img src="https://cdn.syncfusion.com/content/images/documentation/not-supported.png" alt="No"> | The component does not meet the requirement. |

> The **Color Contrast** row reflects the component's built-in default theme. If you apply a custom theme, ensure the text/background combinations in the editor, menus, and toolbars meet your target WCAG contrast ratio (4.5:1 for normal text).

## WAI-ARIA attributes

The following ARIA attributes are recommended for the Block Editor to improve discoverability and operable by assistive technologies.

| Attribute | Purpose |
|---|---|
| `contenteditable="true"` + `role="textbox"` | Marks the editable block container as an editable text region. The editable region must have an accessible name to satisfy input-field-name checks. |
| `role="toolbar"` | Applied to inline formatting toolbars and action-menu containers to group related controls for assistive technologies. |
| `role="grid"` | Table blocks are exposed as a grid/table for screen readers and keyboard navigation; ensure header cells (`th`) and proper `scope`/`headers` attributes are present. |
| `role="img"` | Ensure accessible name is present for informative images. |
| `aria-label` / `aria-labelledby` | Provides the accessible name for the editor, toolbar, or specific editable region. |
| `aria-orientation` | Specifies the orientation of the toolbar. |
| `aria-disabled` | Indicates whether the toolbar or element is currently disabled and not interactive. |
| `aria-haspopup` / `aria-expanded` | Used by menus and popups (command/context/action menus). `aria-expanded` reflects open/closed state. |
| `aria-hidden` | Hides non-interactive or off screen content (e.g., closed popups) from assistive technologies. |

## Keyboard interaction

The Block Editor component follows the [WAI-ARIA Authoring Practices keyboard interaction](https://www.w3.org/WAI/ARIA/apg/practices/keyboard-interface/) guidelines, making it easier for people who use assistive technologies (AT) or rely solely on keyboard navigation. The component supports a variety of keyboard shortcuts for common actions such as inserting, navigating, formatting, and removing blocks.

For a complete list of keyboard shortcuts, refer to the [Keyboard shortcuts](https://ej2.syncfusion.com/angular/documentation/block-editor/keyboard-shortcuts) page.

## Ensuring accessibility

The accessibility of the Block Editor component is continuously verified with [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) during automated testing.

## See also

* [Accessibility in Syncfusion<sup style="font-size:70%">&reg;</sup> Angular components](https://ej2.syncfusion.com/angular/documentation/common/accessibility)