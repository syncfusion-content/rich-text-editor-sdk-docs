---
layout: post
title: Syncfusion Rich Text Editor SDK Themes | Syncfusion
description: Learn about the built-in themes, dark mode, theme customization, and Theme Studio available for the Syncfusion Rich Text Editor SDK across supported platforms.
platform: rich-text-editor-sdk
control: Rich Text Editor
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Themes

The Rich Text Editor SDK is shipped with a unified set of Syncfusion built-in themes that are shared across all of the included editors — Rich Text Editor, Block Editor, and Markdown Editor — and across all of the supported platforms. The same theme identifiers, the same dark mode variants, and the same customization model apply to the TypeScript, JavaScript, React, Angular, Vue, ASP.NET Core MVC, and .NET MAUI integrations.

The Rich Text Editor and Markdown Editor inherit the Syncfusion Essential JS 2 themes. The Block Editor shares the same theme variables so a single stylesheet consistently styles every editor in your application.

> For platform-specific installation steps — such as which stylesheet to import into `styles.css`, `_Layout.cshtml`, `index.html`, or the MAUI host project — see the **Themes** section of the platform’s getting-started guide.

---

## Theme overview

A Syncfusion theme is a single CSS (and accompanying SCSS) bundle that defines the visual design tokens used by every component in the suite — colors, typography, spacing, shadows, borders, focus states, and component-level state colors. The Rich Text Editor SDK is a consumer of those tokens, so the editor, its toolbar, dialogs, popups, slash menu, dropdowns, and content area all share the same look-and-feel defined by the active theme.

Because the themes are applied at the CSS layer, switching the editor to a different look does not require code changes, rebuilds, or component re-instantiation. The theme is selected by the stylesheet you reference in the host application.

The same theme identifier always resolves to the same visual design across every supported platform. A button looks the same in React, Angular, and ASP.NET Core MVC when the same theme is applied. This makes it safe to use one theme for an end-to-end product that mixes frameworks, and it makes the migration between themes — for example, adopting your company’s design system — a one-time stylesheet change.

---

## Available themes

The Rich Text Editor SDK supports the full set of Syncfusion built-in themes. Each theme is available in a **light** variant for normal usage and, where applicable, a matching **dark** variant for dark mode scenarios.

### Latest themes (recommended)

The following themes reflect the most recent design systems and are the recommended starting point for new applications.

| Theme | Light stylesheet | Dark stylesheet |
| --- | --- | --- |
| Tailwind 3.4 | `tailwind3.css` | `tailwind3-dark.css` |
| Bootstrap 5.3 | `bootstrap5.3.css` | `bootstrap5.3-dark.css` |
| Fluent 2 | `fluent2.css` | `fluent2-dark.css` |
| Material 3 | `material3.css` | `material3-dark.css` |

### Legacy themes

The following themes remain available for existing applications and to match a host design system that is not on the latest version.

| Theme | Light stylesheet | Dark stylesheet |
| --- | --- | --- |
| Bootstrap 5 | `bootstrap5.css` | `bootstrap5-dark.css` |
| Bootstrap 4 | `bootstrap4.css` | — |
| Bootstrap 3 | `bootstrap.css` | `bootstrap-dark.css` |
| Google’s Material | `material.css` | `material-dark.css` |
| Tailwind CSS | `tailwind.css` | `tailwind-dark.css` |
| Fluent | `fluent.css` | `fluent-dark.css` |
| Microsoft Office Fabric | `fabric.css` | `fabric-dark.css` |

### Accessibility theme

| Theme | Stylesheet | Purpose |
| --- | --- | --- |
| High Contrast | `highcontrast.css` | Designed for accessibility-focused experiences |

> The **Bootstrap 3** theme is based on Bootstrap v3 and is also compatible with Bootstrap v4 applications. **Bootstrap 4** is based on v4.3 and is compatible with v4.6 applications.

### Optimized (lite) stylesheets

