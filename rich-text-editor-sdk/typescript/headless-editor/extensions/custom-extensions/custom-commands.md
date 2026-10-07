---
layout: post
title: Custom Commands in TypeScript Headless Editor | Syncfusion
description: Learn how to contribute custom commands to the TypeScript Headless Editor, define parameters, and reach them through the editor commands facade.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
appliesto: UI Component Suite, Rich Text Editor SDK
---

# Custom Commands in TypeScript Headless Editor

Use the `commands` field on `ExtensionConfig` to add new commands to the editor or to re-export built-in commands under a different name. Each command has a unique name, an optional payload, and an `execute` function that runs an action.

## What you write

```typescript
commands?: () => Command[]
```

The option returns the list of commands the extension adds. You can return commands you define inline, or import and re-export a built-in command. The same name can only be registered once; conflicts are surfaced by the editor.

## `Command` shape

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Unique command name within the editor instance. |
| `meta` | object | Optional. Metadata (label, category, icon) for tooling and UI. |
| `canExecute(ctx, payload)` | function | Optional. Returns `true` when the command can run on the current selection. |
| `execute(ctx, payload)` | function | Runs the command, mutating state through the supplied context. |

`ctx` is a `CommandContext`. It carries the editor state, the current selection, the document, a back-reference to the editor, and a `dispatch` helper for writing back changes.

| Field | Description |
|-------|-------------|
| `editorState` | The current editor state. |
| `selection` | The current selection. |
| `document` | The current document. |
| `editor` | A back-reference to the editor. |
| `dispatch(transaction)` | Apply a transaction to mutate the state. |

## Defining a command

```typescript
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const counterExtension = defineExtension({
    name: 'counter',
    commands() {
        return [
            {
                name: 'incrementCounter',
                meta: { label: 'Increment', category: 'counter' },
                canExecute() { return true; },
                execute(ctx) {
                    // ctx.editorState, ctx.selection, ctx.dispatch are available
                }
            }
        ];
    }
});
```

## Command parameters

Commands accept an optional payload. The payload is opaque to the editor; you define its shape inside the command:

```typescript
interface SetVariantPayload {
    variant: 'info' | 'warning' | 'error';
}

const calloutExtension = defineExtension({
    name: 'callout',
    commands() {
        return [
            {
                name: 'setCalloutVariant',
                canExecute(ctx, payload: SetVariantPayload) {
                    return payload?.variant !== undefined;
                },
                execute(ctx, payload: SetVariantPayload) {
                    // Apply payload.variant to the current callout
                }
            }
        ];
    }
});
```

The command facade at `editor.execute('setCalloutVariant', { variant: 'warning' })` enforces the payload shape at the call site.

## Re-exporting a built-in command

You can also import a built-in `Command` and re-export it from your own extension. The commands option accepts both new commands and command instances you have on hand:

```typescript
import { defineExtension, insertNodeCommand } from '@syncfusion/ej2-headless-editor';

const mentionExtension = defineExtension({
    name: 'mention',
    commands() {
        return [
            insertNodeCommand
        ];
    }
});
```

Use this when you want a command to live alongside your extension's other code so consumers have a single import surface.

## Reaching commands from application code

Once the editor is created, custom commands are reachable through the same `execute` API as built-in commands:

```typescript
const editor = HeadlessEditor.create({
    extensions: [counterExtension]
});

editor.execute('incrementCounter');
```
