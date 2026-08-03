---
layout: post
title: Globalization Overview for React Rich Text Editor SDK | Syncfusion
description: Learn how the Syncfusion React Rich Text Editor SDK supports globalization, including internationalization (i18n) and localization (l10n) for the Rich Text Editor, Block Editor, and Markdown Editor.
platform: rich-text-editor-sdk
control: Globalization Overview
documentation: ug
domainurl: https://helpstaging.syncfusion.com/rich-text-editor-sdk
---

# Globalization Overview for the React Rich Text Editor SDK

Globalization is the process of designing applications that adapt seamlessly to different cultures, languages, and regional preferences. It combines two complementary aspects:

- **Internationalization (i18n)** — designing the application to support multiple locales without code changes, primarily through culture-specific formatting and parsing of dates, numbers, and currencies
- **Localization (l10n)** — translating user-facing text (such as toolbar labels, tooltips, dialog messages, and aria labels) into different languages

The Syncfusion<sup style="font-size:70%">&reg;</sup> React Rich Text Editor SDK — including the **Rich Text Editor**, **Block Editor**, and **Markdown Editor** — provides full globalization support so that editors automatically adjust to diverse cultural and linguistic requirements.

## What is Globalization?

For the React Rich Text Editor SDK, globalization covers:

- **Date and Time Formatting** — when the editor or surrounding app displays dates, they use locale-specific patterns (for example, `MM/DD/YYYY` in the US vs. `DD/MM/YYYY` in many European countries)
- **Number Formatting** — appropriate decimal separators, thousands grouping, and digit patterns (for example, `1,234.56` in English vs. `1.234,56` in German)
- **Currency Formatting** — monetary values display the correct currency symbol, placement, and format
- **Text Translation** — toolbar captions, context-menu items, dialog messages, and validation errors are translated into the target language
- **Text Direction** — automatic right-to-left (RTL) layout and text alignment for languages such as Arabic and Hebrew (see [Right-to-Left support](../right-to-left))

By default, Syncfusion<sup style="font-size:70%">&reg;</sup> components use the **en-US** culture and **USD** currency. Developers can change these globally using the `setCulture()` and `setCurrencyCode()` methods provided by the Internationalization library.

## Localization in the React Rich Text Editor

The Rich Text Editor (and Markdown Editor) ship with an extensible localization file. The default locale is `en-US`. The editor exposes a complete string table covering toolbar items, dialogs, table editor, image/audio/video dialogs, and quick toolbar — see [Localization](./localization) for the full set of keys and the recommended `L10n.load()` workflow.

The Block Editor also supports translation of its menu items, block placeholders, and slash-menu commands.

## Learn more

- [Localization](./localization) — translate static UI text (toolbar labels, dialog messages, table editor) into any language
- [Internationalization](./internationalization) — format and parse dates, numbers, and currencies per culture
- [Right-to-Left support](../right-to-left) — RTL layout for Arabic, Hebrew, Persian, and more

## See also

* [Accessibility](../accessibility)
* [Browser support](../browser-support)
* [Version compatibility](../version-compatibility)