Every theme is also distributed in an **optimized** form that omits the *bigger* size mode. The optimized stylesheet uses the same name as the standard theme with a `-lite` suffix — for example, `fluent2-lite.css` or `material3-dark-lite.css`.

Use the standard stylesheet when the application requires both normal and bigger size modes (for example, touch-optimized or accessibility-enhanced interfaces). Use the optimized stylesheet when the application only needs standard-sized controls and you want a smaller CSS payload and faster load times.

---

## Theme packages

Built-in themes are distributed as theme packages that include both combined and per-component stylesheets in CSS and SCSS formats. The same package layout is used for every platform, so the package names and file paths below apply to all integrations that consume the same theme system.

The following table lists the available theme packages. Replace the theme name placeholder with the value from the first column (for example, `tailwind3`, `fluent2`, `material3`).

| Theme | Light package | Dark package |
| --- | --- | --- |
| Tailwind 3 | `@syncfusion/ej2-tailwind3-theme` | `@syncfusion/ej2-tailwind3-dark-theme` |
| Bootstrap 5.3 | `@syncfusion/ej2-bootstrap5.3-theme` | `@syncfusion/ej2-bootstrap5.3-dark-theme` |
| Fluent 2 | `@syncfusion/ej2-fluent2-theme` | `@syncfusion/ej2-fluent2-dark-theme` |
| Material 3 | `@syncfusion/ej2-material3-theme` | `@syncfusion/ej2-material3-dark-theme` |
| Bootstrap 5 | `@syncfusion/ej2-bootstrap5-theme` | `@syncfusion/ej2-bootstrap5-dark-theme` |
| Bootstrap 4 | `@syncfusion/ej2-bootstrap4-theme` | — |
| Bootstrap 3 | `@syncfusion/ej2-bootstrap-theme` | `@syncfusion/ej2-bootstrap-dark-theme` |
| Material | `@syncfusion/ej2-material-theme` | `@syncfusion/ej2-material-dark-theme` |
| Tailwind | `@syncfusion/ej2-tailwind-theme` | `@syncfusion/ej2-tailwind-dark-theme` |
| Fluent | `@syncfusion/ej2-fluent-theme` | `@syncfusion/ej2-fluent-dark-theme` |
| Fabric | `@syncfusion/ej2-fabric-theme` | `@syncfusion/ej2-fabric-dark-theme` |
| High Contrast | `@syncfusion/ej2-highcontrast-theme` | — |

Each package contains:

- A **combined** stylesheet for every component in the suite.
- **Per-component** stylesheets for code-splitting and smaller bundles.
- Matching **SCSS** source files for variable-based customization.

---

## Theme customization

The Rich Text Editor SDK supports three complementary approaches to theme customization, all of which are consistent across platforms. Choosing between them depends on whether you want a one-off brand adjustment, a fork that lives alongside the original theme, or a fully custom design system.

### Switching themes

Switching the active theme is a stylesheet reference change. The same theme identifier can be used in every host, so the editor renders identically in each platform. To switch to a different theme, replace the current theme stylesheet with the stylesheet of the desired theme and refresh the application.

### Adjusting theme variables (SCSS)

Each theme exposes a set of SCSS variables that drive colors, typography, and component-state colors. Override the relevant variables before importing the theme SCSS to produce a customized bundle. The variable names are the same for every platform; the value of each variable is the same in light and dark variants of a given theme.

Common customization points include:

- `--color-sf-primary` and its `light`, `lighter`, `dark`, and `darker` shades for primary surfaces, buttons, and focus indicators.
- `--color-sf-success`, `--color-sf-info`, `--color-sf-warning`, and `--color-sf-danger` for state colors used by the editor’s validation, alerts, and status messaging.
- `--color-sf-background`, `--color-sf-surface`, and `--color-sf-on-surface` for the editor content area, dialogs, and popup surfaces.
- Typography tokens for the content area and the toolbar.

For Material 3, customization is performed through CSS custom properties rather than SCSS variables, allowing runtime overrides without recompiling the bundle.

