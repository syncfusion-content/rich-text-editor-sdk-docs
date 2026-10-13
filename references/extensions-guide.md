# Extensions & Plugin System

## Table of Contents
- [basicExtensions Preset](#basicextensions-preset)
- [Adding Extensions Alongside the Preset](#adding-extensions-alongside-the-preset)
- [Registering Extensions Individually](#registering-extensions-individually)
- [How Extensions Compose](#how-extensions-compose)

## basicExtensions Preset

`basicExtensions` is a preset that includes commonly used built-in extensions for general-purpose document editing. Use it as a drop-in preset instead of registering each extension individually.

### Register the Preset

```ts
import { HeadlessEditor, basicExtensions } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [basicExtensions]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

All commands, keyboard shortcuts, and input rules contributed by the composed extensions become available immediately:

```ts
editor.commands.toggleBold();
editor.commands.setHeading({ level: 2 });
editor.commands.undo();
```

### Extensions Included in the Preset

| Category | Extensions |
|----------|------------|
| Document structure | `document`, `paragraph`, `heading`, `blockquote`, `text` |
| Code support | `codeBlock`, `inlineCode` |
| Visual separators | `horizontalRule`, `hardBreak` |
| Lists | `list`, `listKeymap`, `taskList` |
| Text formatting | `bold`, `italic`, `underline`, `strikethrough` |
| History management | `undoRedo` |

> `basicExtensions` does not include every available node extension, such as `table`, `image`, or `collapsible`. Register those extensions individually alongside `basicExtensions` if your application needs them.

---

## Adding Extensions Alongside the Preset

You can combine `basicExtensions` with additional individual extensions:

```ts
import { HeadlessEditor, basicExtensions, tableExtension, imageExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [basicExtensions, tableExtension, imageExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

---

## Registering Extensions Individually

If you need full control over which node types and behavior are available, register the required extensions individually instead of using the preset:

```ts
import { HeadlessEditor, documentExtension, paragraphExtension, textExtension } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    extensions: [documentExtension, paragraphExtension, textExtension]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

> Note that `document` and `text` are mandatory for a valid schema, The Headless Editor automatically adds the required `document` and `text` extensions if they are not registered.

For details on defining your own extensions, including all contributor fields, options, lifecycle hooks, and end-to-end examples, see the [Custom Extensions](custom-extensions.md) reference.

---

## How Extensions Compose

The editor composes the schema and runtime from the extensions array you pass to `HeadlessEditor.create`. Some behaviors are automatic:

- The `document` and `text` extensions are required by every editor instance and are auto-registered if missing.
- `listKeymap` is auto-registered when `listExtension` is present.
- `collapsibleKeymap` is auto-registered when `collapsibleExtension` is present.
- `indentOutdentExtension` is auto-registered when `enableTabKey` is `true` and the user has not already registered one.

For details on how priority controls the order in which extensions are wired up, see the [Custom Extensions](custom-extensions.md) reference.
