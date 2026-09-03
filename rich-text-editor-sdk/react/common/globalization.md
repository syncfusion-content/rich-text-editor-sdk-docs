---
layout: post
title: Globalization for React Rich Text Editor | Syncfusion
description: Localize and internationalize the Syncfusion React Rich Text Editor — translate UI text with L10n, format dates and numbers with CLDR data, switch cultures at runtime, and enable RTL for Arabic, Hebrew, and Persian.
control: Common
platform: rich-text-editor-sdk
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Globalization for the React Rich Text Editor

Globalization lets the React Rich Text Editor adapt to different cultures, languages, and regional formats. It has two parts:

- **Internationalization (i18n)** — formats dates, numbers, and currencies using the rules of a chosen culture.
- **Localization (l10n)** — translates the editor's user-facing text (toolbar labels, dialogs, tooltips) into a chosen language.

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor supports both out of the box, plus right-to-left (RTL) layout for languages like Arabic, Hebrew, and Persian.

## Quick start

By default, the React Rich Text Editor uses the **en-US** culture and **USD** currency. Switch globally with two API calls and a single `L10n.load()` for UI text.

```bash
npm install @syncfusion/ej2-react-richtexteditor @syncfusion/ej2-cldr-data @syncfusion/ej2-locale
```

```ts
import { L10n, loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import deNumberData from '@syncfusion/ej2-cldr-data/main/de/numbers.json';
import deTimeZoneData from '@syncfusion/ej2-cldr-data/main/de/timeZoneNames.json';
import deGregorian from '@syncfusion/ej2-cldr-data/main/de/ca-gregorian.json';
import deCurrencies from '@syncfusion/ej2-cldr-data/main/de/currencies.json';
import numberingSystems from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

loadCldr(deNumberData, deTimeZoneData, deGregorian, deCurrencies, numberingSystems);

L10n.load({
  'de-DE': {
    'richtexteditor': {
      'bold': 'Fett',
      'italic': 'Kursiv',
      'underline': 'Unterstrichen',
      'createLink': 'Link einfügen',
      'image': 'Bild einfügen',
      'undo': 'Rückgängig',
      'redo': 'Wiederherstellen'
    }
  }
});

setCulture('de-DE');
setCurrencyCode('EUR');
```

> Call `loadCldr()` and `L10n.load()` **before** `setCulture()` and **before** the editor renders.

## What gets globalized

