# Custom Extensions & Plugins

## Table of Contents
- [Defining Extensions](#defining-extensions)
- [Extension Configuration](#extension-configuration)
- [Registering Custom Extensions](#registering-custom-extensions)
- [Reusing Extensions](#reusing-extensions)
- [Extension Lifecycle](#extension-lifecycle)
- [Extension Constraints](#extension-constraints)
- [End-to-End Example: Document Variable](#end-to-end-example-document-variable)

## Defining Extensions

Use the `defineExtension` factory to build a custom extension from an `ExtensionConfig`.

### Import

```ts
import { defineExtension } from '@syncfusion/ej2-headless-editor';
```

### Signature

```ts
function defineExtension<TOptions extends object = object>(
    config: ExtensionConfig<TOptions>
): ExtensionDefinition<TOptions>
```

`TOptions` is the extension's option shape. It defaults to `object`. Pass a stronger shape for typed `defineOptions`, `configure`, and `extend`.

### Minimum Config

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

---

## Extension Configuration

### The Returned Definition

| Property | Type | Description |
|----------|------|-------------|
| `name` | `string` | The unique extension identifier. |
| `configure(options)` | method | Returns a new `ExtensionDefinition` with merged option defaults. |
| `extend(overrides)` | method | Returns a new `ExtensionDefinition` with overridden configuration. |

### Extension Config Fields

| Field | Purpose |
|-------|---------|
| `name` | Unique identifier for the extension within an editor instance. |
| `priority` | Controls the order in which the extension's nodes are added to the schema. Defaults to `50`. |
| `defineOptions` | Factory that returns the extension's default option values. |
| `addExtensions` | Contribute additional extensions (composition). |
| `nodes` | Contribute node type definitions. |
| `marks` | Contribute mark type definitions. |
| `commands` | Contribute command definitions. |
| `keyboardShortcuts` | Contribute keyboard shortcut handlers. |
| `inputRules` | Contribute input rule definitions. |
| `plugins` | Contribute editor plugins. |
| `domSpecs` | Contribute DOM rendering specs for nodes and marks. |
| `nodeViews` | Contribute NodeView factories for nodes. |
| `onRegister` | Lifecycle hook called after successful registration. |
| `onReady` | Lifecycle hook called after editor startup completion. |
| `onDestroy` | Lifecycle hook called during editor destruction. |

### Name Field

Unique identifier for the extension within an editor instance:

```ts
const extension = defineExtension({
    name: 'my-feature'
});
```

### Priority Field

`priority` is an optional numeric field that controls the order in which the extension is wired up. Higher numbers are processed first; lower numbers are processed last. When `priority` is omitted, the editor uses `50`.

| Priority | Use for | Built-in examples |
|----------|---------|-------------------|
| `100` | Standalone blocks (fillers) that should be available before the blocks that hold them. | Paragraph, heading, image, horizontal rule. |
| `50` | The default. Most extensions do not need to set this. | Bold, italic, link. |
| `10` | Recursive containers that hold other blocks. | Table, blockquote, list, callout, collapsible. |

```ts
import { defineExtension, NodeContent } from '@syncfusion/ej2-headless-editor';

const calloutExtension = defineExtension({
    name: 'callout',
    priority: 10,
    nodes() {
        return [
            {
                name: 'callout',
                group: 'block',
                content: NodeContent.block().oneOrMore()
            }
        ];
    }
});
```

### Nodes Field

The `nodes` field on `ExtensionConfig` adds node types to the editor's schema. The contributor returns an array of `NodeDefinition` objects:

```ts
nodes?: (this: ExtensionScope<TOptions>) => NodeDefinition[]
```

| Field | Description |
|-------|-------------|
| `name` | Unique node type name. |
| `group` | `'root' | 'block' | 'container' | 'inline' | 'block list' | 'list'`. |
| `content` | Optional. A content expression that constrains the children. |
| `attrs` | Optional. Attribute definitions for the node. |
| `inline` | Optional. Marks the node as an inline (leaf) node. |
| `leaf` | Optional. Marks the node as a leaf with no content. |

### Marks Field

The `marks` field on `ExtensionConfig` adds mark types to the editor. The contributor returns an array of `MarkDefinition` objects:

```ts
marks?: (this: ExtensionScope<TOptions>) => MarkDefinition[]
```

| Field | Description |
|-------|-------------|
| `name` | Unique mark type name. |
| `attrs` | Optional. Attribute definitions for the mark. |
| `inclusive` | Optional. When `false`, the mark is exclusive. Defaults to `true`. |
| `spanning` | Optional. When `true`, the mark spans across block boundaries. |
| `excludes` | Optional. Names of marks that cannot coexist with this mark. |

### Commands Field

The `commands` field on `ExtensionConfig` adds new commands or re-exports built-in commands. Each command has a unique `name`, an optional `payload`, and an `execute` function:

```ts
commands?: () => Command[]
```

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Unique command name within the editor instance. |
| `meta` | object | Optional. Metadata (label, category, icon) for tooling and UI. |
| `canExecute(ctx, payload)` | function | Optional. Returns `true` when the command can run on the current selection. |
| `execute(ctx, payload)` | function | Runs the command, mutating state through the supplied context. |

```ts
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

Commands accept an optional payload. The payload is opaque to the editor; you define its shape inside the command:

```ts
const calloutExtension = defineExtension({
    name: 'callout',
    commands() {
        return [
            {
                name: 'setCalloutVariant',
                canExecute(ctx, payload: { variant: 'info' | 'warning' | 'error' }) {
                    return payload?.variant !== undefined;
                },
                execute(ctx, payload: { variant: 'info' | 'warning' | 'error' }) {
                    // Apply payload.variant to the current callout
                }
            }
        ];
    }
});
```

The command facade at `editor.execute('setCalloutVariant', { variant: 'warning' })` enforces the payload shape at the call site.

You can also import a built-in `Command` and re-export it from your own extension:

```ts
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

Once the editor is created, custom commands are reachable through the same `execute` API as built-in commands:

```ts
const editor = HeadlessEditor.create({
    extensions: [counterExtension]
});

editor.execute('incrementCounter');
```

### Keyboard Shortcuts Field

The `keyboardShortcuts` field on `ExtensionConfig` binds a key combination to a command:

```ts
keyboardShortcuts?: (this: ExtensionScope<TOptions>) => Record<string, () => boolean>
```

The handler is a zero-arg function that returns `true` when it handled the key, or `false` to let the next handler try:

```ts
() => boolean
```

| Pattern | Meaning |
|---------|---------|
| `Mod-z` | <kbd>Ctrl</kbd>+<kbd>Z</kbd> on Windows / Linux, <kbd>⌘</kbd>+<kbd>Z</kbd> on macOS. |
| `Mod-Shift-z` | Adds <kbd>Shift</kbd>. |
| `Mod-Alt-Enter` | Adds <kbd>Alt</kbd> / <kbd>Option</kbd>. |
| `Enter`, `Tab`, `Backspace`, `Delete`, `Escape` | Named keys. |
| `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight` | Arrow keys. |

```ts
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const extraShortcutsExtension = defineExtension({
    name: 'extra-shortcuts',
    keyboardShortcuts() {
        return {
            'Mod-Shift-c': () => this.editor.commands.toggleBold()
        };
    }
});
```

Both `Mod-b` (built-in) and `Mod-Shift-c` (this extension) toggle bold.

When two extensions register the same key, the editor dispatches them in registration order. The first handler that returns `true` consumes the key. To opt out, return `false` from your handler and let the next extension handle the key.

### Input Rules Field

The `inputRules` field on `ExtensionConfig` turns a short typing pattern into a richer editor action:

```ts
inputRules?: (this: ExtensionScope<TOptions>) => readonly InputRuleDefinition[]
```

The pattern must end with `$` so it only matches when the user has just typed the closing characters of the trigger.

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique rule identifier. Useful for debugging and analytics. |
| `pattern` | `RegExp` | Pattern tested against the text before the cursor. Must end with `$`. |
| `handler` | `(ctx: InputRuleContext) => void` | Invoked when the pattern matches. |
| `priority` | `number` | Optional. Higher rules run earlier. |
| `label` | `string` | Optional. Human-readable label for tooling. |
| `allowUndo` | `boolean` | Optional. Whether the resulting change participates in undo/redo. |

`InputRuleContext` fields: `match`, `start`, `end`, `nodeAt`, `selection`, `dispatchCommand`. Inside a handler, call `dispatchCommand(commandName, payload)` to mutate the document:

```ts
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const boldStarsExtension = defineExtension({
    name: 'bold-stars',
    inputRules() {
        return [
            {
                id: 'mark:bold-stars',
                pattern: /\*\*([^*]+)\*\*$/,
                priority: 100,
                handler(ctx) {
                    const text = ctx.match[1];
                    ctx.dispatchCommand('applyBold', { text });
                }
            }
        ];
    }
});
```

### Plugins Field

The `plugins` field on `ExtensionConfig` adds a long-lived observer to the editor. `Plugin` is included in the `prosemirror-state` package used by the Headless Editor, so you do not need to install it separately:

```ts
import { Plugin } from 'prosemirror-state';
```

```ts
import { defineExtension } from '@syncfusion/ej2-headless-editor';
import { Plugin } from 'prosemirror-state';

const focusTrackerExtension = defineExtension({
    name: 'focus-tracker',
    plugins() {
        return [
            new Plugin({
                view(editorView) {
                    const onFocus = () => console.log('editor focused');
                    const onBlur = () => console.log('editor blurred');
                    editorView.dom.addEventListener('focus', onFocus);
                    editorView.dom.addEventListener('blur', onBlur);
                    return {
                        destroy() {
                            editorView.dom.removeEventListener('focus', onFocus);
                            editorView.dom.removeEventListener('blur', onBlur);
                        }
                    };
                }
            })
        ];
    }
});
```

A plugin that needs to change the document must dispatch a command through `editor.execute(name, payload)` rather than mutating state on its own.

### DOM Specs Field

The `domSpecs` field on `ExtensionConfig` describes how a node or mark is rendered to HTML and how HTML is read back into the schema:

```ts
domSpecs?: (this: ExtensionScope<TOptions>) => ExtensionDOMSpecs
```

`NodeDOMDescriptor` and `MarkDOMDescriptor` each expose `toDOM` (returns the HTML representation) and an optional `parseDOM` (rules for parsing HTML back into the schema):

```ts
import { defineExtension, NodeContent } from '@syncfusion/ej2-headless-editor';

const calloutExtension = defineExtension({
    name: 'callout',
    nodes() {
        return [
            {
                name: 'callout',
                group: 'block',
                content: NodeContent.block().oneOrMore(),
                attrs: [
                    { name: 'variant', type: 'enum', default: 'info',
                      values: ['info', 'warning', 'error'] }
                ]
            }
        ];
    },
    domSpecs() {
        return {
            nodes: {
                callout: {
                    toDOM(attrs) {
                        return [
                            'div',
                            { 'data-type': 'callout', 'data-variant': attrs['variant'] },
                            0
                        ];
                    },
                    parseDOM: [
                        {
                            tag: 'div[data-type="callout"]',
                            getAttrs(node: Node) {
                                const element = node as HTMLElement;
                                return {
                                    variant: element.getAttribute('data-variant') ?? 'info'
                                };
                            }
                        }
                    ]
                }
            }
        };
    }
});
```

`DOMOutputDescriptor` accepts either a tag-name string or a nested array spec. `0` is the content slot where the children are rendered.

### Node Views Field

The `nodeViews` field on `ExtensionConfig` takes over how a node is rendered. The contributor returns a map keyed by node name whose values receive the node and return a `NodeViewDescriptor` or `null`:

```ts
nodeViews?: (this: ExtensionScope<TOptions>) => Record<string, (node: EditorNode) => NodeViewDescriptor | null>
```

| Field | Description |
|-------|-------------|
| `dom` | The DOM root this view manages. Required. |
| `contentDOM` | Where child content is rendered. If `null`, the node is treated as atom-like. |
| `update(attrs)` | Called when the node's data changes; return `true` if the view is still valid. |
| `ignoreMutation(mutation)` | Return `true` to tell the editor the mutation came from the view itself. |
| `destroy()` | Cleanup on view teardown. |
| `selectNode()` | Called when the node becomes the editor selection. |
| `deselectNode()` | Called when the node loses the editor selection. |

```ts
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const badgeExtension = defineExtension({
    name: 'badge',
    nodes() {
        return [
            {
                name: 'badge',
                group: 'inline',
                inline: true,
                attrs: [
                    { name: 'label', type: 'string', default: '' }
                ]
            }
        ];
    },
    nodeViews() {
        return {
            badge: (node) => {
                const dom = document.createElement('span');
                dom.className = 'badge';
                dom.textContent = node.attrs['label'];
                dom.title = 'Click to copy';
                dom.style.cursor = 'pointer';

                const onClick = () => {
                    navigator.clipboard.writeText(node.attrs['label']);
                };
                dom.addEventListener('click', onClick);

                return {
                    dom,
                    update(node) {
                        dom.textContent = node.attrs['label'];
                        return true;
                    },
                    destroy() {
                        dom.removeEventListener('click', onClick);
                    }
                };
            }
        };
    }
});
```

Node views take precedence over DOM specs for rendering. The editor uses `domSpecs` to produce HTML on save; it uses `nodeViews` to mount the running view in the editor surface.

### Attributes

The `attrs` field on `NodeDefinition` and `MarkDefinition` declares the typed attributes a node or mark carries. Each attribute is described by an `AttributeDefinition`:

| Field | Description |
|-------|-------------|
| `name` | Unique attribute name within the node or mark. |
| `type` | `'string' | 'number' | 'boolean' | 'enum'`. Storage type. |
| `default` | Optional. Default value when the attribute is not supplied. |
| `required` | Optional. When `true`, the attribute must be supplied explicitly and no default is used. |
| `values` | Required for `type: 'enum'`. Allowed values (non-empty). |

```ts
import { defineExtension, AttributeDefinition, NodeContent } from '@syncfusion/ej2-headless-editor';

const customBlockExtension = defineExtension({
    name: 'customBlock',
    nodes() {
        const blockAttrs: AttributeDefinition[] = [
            { name: 'variant', type: 'enum', default: 'primary',
              values: ['primary', 'secondary'] }
        ];
        return [
            {
                name: 'customBlock',
                group: 'block',
                content: NodeContent.inline().zeroOrMore(),
                attrs: blockAttrs
            }
        ];
    }
});
```

When a node or mark is created without an attribute, the editor substitutes the `default` value. Use `null` for attributes that have no meaningful default and treat `null` as "unset" in your NodeView or DOM spec.

### Layering a Node View on an Existing Node

Built-in extensions expose an `addNodeView` option so the consuming product can layer its own UI on top of the extension's underlying node structure. The extension keeps ownership of the schema and the data; the product contributes the user-facing wrapper.

| Use `addNodeView` when | Use `nodeViews` when |
|------------------------|----------------------|
| You are extending an existing built-in extension. | You are defining a new node from scratch. |
| The extension already provides a schema. | You contribute both schema and render. |
| You want the extension to keep ownership of structure. | The node is fully yours. |

```ts
import { HeadlessEditor } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    enableTabKey: true,
    imageExtension: {
        addNodeView: () => ({
            image: ({ node }) => ({
                dom: // Define your custom UI here
            })
        })
    }
});
```

---

## Registering Custom Extensions

### Pass to HeadlessEditor.create

```ts
import { HeadlessEditor, defineExtension } from '@syncfusion/ej2-headless-editor';

const counterExtension = defineExtension({
    name: 'counter',
    commands: () => [
        {
            name: 'incrementCounter',
            execute() { /* ... */ }
        }
    ]
});

const editor = HeadlessEditor.create({
    extensions: [counterExtension]
});
```

### Combine with Built-In Extensions

```ts
import {
    HeadlessEditor,
    basicExtensions,
    defineExtension
} from '@syncfusion/ej2-headless-editor';

const customExtension = defineExtension({
    name: 'my-feature'
});

const editor = HeadlessEditor.create({
    extensions: [basicExtensions, customExtension]
});
```

---

## Reusing Extensions

A defined extension can be registered with multiple editors. `configure` and `extend` return a new definition each time. The original is not modified, so the same base extension can be customized differently for different editors.

### Configure Method

Use `ExtensionDefinition.configure(options)` to change an extension's option values without rebuilding the extension from scratch. The call returns a new extension with the supplied options layered on top of the defaults.

```ts
configure(options: Partial<TOptions>): ExtensionDefinition<TOptions>
```

`configure` merges the supplied options over the defaults returned by `defineOptions`. The merge is shallow; nested objects are not deep-merged.

```ts
const baseExtension = defineExtension({
    name: 'counter',
    defineOptions: () => ({ start: 0, step: 1, max: 10 })
});

const zeroStepExtension = baseExtension.configure({ step: 0 });
// zeroStepExtension has: { start: 0, step: 0, max: 10 }
```

Most built-in extensions expose an `htmlAttributes` option through the shared `ExtensionOptions` interface:

```ts
import { paragraphExtension } from '@syncfusion/ej2-headless-editor';

const themedBasicExtensions = paragraphExtension.configure({
    htmlAttributes: { class: 'dark-theme' }
});

const editor = HeadlessEditor.create({
    extensions: [themedBasicExtensions]
});
editor.mount(document.getElementById('editor') as HTMLElement);
```

### Extend Method

Use `ExtensionDefinition.extend(overrides)` to add, replace, or remove a contributor without rebuilding the extension from scratch. The call returns a new extension with the overrides applied.

```ts
extend(overrides: Partial<ExtensionConfig<TOptions>>): ExtensionDefinition<TOptions>
```

Unlike `configure`, which only replaces option values, `extend` can override any field in `ExtensionConfig` — including the contributor functions and lifecycle hooks.

```ts
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const baseExtension = defineExtension({
    name: 'counter',
    commands: () => [
        { name: 'increment', execute() { /* ... */ } }
    ]
});

const loggedExtension = baseExtension.extend({
    onRegister() {
        console.log('counter registered');
    }
});
```

`loggedExtension` inherits `name`, the `commands` contributor, and any other fields, but adds an `onRegister` hook.

| Use `configure` when | Use `extend` when |
|----------------------|---------------------|
| You only want to change option values. | You want to add, replace, or remove a contributor. |
| You want defaults to be inherited. | You want a new `nodes`, `marks`, `commands`, etc. |

`keyboardShortcuts` is merged rather than replaced when both the base and the override define it. The override is applied on top of the base, so the override can add or replace individual bindings without losing the base's bindings.

---

## Extension Lifecycle

Every custom extension moves through three lifecycle phases during the editor's life: registration, ready, and destruction. Hooks let you run code at the boundary of each phase.

| Hook | When it fires | Typical use |
|------|---------------|-------------|
| `onRegister` | After the extension has been registered with the editor. | Validate config, prepare internal state. |
| `onReady` | After the editor is fully started. | Start background tasks, register listeners. |
| `onDestroy` | During editor destruction, in reverse registration order. | Release listeners, flush pending state. |

All three hooks are optional. If a hook is not implemented, the extension simply moves to the next phase.

When an editor starts up:

1. Each extension is registered. `onRegister` fires in registration order.
2. The editor finishes starting up. `onReady` fires in registration order.

When the editor is destroyed:

1. `onDestroy` fires in reverse registration order, so the most recently registered extension cleans up first.

```ts
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const analyticsExtension = defineExtension({
    name: 'analytics',
    onRegister() {
        console.log('analytics registered');
    },
    onReady() {
        // Start a heartbeat or register a contentChanged listener
    },
    onDestroy() {
        // Flush pending analytics, remove listeners
    }
});
```

If an extension fails to start up because of an invalid configuration, the editor surfaces the error. Other extensions are not affected. Use `onRegister` to surface configuration errors early so they are caught before the editor finishes starting up.

---

## Extension Constraints

### What an extension can do

- Contribute node types, marks, commands, shortcuts, input rules
- Define custom plugins and DOM specs
- Implement NodeView for custom rendering
- Participate in the editor lifecycle
- Compose with other extensions
- Use `configure()` and `extend()` for reuse

### What an extension cannot do

- Mutate its own definition after creation; `ExtensionDefinition` is immutable.
- Mutate document state outside of a command handler or input rule handler. Use `editor.commands.*` for all state mutations.

---

## End-to-End Example: Document Variable

The Document Variable example ties the contributors together: a `variable` mark with `name` and `value` attributes, a registered `insertVariable` command with payload validation, a `{{name}}` input rule, a `domSpecs` block that renders the mark as a chip, and a <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> shortcut that cycles through the configured variables.

### `index.ts`

```ts
import {
    HeadlessEditor,
    basicExtensions,
    defineExtension
} from '@syncfusion/ej2-headless-editor';

interface VariableDef {
    name: string;
    label: string;
    value: string;
}

const VARIABLES: VariableDef[] = [
    { name: 'customerName', label: 'Customer Name', value: 'John Smith' },
    { name: 'invoiceNumber', label: 'Invoice Number', value: 'INV-2026-0042' },
    { name: 'dueDate', label: 'Due Date', value: '2026-10-15' }
];

interface InsertVariablePayload {
    name: string;
}

function resolveVariable(
    variables: readonly VariableDef[],
    name: string
): VariableDef | undefined {
    return variables.find((v) => v.name === name);
}

let editorRef: HeadlessEditor | null = null;

interface InsertVariableArgs {
    name: string;
    from: number;
    to: number;
}

const variableExtension = defineExtension({
    name: 'variable',

    defineOptions: () => ({
        variables: VARIABLES
    }),

    marks() {
        return [
            {
                name: 'variable',
                attrs: [
                    { name: 'name', type: 'string', default: '' },
                    { name: 'value', type: 'string', default: '' }
                ]
            }
        ];
    },

    commands() {
        return [
            {
                name: 'insertVariable',
                canExecute(_ctx: any, payload: InsertVariablePayload) {
                    return (
                        payload !== undefined &&
                        typeof payload.name === 'string' &&
                        payload.name.length > 0
                    );
                },
                execute(_ctx: any, payload: InsertVariableArgs) {
                    const def = resolveVariable(VARIABLES, payload.name);
                    if (!def) {
                        return;
                    }
                    editorRef?.execute('inputRuleMark', {
                        markType: 'variable',
                        text: def.value,
                        matchStart: payload.from,
                        matchEnd: payload.to,
                        attrs: { name: def.name, value: def.value }
                    });
                }
            }
        ];
    },

    keyboardShortcuts() {
        const variables = this.options.variables;
        let cycleIndex = 0;
        return {
            'Mod-Alt-v': () => {
                const editor = this.editor;
                if (!editor) {
                    return false;
                }
                const def = variables[cycleIndex % variables.length];
                cycleIndex += 1;
                const selection = editor.getSelection();
                return editor.execute('insertVariable', {
                    name: def.name,
                    from: selection.from,
                    to: selection.to
                });
            }
        };
    },

    inputRules(this) {
        const _this = this;
        return [
            {
                id: 'variable:double-braces',
                pattern: /\{\{(\w+)\}\}$/,
                handler(ctx: any) {
                    const name = ctx.match[1];
                    const def = resolveVariable(_this.options.variables, name);
                    if (!def) {
                        return;
                    }
                    ctx.dispatchCommand('inputRuleMark', {
                        markType: 'variable',
                        text: def.value,
                        matchStart: ctx.start,
                        matchEnd: ctx.end,
                        attrs: { name: def.name, value: def.value }
                    });
                }
            }
        ];
    },

    domSpecs() {
        return {
            marks: {
                variable: {
                    toDOM(attrs) {
                        return [
                            'span',
                            { 'data-type': 'variable', 'data-name': attrs['name'], 'class': 'variable-chip' },
                            0
                        ];
                    },
                    parseDOM: [
                        {
                            tag: 'span[data-type="variable"]',
                            getAttrs(node) {
                                const element = node as HTMLElement;
                                return {
                                    name: element.getAttribute('data-name') ?? '',
                                    value: ''
                                };
                            }
                        }
                    ]
                }
            }
        };
    }
});

const headlessEditor: HeadlessEditor = HeadlessEditor.create({
    enableTabKey: true,
    extensions: [basicExtensions, variableExtension]
});

editorRef = headlessEditor;

const container: HTMLElement | null = document.getElementById('headless-editor');
if (container) {
    headlessEditor.mount(container);
}
```

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Syncfusion TypeScript Headless Editor - Document Variable</title>
    <link href="https://unpkg.com/@syncfusion/ej2-tailwind3-theme@35.1.37/styles/headless-editor/index.css" rel="stylesheet">
</head>
<body>
    <div id="headless-editor"></div>
    <script type="module" src="index.ts"></script>
</body>
</html>
```
