---
layout: post
title: Localization for Rich Text Editor SDK | Syncfusion
description: Learn how to localize and translate the Syncfusion Rich Text Editor, Block Editor, and Markdown Editor into different languages using the L10n library.
platform: rich-text-editor-sdk
control: Localization
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Localization for the Rich Text Editor SDK

Localization (l10n) translates the editor's UI text — toolbar labels, tooltips, dialog messages, table-editor text, image / audio / video dialog text, and placeholders — into different languages. It applies to every component in the SDK — **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — across React, Angular, Vue, JavaScript, ASP.NET (Core / MVC), Blazor, and MAUI.

> For the full string table per component, see each component's globalization page. This page covers how to **load and switch** translations.

## Quick start

Install the locale package and register translations for the culture you want, then switch globally:

```bash
npm install @syncfusion/ej2-locale
```

For UI text, register translations with `L10n.load()` and call `setCulture()`. Each editor in the SDK has its own locale scope — pick the tab for the editor you use.

{% tabcontents %}

{% tabcontent Rich Text Editor %}

Register translations under the `richtexteditor` scope:

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

{% endtabcontent %}

{% tabcontent Block Editor %}

Register translations under the `blockeditor` scope:

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
  'de-DE': {
    'blockeditor': {
      'paragraph': 'Absatz',
      'heading': 'Überschrift',
      'bulletList': 'Aufzählung',
      'numberedList': 'Nummerierte Liste',
      'insertLink': 'Link einfügen',
      'insertImage': 'Bild einfügen'
    }
  }
});

setCulture('de-DE');
```

{% endtabcontent %}

{% tabcontent Markdown Editor %}

Register translations under the `markdowneditor` scope:

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
  'de-DE': {
    'markdowneditor': {
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

{% endtabcontent %}

{% endtabcontents %}

> Call `L10n.load()` **before** `setCulture()` and **before** any component initializes. Load the scopes for the editors your app uses — the three scopes are independent.

## How translations work

The translation key under each culture code (for example `'richtexteditor'`) must match the component's locale scope. You only need to override the keys you want to translate — missing keys fall back to `en-US`. The `ej2-locale` package ships JSON files for most common languages; use it before writing custom translations. For dates, numbers, and currencies, also load the [CLDR data](./internationalization) for the target culture.

## Loading translations

### Inline override (works in every framework)

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';

L10n.load({
  'fr-BE': {
    'richtexteditor': {
      'bold': 'Gras',
      'italic': 'Italique',
      'underline': 'Souligné',
      'createLink': 'Insérer un lien',
      'image': 'Insérer une image',
      'undo': 'Annuler',
      'redo': 'Rétablir'
    }
  }
});

setCulture('fr-BE');
```

### From the ej2-locale GitHub repository

Pre-built JSON files for every supported language are available at [github.com/syncfusion/ej2-locale](https://github.com/syncfusion/ej2-locale). Fetch the file for your language, then load it with `L10n.load()`:

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';
import frLocale from './locales/fr.json';

L10n.load({ 'fr-FR': frLocale });
setCulture('fr-FR');
```

The path to the JSON file depends on your framework and bundler (npm, CDN, `wwwroot/locale`, and so on).

### Framework-specific sources

| Framework | Where to load translations from |
| --- | --- |
| JavaScript / TypeScript | CDN script, npm `ej2-locale` package, or local JSON |
| React / Angular / Vue | `L10n.load()` at app startup; `ej2-locale` JSON |
| ASP.NET Core / MVC | `wwwroot/Scripts/locale/` plus the `ej2-locale` script tag |
| Blazor | Syncfusion `Locale` file system; the editor reads from there automatically |
| MAUI | `ej2-locale` package or Syncfusion `Locale` files packaged with the app |

## Per-component scopes

The SDK exposes three locale scopes. Load only the scopes your app uses.

| Component | Scope | String table location |
| --- | --- | --- |
| Rich Text Editor | `richtexteditor` | [Rich Text Editor globalization](../../react/rich-text-editor/globalization) (per-platform equivalents exist) |
| Block Editor | `blockeditor` | [Block Editor globalization](../../react/block-editor/globalization) |
| Markdown Editor | `markdowneditor` | [Markdown Editor globalization](../../react/markdown-editor/globalization) |

```ts
L10n.load({
  'fr-FR': {
    'richtexteditor': { /* RTE keys */ },
    'blockeditor':    { /* Block Editor keys */ },
    'markdowneditor': { /* Markdown Editor keys */ }
  }
});
```

## Switching the current locale

To change the active language, load the new translations and call `setCulture()`:

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

## Switching locales at runtime

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

After switching, trigger a re-render of the editor in the new locale. In React, a state update is enough; in Angular / Vue, re-render the host component; in server-side frameworks, request a fresh page render with the new culture.

### Performance

- Load only the translations your app uses.
- In SPAs, load all required translations once at startup.
- In multi-page apps, lazy-load translations per route.

## Troubleshooting

### Translations not appearing

- `L10n.load()` must run **before** any component renders.
- The `setCulture()` code must match the locale code used in the loaded translations.
- If a component has a `locale` property, it must match the loaded culture.
- For the target culture, also load the matching [CLDR data](./internationalization).

### Missing translation keys

- Check the browser console for missing-key warnings.
- Compare the loaded structure against the component's string table.
- Verify the expected hierarchy: `{ '<culture>': { '<scope>': { '<key>': '<text>' } } }`.

### Dates or numbers not formatting

- Load CLDR data for the target culture (see [Internationalization](./internationalization)).
- Confirm `setCulture()` uses the correct culture code.
- Include all five required files: `numbers`, `ca-gregorian`, `timeZoneNames`, `currencies`, `numberingSystems`.

### Server-side frameworks (ASP.NET / Blazor / MAUI)

- Confirm the host application's `CultureInfo` matches the editor's culture.
- Make sure the `ej2-locale` script (or `Locale` files) is referenced in the layout, `index.html`, or `App.razor`.
- For Blazor Server / WASM, the locale JSON must be reachable from the static file path the editor reads.

## See also

* [Internationalization](./internationalization)
* [Globalization overview](./overview)
* [Right-to-Left support](../right-to-left)
* [Rich Text Editor globalization](../../react/rich-text-editor/globalization)
* [Block Editor globalization](../../react/block-editor/globalization)
* [Markdown Editor globalization](../../react/markdown-editor/globalization)
* [ej2-locale GitHub Repository](https://github.com/syncfusion/ej2-locale)
