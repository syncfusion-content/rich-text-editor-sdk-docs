---
layout: post
title: Copy and Paste in TypeScript Headless Editor | Syncfusion
description: Learn how the Syncfusion TypeScript Headless Editor handles paste through lifecycle events, paste transformation hooks, and built-in clipboard security.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk/
---

# Copy and Paste in TypeScript Headless Editor

The Headless Editor handles paste automatically through ProseMirror's native clipboard pipeline. There is no public `editor.paste()` method. To observe or customize paste behavior, use the `beforePaste` and `afterPaste` lifecycle callbacks, the corresponding event subscriptions, or the `EditorConfig.clipboard` transformation hooks.

Copy and cut are also handled by the browser and the editor's native behavior — the Headless Editor does not expose a public copy or cut API, hook, or event.

This page covers:

- [Pasting Content](#pasting-content) – the public paste lifecycle and format detection.
- [Customizing Paste](#customizing-paste) – the `EditorConfig.clipboard` transformation hooks.
- [Clipboard Security](#clipboard-security) – how the editor handles unsafe clipboard content.

## Pasting Content

When a user pastes content into the editor, the editor processes the clipboard payload through the schema-driven pipeline, fires the `beforePaste` event, dispatches the resulting transaction, and then fires `afterPaste`.

### Paste Lifecycle

Two lifecycle callbacks are exposed via `EditorConfig` and as named events on the editor instance.

The `beforePaste` callback fires before the paste is inserted and lets you inspect the paste payload:

```ts
import { HeadlessEditor } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
  schema,
  extensions,
  beforePaste: (payload) => {
    console.log('Pasting content:', payload.content);
    console.log('Paste event:', payload.event);
  },
  afterPaste: (payload) => {
    console.log('Inserted at', payload.insertPosition, 'length', payload.insertedLength);
  }
});
```

The same callbacks are available as named events through `editor.on(...)`:

```ts
editor.on('beforePaste', (payload) => {
  console.log('Pasting content:', payload.content);
  console.log('Paste event:', payload.event);
});

editor.on('afterPaste', (payload) => {
  console.log('Inserted at', payload.insertPosition, 'length', payload.insertedLength);
});
```

| Event / callback | Can be canceled? | When it fires |
| --- | --- | --- |
| `beforePaste` / `'beforePaste'` | No | Before the paste is inserted into the document. |
| `afterPaste` / `'afterPaste'` | No | After the paste has been inserted; reports the inserted position and length. |

The `beforePaste` and `afterPaste` callbacks receive paste event payloads. The public `beforePaste` API allows applications to inspect the paste before insertion but does not expose a cancellation property. The `afterPaste` payload reports the inserted position and length along with the paste content and original DOM event.

### Paste Formats

The editor does not expose separate methods for plain-text and HTML paste — both go through the same schema-driven pipeline. The format detected for a given paste is reported as the `source` field on the clipboard transformation context, which has the type `'html' | 'text' | 'unknown'`:

```text
source: 'html' | 'text' | 'unknown'
```

The detected source is available to the customization hooks described in the next section, so applications that need to branch on the format can do so there.

## Customizing Paste

Use `EditorConfig.clipboard` to register transformation hooks for clipboard content. Both hooks are optional and run inside the paste pipeline.

The two hooks receive a shared `ClipboardTransformContext` with the active editor and the detected `source`:

```ts
interface ClipboardTransformContext {
  editor: HeadlessEditor;
  source: 'html' | 'text' | 'unknown';
}
```

### Transforming HTML

`transformHTML` runs after the editor's built-in security sanitizer has stripped unsafe content and before the HTML is parsed by ProseMirror. It receives the sanitized HTML plus the context, and returns the (possibly rewritten) HTML string to feed into the schema parser:

```ts
const editor = HeadlessEditor.create({
  schema,
  extensions,
  clipboard: {
    transformHTML: (html, { editor, source }) => {
      // Remove unwanted HTML before schema parsing
      return html.replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, '');
    }
  }
});
```

### Transforming Content

`transformContent` runs after ProseMirror has parsed the HTML into a schema-aware slice. It receives a `ClipboardContent` payload whose `slice` field can be replaced, and returns the replacement to insert:

```ts
const editor = HeadlessEditor.create({
  schema,
  extensions,
  clipboard: {
    transformContent: ({ slice }, { editor, source }) => {
      // Drop foreign marks or restructure nodes
      return { slice };
    }
  }
});
```

`ClipboardContent` contains a single `slice` field representing the parsed clipboard content.

The hooks run in this order: HTML sanitizer → `transformHTML` → schema parser → `transformContent` → insertion.

## Clipboard Security

The editor applies a built-in security sanitizer to clipboard HTML before any user-defined transformation. The sanitizer removes dangerous clipboard content before the HTML is passed to the schema parser.

The sanitizer is:

- **Always on.** It cannot be disabled.
- **Not configurable.** There is no public allow-list, deny-list, or set of allowed styles for the paste path — `EditorConfig.clipboard` does not expose these settings.
- **Internal.** The sanitizer itself is an implementation detail and is not part of the public API surface.
- **Paste-only.** It is applied to clipboard content entering the editor. It is **not** applied to `setContent()` or `EditorConfig.content` — see [HTML Content](html-content) for HTML loading.

If you need to further restrict what is accepted from the clipboard, combine the built-in sanitizer with `transformHTML` and `transformContent`, or cancel the paste entirely through `beforePaste`.