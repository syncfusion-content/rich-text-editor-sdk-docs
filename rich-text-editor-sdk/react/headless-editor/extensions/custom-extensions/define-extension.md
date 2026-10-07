---
layout: post
title: Define an Extension in React Headless Editor | Syncfusion
description: Learn how to define a custom extension for the React Headless Editor using the defineExtension factory and ExtensionConfig.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Define an Extension in React Headless Editor

Use the `defineExtension` factory to build a custom extension from an `ExtensionConfig`.

## Import

```ts
import { defineExtension } from '@syncfusion/ej2-headless-editor';
```

## Signature

```ts
function defineExtension<TOptions extends object = object>(
    config: ExtensionConfig<TOptions>
): ExtensionDefinition<TOptions>
```

`TOptions` is the extension's option shape. It defaults to `object`; pass a stronger shape for typed `defineOptions`, `configure`, and `extend`.

## The minimum config

The only required field is `name`. Every other field is optional.

```ts
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const greetingExtension = defineExtension({
    name: 'greeting'
});
```

The factory requires a non-empty `name`. Passing an empty or whitespace-only string throws an error.

```ts
defineExtension({ name: '   ' });
// throws: Error: Extension name cannot be empty.
```

Other contributors are not validated here; pass valid shapes to avoid editor startup errors.

## The returned definition

| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | The unique extension identifier. |
| `configure(options)` | method | Returns a new `ExtensionDefinition` with merged option defaults. |
| `extend(overrides)` | method | Returns a new `ExtensionDefinition` with overridden configuration. |

## Reusing across editors

A defined extension can be registered with multiple editors. `configure` and `extend` return a new definition each time; the original is not modified, so the same base extension can be customized differently for different editors.

```ts
const base = defineExtension({ name: 'demo' });
const themed = base.configure({ htmlAttributes: { class: 'dark' } });
```

## Registering a defined extension

Pass the returned `ExtensionDefinition` to `HeadlessEditor.create`:

```ts
import { HeadlessEditor, defineExtension } from '@syncfusion/ej2-headless-editor';
import { useEffect, useRef } from 'react';

const counterExtension = defineExtension({
    name: 'counter',
    commands: () => [
        {
            name: 'incrementCounter',
            execute() { /* ... */ }
        }
    ]
});

function App() {
    const editorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const editor = HeadlessEditor.create({
            extensions: [counterExtension]
        });
        if (editorRef.current) {
            editor.mount(editorRef.current);
        }
        return () => editor.destroy();
    }, []);

    return <div ref={editorRef} />;
}
```