### Generating a custom theme with Theme Studio

For a fully customized theme that includes a custom palette, a custom font, and component-level refinements, use the **Theme Studio**. Theme Studio is a web-based tool that lets you:

- Pick a base theme as the starting point.
- Adjust the primary, secondary, and state colors through a visual palette.
- Customize typography, border radius, and elevation tokens.
- Preview the result against representative components, including the editor and its toolbar.
- Download the result as a CSS or SCSS bundle, or as an npm-ready package, ready to be referenced in the host application.

The **Fusion** theme is an example of a theme that is generated through Theme Studio and is not part of the standard built-in set; it can only be downloaded from Theme Studio.

---

## Dark mode

Every modern built-in theme ships with a matching **dark** variant. Dark mode is therefore a stylesheet choice rather than a runtime configuration: you reference the `*-dark.css` stylesheet in the host, and every Syncfusion component — including the Rich Text Editor, its toolbar, dialogs, popups, slash menu, dropdowns, and the content area — automatically renders in dark mode.

### Choosing between light and dark

The recommended approach is to select the dark stylesheet as part of the application’s theme strategy, either:

- **Fixed theme** — choose a single stylesheet (light or dark) and reference it directly when the editor is initialized.
- **User-selectable** — expose a theme picker in the application, and swap the active stylesheet when the user changes the theme. Only one theme stylesheet should be active at a time.
- **System preference** — select the light or dark stylesheet based on the operating system or browser preference, and update the reference if the preference changes at runtime.

### High Contrast

The **High Contrast** theme is provided for accessibility-focused experiences. It uses high-contrast colors and clear focus indicators across every component, and is intended for users who require maximum visual differentiation between foreground and background elements. Like every other theme, it is selected by referencing its stylesheet and applies to the entire Syncfusion component surface.

---

## Theme Studio

Theme Studio is the supported way to produce a fully custom theme without writing SCSS by hand. The output of Theme Studio is a normal Syncfusion theme bundle that can be referenced the same way as any built-in theme.

Typical uses of Theme Studio include:

- Creating a branded theme that matches the company’s color palette and typography.
- Producing a custom dark theme with bespoke contrast and surface colors.
- Generating a custom theme that follows a third-party design system not covered by the built-in set.
- Producing a per-product theme when the same editor is used in multiple product lines with different visual identities.

Theme Studio also lets you select which components to include in the output, which is useful when you want a minimal stylesheet that contains only the editor’s styles.

---

## Best practices

Adopt the following practices when working with themes in the Rich Text Editor SDK.

- **Pick a single theme per application.** Mixing stylesheets from different theme families in the same view produces inconsistent visuals because each theme redefines the same design tokens.
- **Use the recommended themes for new applications.** The latest themes (Tailwind 3.4, Bootstrap 5.3, Fluent 2, Material 3) reflect current design system standards and receive ongoing improvements.
- **Use the optimized stylesheet when the bigger size mode is not required.** Switching from `<theme>.css` to `<theme>-lite.css` reduces the CSS payload without changing the editor’s appearance in normal size mode.
- **Customize through variables, not by editing the theme source.** Override the published SCSS variables or CSS custom properties to keep upgrades painless and to keep the customization reviewable in version control.
- **Use Theme Studio for full custom themes.** Hand-edited theme source is hard to maintain and conflicts with future Syncfusion updates; Theme Studio outputs a clean, regenerable bundle.
- **Treat dark mode as a first-class theme.** Provide a deliberate dark mode experience that uses the matching dark stylesheet, and avoid improvised dark mode using ad-hoc overrides on a light theme.
- **Use the High Contrast theme for accessibility scenarios.** It is purpose-built for users with low vision or high-contrast requirements and is preferred over a custom variant for accessibility use cases.

---

## See also

- [Overview](overview.md)
- [Accessibility](../common/accessibility)
- [Globalization / Localization](../react/common/globalization)
- [Release Notes](Release-Notes/)