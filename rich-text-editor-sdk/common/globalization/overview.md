---
layout: post
title: Globalization Overview for Rich Text Editor SDK | Syncfusion
description: Learn how the Syncfusion Rich Text Editor SDK supports globalization, including internationalization (i18n) and localization (l10n) for the Rich Text Editor, Block Editor, and Markdown Editor.
platform: rich-text-editor-sdk
control: Globalization Overview
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Globalization Overview for the Rich Text Editor SDK

Globalization lets the Rich Text Editor SDK adapt to different cultures, languages, and regional formats. It has two parts:

- **Internationalization (i18n)** — formats dates, numbers, and currencies using the rules of a chosen culture.
- **Localization (l10n)** — translates the editor's user-facing text (toolbar labels, dialogs, tooltips) into a chosen language.

The Rich Text Editor SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — supports both out of the box across every framework in the SDK.

## Quick start

By default, every Syncfusion<sup style="font-size:70%">&reg;</sup> component uses the **en-US** culture and **USD** currency. Install the CLDR data package and switch globally:

```bash
npm install @syncfusion/ej2-cldr-data
```

```ts
import { setCulture, setCurrencyCode } from '@syncfusion/ej2-base';

setCulture('de');
setCurrencyCode('EUR');
```

For UI text, install the locale package for your editor and call `L10n.load()` before `setCulture()`. The snippets below show one locale-scope per editor in the SDK.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

Install the [locale package](https://www.npmjs.com/package/@syncfusion/ej2-locale) and register translations under the `richtexteditor` scope:

```bash
npm install @syncfusion/ej2-locale
```

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
  'de-DE': { 'richtexteditor': { 'bold': 'Fett', 'italic': 'Kursiv' } }
});

setCulture('de-DE');
```

{% endtabcontent %}

{% tabcontent Block Editor %}

Install the [locale package](https://www.npmjs.com/package/@syncfusion/ej2-locale) and register translations under the `blockeditor` scope:

```bash
npm install @syncfusion/ej2-locale
```

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
  'de-DE': { 'blockeditor': { 'paragraph': 'Absatz', 'heading': 'Überschrift' } }
});

setCulture('de-DE');
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

Install the [locale package](https://www.npmjs.com/package/@syncfusion/ej2-locale) and register translations under the `markdowneditor` scope:

```bash
npm install @syncfusion/ej2-locale
```

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
  'de-DE': { 'markdowneditor': { 'bold': 'Fett', 'italic': 'Kursiv' } }
});

setCulture('de-DE');
```

{% endtabcontent %}

{% endtabcontents %}

> The three locale scopes — `richtexteditor`, `blockeditor`, and `markdowneditor` — are independent. Load the scopes for the editors your app uses.

## What gets globalized

| Area | What changes | Where to start |
| --- | --- | --- |
| Date / time | `MM/dd/yyyy` vs `dd/MM/yyyy` patterns | [Internationalization](./internationalization) |
| Numbers | Decimal and grouping separators (`1,234.56` vs `1.234,56`) | [Internationalization](./internationalization) |
| Currency | Symbol, placement, and code | [Internationalization](./internationalization) |
| UI text | Toolbar, dialogs, tooltips, aria labels | [Localization](./localization) |
| Text direction | RTL for Arabic, Hebrew, Persian | [Right-to-Left support](../right-to-left) |

## Key points to remember

- **No setup required to render the editor.** Out of the box it works in `en-US`.
- **Set culture once at app startup.** `setCulture()`, `setCurrencyCode()`, and `L10n.load()` are global — call them before components initialize.
- **The SDK exposes three locale scopes.** Rich Text Editor uses the `richtexteditor` scope; Block Editor uses `blockeditor`; Markdown Editor uses `markdowneditor`.
- **RTL needs separate setup.** For Arabic, Hebrew, and other RTL cultures, enable RTL support — globalization only handles data, not layout direction.
- **Runtime switching works the same in every framework.** Call `L10n.load()` with the new translations, update the culture, then trigger a re-render of the editor in the new locale.
- **Load only what you need.** For best performance, load only the CLDR data and translations for the cultures your users actually use.

## Learn more

- [Localization](./localization) — translate UI text and switch languages at runtime.
- [Internationalization](./internationalization) — format and parse dates, numbers, and currencies per culture.
- [Right-to-Left support](../right-to-left) — RTL layout for Arabic, Hebrew, Persian, and more.

## See also

* [Accessibility](../accessibility)
* [Browser support](../browser-support)
* [Version compatibility](../version-compatibility)