| Area | What changes |
| --- | --- |
| Date / time | `MM/dd/yyyy` vs `dd/MM/yyyy` patterns |
| Numbers | Decimal and grouping separators (`1,234.56` vs `1.234,56`) |
| Currency | Symbol, placement, and code |
| UI text | Toolbar, dialogs, tooltips, aria labels (single `richtexteditor` scope) |
| Text direction | RTL for Arabic, Hebrew, Persian (see [Right-to-Left support](#right-to-left-rtl-support)) |

## Internationalization (i18n)

Internationalization formats and parses dates, numbers, and currencies per culture. The Syncfusion i18n library uses official [Unicode CLDR](https://cldr.unicode.org/) JSON data.

**Defaults:** culture `en-US`, currency `USD`. Override globally with `setCulture()` and `setCurrencyCode()`.

### Required CLDR files

Call `loadCldr()` **before** `setCulture()` and **before** the editor initializes. Replace the `de` segment in the paths with your culture code (`fr`, `ar`, `ja`, and so on).

| File | Path |
| --- | --- |
| ca-gregorian | `@syncfusion/ej2-cldr-data/main/en/ca-gregorian.json` |
| timeZoneNames | `@syncfusion/ej2-cldr-data/main/en/timeZoneNames.json` |
| numbers | `@syncfusion/ej2-cldr-data/main/en/numbers.json` |
| currencies | `@syncfusion/ej2-cldr-data/main/en/currencies.json` |
| numberingSystems | `@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json` |

**Combined bundle** (first four files): `@syncfusion/ej2-cldr-data/main/en/all.json`. `numberingSystems` is still separate.

> For `en-US`, the library preloads required data — explicit `loadCldr()` is optional.

### Number formatting

Number formatting and parsing use the [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/) interface.

**Built-in options**

| Property | Description |
| --- | --- |
| `format` | Format type: **N** (numeric), **C** (currency), **P** (percentage). |
| `minimumFractionDigits` / `maximumFractionDigits` | Fraction digits, 0–20. |
| `minimumSignificantDigits` / `maximumSignificantDigits` | Significant digits, 1–21. |
| `useGrouping` | Enable group separator. Default `true`. |
| `minimumIntegerDigits` | Minimum integer digits, 1–21. |
| `currency` | Currency code for currency formatting. |

> `minimumIntegerDigits`, `minimumFractionDigits`, and `maximumFractionDigits` belong to group one. `minimumSignificantDigits` and `maximumSignificantDigits` belong to group two. If group two is set, group one is ignored.

**Custom patterns**

| Specifier | Meaning | Example | Output |
| --- | --- | --- | --- |
| `0` | Digit or `0` if absent. | `formatNumber(123, { format: '0000' })` | `'0123'` |
| `#` | Digit or nothing if absent. | `formatNumber(1234, { format: '####' })` | `'1234'` |
| `.` | Decimal point. | `formatNumber(546321, { format: '###0.##0#' })` | `'546321.000'` |
| `%` | Percentage. | `formatNumber(1, { format: '0000 %' })` | `'0100 %'` |
| `$` | Currency using global code. | `formatNumber(13, { format: '$ ###.00' })` | `'$ 13.00'` |
| `;` | Separate positive / negative / zero formats. | `formatNumber(-120, { format: '###.##;(###.00);-0' })` | `'(120.00)'` |
| `'…'` | Literal text. | `formatNumber(-123.44, { format: "####.## '@'" })` | `'123.44 @'` |

> When you supply a custom pattern, other `NumberFormatOptions` are ignored.

**Format and parse**

```ts
import { getNumberFormat, getNumberParser } from '@syncfusion/ej2-base';

const format = getNumberFormat({ format: 'C', currency: 'EUR' });
format(1234.5);                  // e.g. "1.234,50 €"

const parse = getNumberParser({ format: 'N', useGrouping: true });
parse("1,234.5");                // 1234.5
```

### Date formatting

Date formatting and parsing use the [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/) interface.

| Option | Description |
| --- | --- |
| `type` | Format type: **date**, **dateTime**, **time**. |
| `skeleton` | Preset pattern: `short`, `medium`, `long`, `full`. |
| `format` | Custom pattern such as `dd/MM/yyyy`, `MMM yyyy`, `EEEE, MMMM d, yyyy`. |
| `calendar` | Calendar system, for example `gregorian`, `islamic`. |

**Format and parse**

```ts
import { getDateFormat, getDateParser } from '@syncfusion/ej2-base';

const format = getDateFormat({ type: 'date', skeleton: 'long' });
format(new Date(2026, 7, 4));    // e.g. "August 4, 2026"

const parse = getDateParser({ type: 'date', format: 'dd/MM/yyyy' });
parse('04/08/2026');             // Date object
```

## Localization (l10n)

Localization translates the editor's UI text — toolbar labels, tooltips, dialog messages, table-editor text, image / audio / video dialog text, and placeholders — into different languages.

### Register translations

Register translations with `L10n.load()` under the `richtexteditor` scope and call `setCulture()`.

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
  'de-DE': {
    'richtexteditor': {
      'bold': 'Fett',
      'italic': 'Kursiv',
      'underline': 'Unterstrichen',
      'createLink': 'Link einfügen',
      'image': 'Bild einfügen',
      'undo': 'Rückgängig',
      'redo': 'Wiederherstellen'
    }
  }
});

setCulture('de-DE');
```

> Call `L10n.load()` **before** `setCulture()` and **before** the editor initializes.

### How translations work

- The translation key under each culture code (for example `'richtexteditor'`) must match the component's locale scope.
- You only need to override the keys you want to translate — missing keys fall back to `en-US`.
- The `ej2-locale` package ships JSON files for most common languages; use it before writing custom translations.
- For dates, numbers, and currencies, also load the [CLDR data](#internationalization-i18n) for the target culture.

### Load translations from a JSON file

Pre-built JSON files for every supported language are available at [github.com/syncfusion/ej2-locale](https://github.com/syncfusion/ej2-locale). Fetch the file for your language, then load it with `L10n.load()`:

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';
import frLocale from './locales/fr.json';

L10n.load({ 'fr-FR': frLocale });
setCulture('fr-FR');
```

### Switch the current locale

To change the active language, load the new translations and call `setCulture()`:

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

function switchToGerman() {
  L10n.load({
    'de-DE': {
      'richtexteditor': {
        'bold': 'Fett',
        'italic': 'Kursiv',
        'createLink': 'Link einfügen'
      }
    }
  });
  setCulture('de-DE');
}
```

After switching, trigger a re-render of the editor in the new locale. In React, a state update is enough.

## Performance and best practices

- The `setCulture()` code must match the culture segment in the CLDR paths you loaded.
- `getNumberFormat` and `getDateFormat` return reusable functions — create them once and reuse for performance.
- For locales that use non-Latin digits (Arabic, Thai), ensure `numberingSystems` is loaded.
- The CLDR data package replaces the third-party `cldr-data` package to avoid known vulnerabilities.
- Load only the translations and CLDR data your app uses. In SPAs, load once at startup. In multi-page apps, lazy-load per route.

## Troubleshooting

### Translations not appearing

- `L10n.load()` must run **before** any component renders.
- The `setCulture()` code must match the locale code used in the loaded translations.
- If the editor has a `locale` property, it must match the loaded culture.
- For the target culture, also load the matching [CLDR data](#internationalization-i18n).

### Missing translation keys

- Check the browser console for missing-key warnings.
- Compare the loaded structure against the component's string table.
- Verify the expected hierarchy: `{ '<culture>': { 'richtexteditor': { '<key>': '<text>' } } }`.

### Dates or numbers not formatting

- Load CLDR data for the target culture (see [Internationalization](#internationalization-i18n)).
- Confirm `setCulture()` uses the correct culture code.
- Include all five required files: `numbers`, `ca-gregorian`, `timeZoneNames`, `currencies`, `numberingSystems`.

## Right-to-Left (RTL) Support

Right-to-Left (RTL) layout support is essential for applications that serve users who read and write in languages such as **Arabic, Hebrew, and Persian**. RTL rendering ensures that the editor's UI elements, text alignment, icon positioning, and navigation patterns all flow in the natural reading direction of these languages, providing an intuitive and culturally appropriate user experience.

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor provides built-in RTL support through the `enableRtl` property. When set to `true`, the property applies the `e-rtl` CSS class to the component, automatically rendering all internal elements and layout structures in a right-to-left direction. This affects text alignment, icon positioning, navigation flow, and component-specific layouts without requiring manual CSS adjustments.

### Enable RTL for the editor

```typescript
import { RichTextEditorComponent, Inject, Toolbar, HtmlEditor } from '@syncfusion/ej2-react-richtexteditor';

export default function App() {
  return (
    <RichTextEditorComponent enableRtl={true}>
      <p>مرحبًا بك في محرر النصوص الغنية.</p>
      <Inject services={[Toolbar, HtmlEditor]} />
    </RichTextEditorComponent>
  );
}
```

## See also

* [Quick Start for the React Rich Text Editor](../rich-text-editor/getting-started)
* [Accessibility](../../common/accessibility)
* [Browser support](../../common/browser-support)
* [Version compatibility](../../common/version-compatibility)
* [ej2-locale GitHub Repository](https://github.com/syncfusion/ej2-locale)
