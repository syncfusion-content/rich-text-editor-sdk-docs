---
layout: post
title: Inline Format Commands in TypeScript Modern Rich Text Editor | Syncfusion
description: Learn how to invoke inline format commands programmatically in the TypeScript Modern Rich Text Editor using executeCommand and the fluent commands builder.
platform: rich-text-editor-sdk
control: Modern Rich Text Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Inline Format Commands in TypeScript Modern Rich Text Editor

The Modern Rich Text Editor exposes every inline format through three equivalent surfaces — a toolbar click, the `executeCommand(name, args)` imperative call, and the fluent `editor.commands().<builder>().<setter>().apply()` chain. All three routes converge on the same `actionBegin` / `actionComplete` pipeline and share identical cancellation and history semantics.

The set of available inline formats is on [Supported Formats](supported-formats.md). The configuration surface (`fontSize`, `fontFamily`, `fontColor`, `backgroundColor`) is on [Options](options.md).

## Entry points

| Entry point | Shape | Best for |
| --- | --- | --- |
| Toolbar click | Built-in `BuiltInToolbarItem` names in `toolbarSettings.items` | End-user interaction |
| `editor.executeCommand(name, args)` | Imperative call with a typed payload | Programmatic use, framework wrappers |
| `editor.commands().<builder>().<setter>().apply()` | Fluent, type-safe builder | TypeScript apps and tests |

## Toggle text-style commands

Toggle commands carry no payload. They flip the mark for the selection or set the active typing mark for a collapsed caret.

### Programmatic

```typescript
editor.executeCommand('bold');
editor.executeCommand('italic');
editor.executeCommand('underline');
editor.executeCommand('strikethrough');
editor.executeCommand('subscript');
editor.executeCommand('superscript');
editor.executeCommand('inlineCode');
editor.executeCommand('clearFormat');
editor.executeCommand('uppercase'); // range only
editor.executeCommand('lowercase'); // range only
```

### Fluent builder

```typescript
editor.commands().bold().apply();
editor.commands().italic().apply();
editor.commands().underline().apply();
editor.commands().strikethrough().apply();
editor.commands().subscript().apply();
editor.commands().superscript().apply();
editor.commands().inlineCode().apply();
editor.commands().clearFormat().apply();
editor.commands().uppercase().apply();
editor.commands().lowercase().apply();
```

## Color commands

Both color commands share the `ColorCommand { color: string }` payload. An empty string removes the corresponding mark from the selection.

### Apply a color

```typescript
editor.executeCommand('fontColor', { color: '#DC2626' });
editor.executeCommand('backgroundColor', { color: '#FFF7C7' });
```

```typescript
editor.commands().fontColor().color('#DC2626').apply();
editor.commands().backgroundColor().color('rgba(255, 247, 199, 1)').apply();
```

### Remove a color

```typescript
editor.executeCommand('fontColor', { color: '' });
editor.executeCommand('backgroundColor', { color: '' });
```

```typescript
editor.commands().fontColor().color('').apply();
editor.commands().backgroundColor().color('').apply();
```

The empty-string signal is the documented convention for removing a color mark. Any other "no color" string is treated as a literal color.

## Typography commands

### Font size

```typescript
editor.executeCommand('fontSize', { size: '16px' });
editor.executeCommand('fontSize', { size: '' }); // remove the font size
```

```typescript
editor.commands().fontSize().size('16px').apply();
editor.commands().fontSize().size('').apply(); // remove the font size
```

`size` accepts any CSS size string — `'12px'`, `'1.5em'`, `'small'`, `'120%'`. The default dropdown item sends `{ size: 'Default' }`, which is treated as remove the font size.

### Font family

```typescript
editor.executeCommand('fontName', { family: 'Arial, Helvetica, sans-serif' });
editor.executeCommand('fontName', { family: '' }); // remove the font family
```

```typescript
editor.commands().fontName().family('Georgia, serif').apply();
editor.commands().fontName().family('').apply(); // remove the font family
```

The toolbar item label is `FontName`, but the command name and mark type are both `fontFamily`. The fluent builder is exposed as `.fontName()` to match the toolbar label.

## Insertion command — HorizontalLine

```typescript
editor.executeCommand('horizontalLine');
editor.commands().horizontalLine().apply();
```

`horizontalLine` is the only inline-flavored insertion command. It is a no-op when the editor is in `readonly` mode.

## Programmatic end-to-end example

```typescript
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [
            'Bold', 'Italic', 'Underline', 'StrikeThrough',
            '|',
            'FontSize', 'FontName', 'FontColor', 'BackgroundColor',
            '|',
            'InlineCode', 'ClearFormat'
        ]
    },
    value: '<p>Hello world</p>',
    valueFormat: 'html'
});
editor.appendTo('#editor');

// Apply a set of inline marks at the current selection
editor.commands().fontSize().size('18px').apply();
editor.commands().fontColor().color('#00A3FF').apply();
editor.commands().bold().apply();
editor.commands().underline().apply();

// Remove the font color and switch to a background highlight
editor.commands().fontColor().color('').apply();
editor.commands().backgroundColor().color('#FFF7C7').apply();

// Strip every inline mark from the selection
editor.commands().clearFormat().apply();
```

## Action pipeline

Every command goes through the same boundaries:

```
Toolbar click  ─┐
executeCommand  ─┼─► actionBegin ─► editor engine ─► actionComplete
commands()      ─┘
```

1. The editor normalizes the call and raises the cancelable `actionBegin` event.
2. On acceptance, the typed command is dispatched to the editor engine.
3. `actionComplete` fires after the editor engine returns. The toolbar status re-synchronizes through `updatedToolbarStatus`.

Cancelling `actionBegin` (e.g. `args.cancel = true`) prevents any document mutation and no history entry is created.

## See also

* [Supported Formats](supported-formats.md) — the inventory of marks and serialization shapes.
* [Options](options.md) — `fontSize`, `fontFamily`, `fontColor`, `backgroundColor` configuration, including the full color picker reference.
