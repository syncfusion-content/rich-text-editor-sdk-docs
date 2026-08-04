---
layout: post
title: Localization for React Rich Text Editor SDK | Syncfusion
description: Learn how to localize and translate the Syncfusion React Rich Text Editor, Block Editor, and Markdown Editor into different languages using the L10n library.
platform: rich-text-editor-sdk
control: Localization
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Localization for the React Rich Text Editor SDK

Localization (l10n) translates the editor's UI text — toolbar labels, tooltips, dialog messages, table-editor text, image / audio / video dialog text, and placeholders — into different languages. It applies to the **Rich Text Editor**, **Block Editor**, and **Markdown Editor**.

> For the full string table per component, see each component's globalization page: [Rich Text Editor](../../react/rich-text-editor/globalization), [Block Editor](../../react/block-editor/globalization), [Markdown Editor](../../react/markdown-editor/globalization). This page covers how to **load and switch** translations.

## Quick start

```bash
npm install @syncfusion/ej2-locale
```

```ts
import { L10n, setCulture } from '@syncfusion/ej2-base';
import * as deLocale from '@syncfusion/ej2-locale/src/de.json';

L10n.load({ 'de-DE': deLocale });
setCulture('de-DE');
```

> Call `L10n.load()` **before** `setCulture()` and **before** any component renders.

## How translations work

The translation key under each culture code (for example `'richtexteditor'`) must match the component's locale scope. You only need to override the keys you want to translate — missing keys fall back to `en-US`. The `ej2-locale` package ships JSON files for most common languages; use it before writing custom translations. For dates, numbers, and currencies, also load the [CLDR data](./internationalization) for the target culture.

## Loading translations

### From the locale package (recommended)

```ts
import { L10n } from '@syncfusion/ej2-base';
import * as frLocale from '@syncfusion/ej2-locale/src/fr.json';

L10n.load({ 'fr-FR': frLocale });
```

### Inline override

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

Pre-built JSON files are available at [github.com/syncfusion/ej2-locale](https://github.com/syncfusion/ej2-locale). Download the file for your language and import it the same way as the npm package.

## Per-component scopes

Each component has its own scope. Load only the scopes your app uses.

| Component | Scope | String table |
| --- | --- | --- |
| Rich Text Editor | `richtexteditor` | [Globalization](../../react/rich-text-editor/globalization) |
| Block Editor | `blockeditor` | [Block Editor → Globalization](../../react/block-editor/globalization) |
| Markdown Editor | `markdowneditor` | [Markdown Editor → Globalization](../../react/markdown-editor/globalization) |

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

After switching, trigger a React state update (or a key-based remount) so the editor re-renders in the new locale.

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

## See also

* [Internationalization](./internationalization)
* [Globalization overview](./overview)
* [Right-to-Left support](../right-to-left)
* [React Rich Text Editor → Globalization](../../react/rich-text-editor/globalization)
