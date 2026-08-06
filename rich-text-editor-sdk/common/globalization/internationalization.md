---
layout: post
title: Internationalization for Rich Text Editor SDK | Syncfusion
description: Learn how to implement internationalization in the Syncfusion Rich Text Editor SDK using CLDR data to format and parse dates, numbers, and currencies across cultures.
platform: rich-text-editor-sdk
control: Internationalization
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Internationalization for the Rich Text Editor SDK

Internationalization (i18n) formats and parses dates, numbers, and currencies per culture. The Syncfusion<sup style="font-size:70%">&reg;</sup> i18n library uses official [Unicode CLDR](https://cldr.unicode.org/) JSON data and applies to every component in the SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — across React, Angular, Vue, JavaScript, ASP.NET (Core / MVC), Blazor, and MAUI.

**Defaults:** culture `en-US`, currency `USD`. Override globally with `setCulture()` and `setCurrencyCode()`.

> The editor delegates date / number / currency formatting to your app's culture. Setting the global culture also ensures helper widgets inside dialogs (such as the date picker) follow the right format.

## Quick start

Install the CLDR data package and load the files for your target culture. The i18n setup is shared across all three editors in the SDK — the snippet below applies to the Rich Text Editor, Block Editor, and Markdown Editor.

```bash
npm install @syncfusion/ej2-cldr-data
```

```ts
import { loadCldr, setCulture, setCurrencyCode } from '@syncfusion/ej2-base';
import deNumberData from '@syncfusion/ej2-cldr-data/main/de/numbers.json';
import deTimeZoneData from '@syncfusion/ej2-cldr-data/main/de/timeZoneNames.json';
import deGregorian from '@syncfusion/ej2-cldr-data/main/de/ca-gregorian.json';
import deCurrencies from '@syncfusion/ej2-cldr-data/main/de/currencies.json';
import numberingSystems from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

loadCldr(deNumberData, deTimeZoneData, deGregorian, deCurrencies, numberingSystems);
setCulture('de');
setCurrencyCode('EUR');
```

### Apply the culture to each editor

The culture set with `setCulture()` applies to every editor in the SDK. For UI text, register translations with `L10n.load()` under the matching scope — one per editor.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

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
```

{% endtabcontent %}

{% tabcontent Block Editor %}

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
  'de-DE': {
    'blockeditor': {
      'paragraph': 'Absatz',
      'heading': 'Überschrift',
      'insertLink': 'Link einfügen'
    }
  }
});

setCulture('de-DE');
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
  'de-DE': {
    'markdowneditor': {
      'bold': 'Fett',
      'italic': 'Kursiv',
      'createLink': 'Link einfügen'
    }
  }
});

setCulture('de-DE');
```

{% endtabcontent %}

{% endtabcontents %}

> For `en-US`, the library preloads required data — explicit `loadCldr()` is optional. The same `setCulture()` call covers all three editors; load each editor's locale scope only if you translate its UI text.

## Required files and order of operations

Call `loadCldr()` **before** `setCulture()` and **before** any component initializes. Replace the `de` segment in the paths with your culture code (`fr`, `ar`, `ja`, and so on). The five required files are `ca-gregorian`, `timeZoneNames`, `numbers`, `currencies`, and `numberingSystems`. For one-shot loading, use the combined `all.json` for the first four files; `numberingSystems` is still separate.

## CLDR file paths

Replace `en` with the desired culture code (for example, `de`, `fr`, `ar`):

| File | Path |
| --- | --- |
| ca-gregorian | `@syncfusion/ej2-cldr-data/main/en/ca-gregorian.json` |
| timeZoneNames | `@syncfusion/ej2-cldr-data/main/en/timeZoneNames.json` |
| numbers | `@syncfusion/ej2-cldr-data/main/en/numbers.json` |
| currencies | `@syncfusion/ej2-cldr-data/main/en/currencies.json` |
| numberingSystems | `@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json` |

**Combined bundle** (first four files): `@syncfusion/ej2-cldr-data/main/en/all.json`.

## Number formatting

Number formatting and parsing use the [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/) interface.

### Built-in options

| Property | Description |
| --- | --- |
| `format` | Format type: **N** (numeric), **C** (currency), **P** (percentage). |
| `minimumFractionDigits` / `maximumFractionDigits` | Fraction digits, 0–20. |
| `minimumSignificantDigits` / `maximumSignificantDigits` | Significant digits, 1–21. |
| `useGrouping` | Enable group separator. Default `true`. |
| `minimumIntegerDigits` | Minimum integer digits, 1–21. |
| `currency` | Currency code for currency formatting. |

> `minimumIntegerDigits`, `minimumFractionDigits`, and `maximumFractionDigits` belong to group one. `minimumSignificantDigits` and `maximumSignificantDigits` belong to group two. If group two is set, group one is ignored.

### Custom patterns

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

### Format and parse

```ts
import { getNumberFormat, getNumberParser } from '@syncfusion/ej2-base';

const format = getNumberFormat({ format: 'C', currency: 'EUR' });
format(1234.5);                  // e.g. "1.234,50 €"

const parse = getNumberParser({ format: 'N', useGrouping: true });
parse("1,234.5");                // 1234.5
```

## Date formatting

Date formatting and parsing use the [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/) interface.

| Option | Description |
| --- | --- |
| `type` | Format type: **date**, **dateTime**, **time**. |
| `skeleton` | Preset pattern: `short`, `medium`, `long`, `full`. |
| `format` | Custom pattern such as `dd/MM/yyyy`, `MMM yyyy`, `EEEE, MMMM d, yyyy`. |
| `calendar` | Calendar system, for example `gregorian`, `islamic`. |

### Format and parse

```ts
import { getDateFormat, getDateParser } from '@syncfusion/ej2-base';

const format = getDateFormat({ type: 'date', skeleton: 'long' });
format(new Date(2026, 7, 4));    // e.g. "August 4, 2026"

const parse = getDateParser({ type: 'date', format: 'dd/MM/yyyy' });
parse('04/08/2026');             // Date object
```

## Performance and best practices

- The `setCulture()` code must match the culture segment in the CLDR paths you loaded.
- `getNumberFormat` and `getDateFormat` return reusable functions — create them once and reuse for performance.
- For locales that use non-Latin digits (Arabic, Thai), ensure `numberingSystems` is loaded.
- The CLDR data package replaces the third-party `cldr-data` package to avoid known vulnerabilities.
- For .NET-based SDKs (ASP.NET Core / MVC / Blazor / MAUI), the editor reads culture from the host application's `CultureInfo` and uses Syncfusion's `Locale` file system or `ej2-locale` package accordingly.

## See also

* [Localization](./localization)
* [Globalization overview](./overview)
* [Right-to-Left support](../right-to-left)
