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

The localization library enables translation of static UI text in Syncfusion<sup style="font-size:70%">&reg;</sup> React components into different languages. This includes toolbar labels, tooltips, dialog messages, table-editor text, image / audio / video dialog text, and placeholders in the **Rich Text Editor**, **Block Editor**, and **Markdown Editor**.

> The complete string table for the React Rich Text Editor is published at [Globalization → Rich Text Editor](../../react/rich-text-editor/globalization). This page covers how to **load and switch** translations across the SDK.

## Loading Translations

Use the `L10n.load()` function from the `@syncfusion/ej2-base` module to register translation objects before any Syncfusion<sup style="font-size:70%">&reg;</sup> component renders.

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

> Call `L10n.load()` to register the locale text for the target culture **before** invoking `setCulture()`. The translation key under the culture code (`'richtexteditor'`, `'blockeditor'`, etc.) must match the component's `locale` scope.

## Changing the current locale

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

## Obtaining translation files

### Using the NPM package

```bash
npm install @syncfusion/ej2-locale
```

```ts
import { L10n } from '@syncfusion/ej2-base';
import * as frLocale from '@syncfusion/ej2-locale/src/fr.json';

L10n.load({ 'fr-FR': frLocale });
```

### Downloading from GitHub

Pre-built locale files are available in the [ej2-locale repository](https://github.com/syncfusion/ej2-locale). Download the JSON file for the desired language and load it into your application.

## Per-component scope

Each component uses its own translation scope. The complete string table for each React RTE SDK component lives on its dedicated globalization page:

| Component | Translation scope | String table |
| --- | --- | --- |
| Rich Text Editor | `richtexteditor` | [Globalization](../../react/rich-text-editor/globalization) |
| Block Editor | `blockeditor` | [Block Editor → Globalization](../../react/block-editor/globalization) |
| Markdown Editor | `markdowneditor` | [Markdown Editor → Globalization](../../react/markdown-editor/globalization) |

When you load translations, include the matching scope:

```ts
L10n.load({
  'fr-FR': {
    'richtexteditor': { /* RTE keys */ },
    'blockeditor':    { /* Block Editor keys */ },
    'markdowneditor': { /* Markdown Editor keys */ }
  }
});
```

## Dynamic locale switching

To switch locales at runtime, load the new translations and update the culture. Trigger a React state update (or a key-based remount) so the editor re-renders in the new locale.

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

> When switching locales dynamically, most components update automatically on re-render. In React, triggering a state update is usually sufficient.

### Performance optimization

- Load only the translations required for the components used in the application.
- In single-page apps, load all necessary translations once during initialization.
- In multi-page apps, consider lazy-loading translations based on the active route.

## Troubleshooting

### Translations not appearing

- Confirm that `L10n.load()` is called **before** any component renders.
- Verify that `setCulture()` uses the exact locale code present in the loaded translations.
- Ensure the component's `locale` property (if explicitly set) matches the loaded culture.
- Check that the required CLDR data is loaded for the target culture (see [Internationalization](./internationalization)).

### Missing translation keys

- Check the browser console for warnings about missing keys.
- Compare the loaded translation object structure against the component's string table.
- Confirm the translation object follows the expected hierarchy.

### Dates and numbers not formatting correctly

- Ensure CLDR data is loaded for the target culture (see [Internationalization](./internationalization)).
- Verify that `setCulture()` uses the correct culture code.
- Confirm that `loadCldr()` includes the necessary data files (`numbers`, `ca-gregorian`, `timeZoneNames`, `currencies`, `numberingSystems`).

## See also

* [Internationalization](./internationalization)
* [Globalization overview](./overview)
* [Right-to-Left support](../right-to-left)
* [React Rich Text Editor → Globalization](../../react/rich-text-editor/globalization)
* [ej2-locale GitHub Repository](https://github.com/syncfusion/ej2-locale)
