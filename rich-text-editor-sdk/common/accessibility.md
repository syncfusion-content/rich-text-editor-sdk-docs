---
layout: post
title: Accessibility Support for Rich Text Editor SDK | Syncfusion
description: Learn about accessibility standards, WCAG 2.2 compliance, Section 508, WAI-ARIA, keyboard navigation, and screen reader support in the Syncfusion Rich Text Editor SDK.
platform: rich-text-editor-sdk
control: Accessibility
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Accessibility in the Rich Text Editor SDK

The Syncfusion<sup style="font-size:70%">&reg;</sup> Rich Text Editor SDK is built to be usable by people with disabilities. Every component — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — ships with high-contrast themes, semantic markup, full keyboard navigation, and WAI-ARIA attributes that work with screen readers and other assistive technologies. The same accessibility guarantees apply across every framework in the SDK (React, Angular, Vue, JavaScript, ASP.NET Core / MVC, Blazor, MAUI).

## Accessibility Overview

Accessibility means making user-interface components usable by everyone. For the Rich Text Editor SDK this includes:

- High-contrast, theme-driven visuals
- Readable typography and scalable text
- Alternative text for inserted images, audio, and video
- Full keyboard navigation
- WAI-ARIA roles, states, and properties for assistive-technology compatibility
- Right-to-Left (RTL) layout support (see [Right-to-Left support](../react/common/globalization#right-to-left-rtl-support))

## Accessibility Standards

The Rich Text Editor SDK conforms to the following standards.

### ADA (Americans with Disabilities Act)

The [Americans with Disabilities Act](https://www.ada.gov/) is a comprehensive civil rights law that prohibits discrimination based on disability and requires equal access to digital experiences.

### WCAG 2.2 (Web Content Accessibility Guidelines)

The [WCAG 2.2](https://www.w3.org/WAI/standards-guidelines/wcag/) guidelines are published by the World Wide Web Consortium (W3C) and are organized under four principles: **Perceivable, Operable, Understandable, and Robust (POUR)**.

### Section 508

[Section 508](https://www.section508.gov/) establishes U.S. federal requirements for electronic and information technology accessibility. The standards are aligned with WCAG.

### WAI-ARIA (Accessible Rich Internet Applications)

[WAI-ARIA](https://www.w3.org/WAI/ARIA/) provides roles, states, and properties for dynamic content and rich internet applications, ensuring compatibility with screen readers and other assistive technologies.

### Keyboard Navigation

[Keyboard navigation](https://www.w3.org/TR/WCAG22/#keyboard-accessible) allows users to interact with the interface using only a keyboard — essential for users who cannot operate a mouse or pointing device. The Rich Text Editor is fully operable from the keyboard, including the toolbar, quick toolbar, image / audio / video dialogs, table editor, and link editor.

## Accessibility Compliance

The Rich Text Editor SDK applies the following approaches to validate and maintain accessibility.

### Compliance Methodologies

#### WAI-ARIA Pattern Implementation

The Rich Text Editor, Block Editor, and Markdown Editor follow [WAI-ARIA Authoring Practices](https://www.w3.org/WAI/ARIA/apg/patterns/) — applying the appropriate roles, states, and properties for toolbars, dialogs, menus, lists, and content regions.

#### Manual and Automated Testing

- **Manual testing** — components are tested with [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows) and [VoiceOver](https://www.apple.com/accessibility/voiceover/) (macOS).
- **Automated testing** — components are scanned with tools such as [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core).

#### ARIA attribute management

Each component receives a suitable `role` attribute and dynamically updates ARIA attributes (for example, `aria-pressed`, `aria-expanded`, `aria-label`, `aria-disabled`) to accurately reflect state changes to assistive technologies.

## Accessibility Features

### Screen Reader Support

The Rich Text Editor, Block Editor, and Markdown Editor are compatible with major screen readers, including:

- [Narrator](https://support.microsoft.com/en-us/windows/complete-guide-to-narrator-e4397a0d-ef4f-b386-d8ae-c172f109bdb1) (Windows)
- [VoiceOver](https://www.apple.com/accessibility/voiceover/) (macOS and iOS)
- JAWS (Windows)
- NVDA (Windows)

### Right-to-Left Support

Built-in RTL rendering for languages such as Arabic, Hebrew, and Persian. See [Right-to-Left support](../react/common/globalization#right-to-left-rtl-support).

### Color Contrast

Predefined themes meet WCAG 2.2 Level AA contrast ratios (4.5:1 for normal text and 3:1 for large text). Custom themes should be validated with a contrast checker to maintain these ratios. See the [Themes](../react/themes/built-in-themes) page (per-framework equivalents exist).

### Mobile Device Support

The editors are responsive, adapt to different screen sizes and orientations, and provide touch-friendly interactions on phones and tablets.

### Keyboard Navigation Support

Comprehensive keyboard support allows interaction without a mouse. Standard patterns include:

| Key | Action |
| --- | --- |
| **Tab** / **Shift + Tab** | Move focus forward / backward through the toolbar, content area, and dialogs |
| **Enter** / **Space** | Activate toolbar buttons, menu items, and dialog controls |
| **Arrow Keys** | Navigate within dropdowns, the table editor, the block menu, and the slash menu |
| **Escape** | Close any open dialog, dropdown, or quick toolbar |
| **Home** / **End** | Jump to the first / last item in a list, grid, or block menu |
| **Ctrl + Z** / **Ctrl + Y** | Undo / Redo in the content area |

For the complete keyboard map, see the per-component shortcuts page in your framework (for example, the Rich Text Editor shortcuts for [React](../react/rich-text-editor/keyboard-support), Angular, Vue, Blazor, and so on).

## Ensuring Accessibility

Accessibility is maintained through:

### Automated Testing

Tools such as [accessibility-checker](https://www.npmjs.com/package/accessibility-checker) and [axe-core](https://www.npmjs.com/package/axe-core) continuously scan the components for compliance issues.

### Manual testing

Manual evaluation with screen readers (Narrator, VoiceOver) verifies correct labeling, state announcements, and interaction behavior.

### Continuous Improvement

- Regular internal audits
- User-reported issues and feedback
- Alignment with evolving standards
- Advances in assistive-technology support

## Voluntary Product Accessibility Template (VPAT)

The [Voluntary Product Accessibility Template (VPAT)](https://www.itic.org/policy/accessibility/vpat) documents conformance to accessibility standards such as Section 508, WCAG 2.2, and EN 301 549.

Download the latest **Syncfusion<sup style="font-size:70%">&reg;</sup> VPAT**: [VPAT Document](https://ej2.syncfusion.com/accessibility/Syncfusion-VPAT2.5.docx).

## Accessibility support across the SDK components

| Component | Section 508 | WCAG 2.2 | Keyboard navigation | Component accessibility page |
| --- | --- | --- | --- | --- |
| Rich Text Editor | Yes | AA | Yes | [React](../react/rich-text-editor/accessibility) (per-platform equivalents exist) |
| Block Editor | Yes | AA | Yes | [React](../react/block-editor/accessibility) |
| Markdown Editor | Yes | AA | Yes | [React](../react/markdown-editor/accessibility) |

> All three editors support full keyboard navigation. Each component publishes a framework-specific accessibility page with its detailed keyboard map, ARIA roles, and screen-reader test results.

## See also

* [Right-to-Left support](../react/common/globalization#right-to-left-rtl-support)
* [Globalization](../react/common/globalization#globalization-for-the-react-rich-text-editor)
* [Browser support](./browser-support)
* [Themes](../react/themes/built-in-themes)
* [WAI-ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
* [WCAG 2.2 Guidelines](https://www.w3.org/TR/WCAG22/)
