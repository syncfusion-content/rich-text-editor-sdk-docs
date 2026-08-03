---
layout: post
title: Internationalization for React Rich Text Editor SDK | Syncfusion
description: Learn how to implement internationalization in the Syncfusion React Rich Text Editor SDK using CLDR data to format and parse dates, numbers, and currencies across cultures.
platform: rich-text-editor-sdk
control: Internationalization
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Internationalization for the React Rich Text Editor SDK

The Syncfusion<sup style="font-size:70%">&reg;</sup> Internationalization library enables formatting and parsing of date and number values according to culture-specific rules using official [Unicode CLDR](https://cldr.unicode.org/) JSON data. The default culture is `en-US` and the default currency code is `USD` for all Syncfusion<sup style="font-size:70%">&reg;</sup> React components — including the **Rich Text Editor**, **Block Editor**, and **Markdown Editor**.

> The Rich Text Editor and Markdown Editor primarily use localization for their UI text (toolbar labels, dialogs); they delegate date / number / currency formatting to your app's choice of culture. Setting the global culture ensures the editor's helper widgets (such as the date picker that appears in dialogs) follow the right format.

## Loading Culture Data

The Syncfusion<sup style="font-size:70%">&reg;</sup> CLDR data package contains only JSON data files generated from the official [Unicode CLDR](https://cldr.unicode.org/) data. This avoids the third-party [cldr-data](https://www.npmjs.com/package/cldr-data) package and its known vulnerabilities. Use the `loadCldr` function to load CLDR data for cultures other than `en-US`.

### Installing CLDR Data

```bash
npm install @syncfusion/ej2-cldr-data
```

### Individual File Path Reference

Replace `en` with the desired culture code (for example, `de`, `fr`, `ar`):

| File Name         | Path                                                            |
| ----------------- | --------------------------------------------------------------- |
| ca-gregorian      | @syncfusion/ej2-cldr-data/main/en/ca-gregorian.json             |
| timeZoneNames     | @syncfusion/ej2-cldr-data/main/en/timeZoneNames.json            |
| numbers           | @syncfusion/ej2-cldr-data/main/en/numbers.json                  |
| currencies        | @syncfusion/ej2-cldr-data/main/en/currencies.json               |
| numberingSystems  | @syncfusion/ej2-cldr-data/supplemental/numberingSystems.json    |

### Single File Path Reference

| File Name                                       | Path                                                            |
| ----------------------------------------------- | --------------------------------------------------------------- |
| ca-gregorian, timeZoneNames, numbers, currencies| @syncfusion/ej2-cldr-data/main/en/all.json                      |
| numberingSystems                                | @syncfusion/ej2-cldr-data/supplemental/numberingSystems.json    |

> For the `en-US` culture, all required data files are preloaded in the library, so explicit loading is optional.

### Binding to i18n Library

```typescript
import { loadCldr } from '@syncfusion/ej2-base';
import enNumberData from '@syncfusion/ej2-cldr-data/main/en/numbers.json';
import enTimeZoneData from '@syncfusion/ej2-cldr-data/main/en/timeZoneNames.json';
import enGregorian from '@syncfusion/ej2-cldr-data/main/en/ca-gregorian.json';
import enCurrencies from '@syncfusion/ej2-cldr-data/main/en/currencies.json';
import numberingSystems from '@syncfusion/ej2-cldr-data/supplemental/numberingSystems.json';

loadCldr(enNumberData, enTimeZoneData, enGregorian, enCurrencies, numberingSystems);
```

## Changing Culture and Currency Code

```typescript
import { setCulture, setCurrencyCode } from '@syncfusion/ej2-base';

setCulture('ar');
setCurrencyCode('QAR');
```

> If no global culture is set, `en-US` is used as the default locale and `USD` as the default currency code.

## Manipulating Numbers

### Supported Format String

Number formatting and parsing are processed based on the [`NumberFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/numberFormatOptions/) interface.

| Property | Description |
| --- | --- |
| `format` | Format type: **N** (numeric), **C** (currency), **P** (percentage). |
| `minimumFractionDigits` / `maximumFractionDigits` | Fraction-digit count, 0-20. |
| `minimumSignificantDigits` / `maximumSignificantDigits` | Significant-digit count, 1-21. |
| `useGrouping` | Whether to enable the group separator. Default `true`. |
| `minimumIntegerDigits` | Minimum number of integer digits, 1-21. |
| `currency` | Currency code used for currency formatting. |

> `minimumIntegerDigits`, `minimumFractionDigits`, and `maximumFractionDigits` belong to group one. `minimumSignificantDigits` and `maximumSignificantDigits` belong to group two. If group two is set, group one is ignored.

### Custom Number Formatting and Parsing

You can supply a custom pattern directly in the `format` property.

| Specifier | Description | Example | Output |
| --- | --- | --- | --- |
| `0` | Replaces with the corresponding digit or `0` if absent. | `formatNumber(123, { format: '0000' })` | `'0123'` |
| `#` | Replaces with the corresponding digit or nothing if absent. | `formatNumber(1234, { format: '####' })` | `'1234'` |
| `.` | Decimal-point location. | `formatNumber(546321, { format: '###0.##0#' })` | `'546321.000'` |
| `%` | Percentage format. | `formatNumber(1, { format: '0000 %' })` | `'0100 %'` |
| `$` | Currency format based on the global currency code. | `formatNumber(13, { format: '$ ###.00' })` | `'$ 13.00'` |
| `;` | Separate positive / negative / zero formats. | `formatNumber(-120, { format: '###.##;(###.00);-0' })` | `'(120.00)'` |
| `'String'` (single quotes) | Literal text in the result. | `formatNumber(-123.44, { format: "####.## '@'" })` | `'123.44 @'` |

> If a custom format pattern is specified, other `NumberFormatOptions` properties are ignored.

### Number Parsing

`getNumberParser` returns a function that parses a given string based on the supplied `NumberFormatOptions`. `parseNumber(value, options)` parses a string and returns a number.

### Number Formatting

`getNumberFormat` returns a function that formats a given number based on the supplied `NumberFormatOptions`. `formatNumber(value, options)` formats a number and returns a string.

## Manipulating DateTime

Date formatting and parsing are based on the [`DateFormatOptions`](https://ej2.syncfusion.com/documentation/api/base/dateFormatOptions/) interface.

| Option | Description |
| --- | --- |
| `type` | Format type: **date**, **dateTime**, **time**. |
| `skeleton` | Skeleton that controls the format. Supported skeletons: `short`, `medium`, `long`, `full`. |
| `format` | A custom pattern such as `dd/MM/yyyy`, `MMM yyyy`, or `EEEE, MMMM d, yyyy`. |
| `calendar` | Calendar system (for example, `gregorian`, `islamic`). |

### Date Parsing

`getDateParser(options)` returns a parser function. `parseDate(value, options)` parses a string and returns a `Date` object.

### Date Formatting

`getDateFormat(options)` returns a formatter function. `formatDate(value, options)` formats a `Date` object and returns a string.

## See also

* [Localization](./localization)
* [Globalization overview](./overview)
* [Right-to-Left support](../right-to-left)
