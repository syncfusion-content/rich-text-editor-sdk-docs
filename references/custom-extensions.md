# Custom Extensions

## Table of Contents
- [Overview](#overview)
- [Extension Config Fields](#extension-config-fields)
- [Custom Nodes](#custom-nodes)
- [Custom Marks](#custom-marks)
- [Custom Commands](#custom-commands)
- [Custom Keyboard Shortcuts](#custom-keyboard-shortcuts)
- [Custom Input Rules](#custom-input-rules)
- [Custom Plugins](#custom-plugins)
- [Custom DOM Specifications](#custom-dom-specifications)
- [Custom Node Views](#custom-node-views)
- [Custom Attributes](#custom-attributes)
- [Layering a Node View on an Existing Node](#layering-a-node-view-on-an-existing-node)
- [Extension Constraints](#extension-constraints)

For high-level documentation on `defineExtension`, configuring/reusing extensions, lifecycle, priority, registration, and a full end-to-end example, see [Extensions & Plugin System](./extensions-guide.md).

## Overview

When the built-in extensions don't cover your scenario, you can build your own. A custom extension adds a new node type, a new mark, a custom command, a keyboard shortcut, an input rule, a plugin, a DOM spec, or a node view — and you can mix any of them together.

Start from the `defineExtension` factory and an `ExtensionConfig` object that describes what you want the extension to contribute. The factory and signature are documented in [Extensions & Plugin System > Defining a Custom Extension](./extensions-guide.md#defining-a-custom-extension).

Use a custom extension when the built-in extensions cannot express the behavior you need. Common cases include a new block type, a new mark, a custom shortcut, a custom input rule, or a NodeView that renders a built-in node with extra product UI.

---

## Extension Config Fields

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

The deep-dive documentation for each contributor (nodes, marks, commands, keyboardShortcuts, inputRules, plugins, domSpecs, nodeViews, attributes, addNodeView) is in the sections below. See [Extensions & Plugin System](./extensions-guide.md) for the high-level overview, lifecycle, reuse, and the end-to-end Document Variable example.

---

## Custom Nodes

The `nodes` field on `ExtensionConfig` adds node types to the editor's schema. The contributor returns an array of `NodeDefinition` objects:

```ts
nodes?: (this: ExtensionScope<TOptions>) => NodeDefinition[]
```

The contributor returns the list of node definitions the extension adds to the editor. Each returned `NodeDefinition` must have a unique `name`.

### `NodeDefinition` shape

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Unique node type name. |
| `group` | `'root' \| 'block' \| 'container' \| 'inline' \| 'block list' \| 'list'` | Semantic group this node belongs to. |
| `content` | `NodeContent` | Optional. A content expression that constrains the children. |
| `attrs` | `AttributeDefinition[]` | Optional. Attribute definitions for the node. |
| `inline` | `boolean` | Optional. Marks the node as an inline (leaf) node. |
| `leaf` | `boolean` | Optional. Marks the node as a leaf with no content (for example, image or horizontal rule). |

### Example: a custom `callout` block

```ts
import { defineExtension, NodeContent } from '@syncfusion/ej2-headless-editor';

interface CalloutOptions {
    defaultVariant: 'info' | 'warning' | 'error';
    htmlAttributes?: Readonly<Record<string, string>>;
}

const calloutExtension = defineExtension<CalloutOptions>({
    name: 'callout',
    priority: 10,
    defineOptions: () => ({ defaultVariant: 'info', htmlAttributes: {} }),
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
    }
});
```

This is a simplified version of the built-in Callout extension.

### Priority for recursive containers

When a block can contain other blocks (for example, a table cell or a callout body), set `priority` to `10` so the container is added to the schema after the blocks it contains. See [Extensions & Plugin System > Priority Field](./extensions-guide.md#priority-field) for the full priority table.

---

## Custom Marks

The `marks` field on `ExtensionConfig` adds mark types to the editor. The contributor returns an array of `MarkDefinition` objects:

```ts
marks?: (this: ExtensionScope<TOptions>) => MarkDefinition[]
```

The contributor returns the list of mark definitions the extension adds to the editor. Each returned `MarkDefinition` must have a unique `name`.

### `MarkDefinition` shape

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Unique mark type name. |
| `attrs` | `AttributeDefinition[]` | Optional. Attribute definitions for the mark. |
| `inclusive` | `boolean` | Optional. When `false`, the mark is exclusive (typing inside it leaves it). Defaults to `true`. |
| `spanning` | `boolean` | Optional. When `true`, the mark spans across block boundaries. |
| `excludes` | `string[]` | Optional. Names of marks that cannot coexist with this mark. |

### Example: a custom `highlight` mark

```ts
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const highlightExtension = defineExtension({
    name: 'highlight',
    marks() {
        return [
            {
                name: 'highlight',
                attrs: [
                    { name: 'color', type: 'string', default: 'yellow' }
                ]
            }
        ];
    }
});
```

### How marks attach to text

Marks live on text nodes, not on blocks. When the user selects a range and applies a mark, every text node inside the range is wrapped with the mark.

---

## Custom Commands

The `commands` field on `ExtensionConfig` adds new commands or re-exports built-in commands. Each command has a unique `name`, an optional `payload`, and an `execute` function:

```ts
commands?: () => Command[]
```

The option returns the list of commands the extension adds. You can return commands you define inline, or import and re-export a built-in command. The same name can only be registered once; conflicts are surfaced by the editor.

### `Command` shape

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

### Defining a command

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

### Command parameters

Commands accept an optional payload. The payload is opaque to the editor; you define its shape inside the command:

```ts
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

### Re-exporting a built-in command

You can also import a built-in `Command` and re-export it from your own extension. The commands option accepts both new commands and command instances you have on hand:

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

Use this when you want a command to live alongside your extension's other code so consumers have a single import surface.

### Reaching commands from application code

Once the editor is created, custom commands are reachable through the same `execute` API as built-in commands:

```ts
const editor = HeadlessEditor.create({
    extensions: [counterExtension]
});

editor.execute('incrementCounter');
```

---

## Custom Keyboard Shortcuts

The `keyboardShortcuts` field on `ExtensionConfig` binds a key combination to a command:

```ts
keyboardShortcuts?: (this: ExtensionScope<TOptions>) => Record<string, () => boolean>
```

The option returns a map from key name to handler. Each handler runs a command and returns `true` when it handled the key, or `false` to let the next handler try.

### Key names

| Pattern | Meaning |
|---------|---------|
| `Mod-z` | <kbd>Ctrl</kbd>+<kbd>Z</kbd> on Windows / Linux, <kbd>⌘</kbd>+<kbd>Z</kbd> on macOS. |
| `Mod-Shift-z` | Adds <kbd>Shift</kbd>. |
| `Mod-Alt-Enter` | Adds <kbd>Alt</kbd> / <kbd>Option</kbd>. |
| `Enter`, `Tab`, `Backspace`, `Delete`, `Escape` | Named keys. |
| `ArrowUp`, `ArrowDown`, `ArrowLeft`, `ArrowRight` | Arrow keys. |

The `Mod-` prefix lets the same binding work cross-platform without writing two entries.

### Handler signature

A handler is a zero-arg function that returns `true` when it handled the key, or `false` to let the next handler run:

```ts
() => boolean
```

Return `true` after a successful command so the editor knows the key was used. Return `false` if you want the key event to keep flowing to other handlers.

### Example: an extra `Mod-Shift-c` shortcut

The editor already ships with a `toggleBold` command. Bind a custom shortcut to it without touching the built-in `Mod-b` binding:

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

### Shortcut conflicts

When two extensions register the same key, the editor dispatches them in registration order. The first handler that returns `true` consumes the key. To opt out, return `false` from your handler and let the next extension handle the key.

### Merging with `extend`

When you call `extend` on an extension that already defines shortcuts, the editor merges the two maps. Override keys win; the base extension's keys are preserved. See [Extensions & Plugin System > Extend Method](./extensions-guide.md#extend-method) for the full merge semantics.

---

## Custom Input Rules

The `inputRules` field on `ExtensionConfig` turns a short typing pattern into a richer editor action. For example, typing `**word**` in plain text and watching it become bold.

```ts
inputRules?: (this: ExtensionScope<TOptions>) => readonly InputRuleDefinition[]
```

The contributor returns the list of input rule definitions the extension registers. Each rule matches a pattern against the text immediately before the cursor; when the pattern matches, the rule's handler runs and mutates state through `dispatchCommand`.

### `InputRuleDefinition` shape

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique rule identifier. Useful for debugging and analytics. |
| `pattern` | `RegExp` | Pattern tested against the text before the cursor. Must end with `$`. |
| `handler` | `(ctx: InputRuleContext) => void` | Invoked when the pattern matches. |
| `priority` | `number` | Optional. Higher rules run earlier. |
| `label` | `string` | Optional. Human-readable label for tooling. |
| `allowUndo` | `boolean` | Optional. Whether the resulting change participates in undo/redo. |

### `InputRuleContext` shape

| Field | Description |
|-------|-------------|
| `match` | The `RegExpExecArray` produced by `pattern.exec`. |
| `start` | Start position of the match in the document. |
| `end` | End position of the match in the document. |
| `nodeAt` | The `EditorNode` at the cursor, or `null` if unavailable. |
| `selection` | The current editor selection. |
| `dispatchCommand` | Call to mutate state from inside a handler. |

### Mutating state

Inside a handler, call `dispatchCommand(commandName, payload)` to mutate the document:

```ts
dispatchCommand('wrapInHeading', { level: 1 });
```

The pattern must end with `$` so it only matches when the user has just typed the closing characters of the trigger.

### Example: a `**bold**` input rule

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

The handler extracts the captured text and dispatches a command, which applies bold to the matched range.

---

## Custom Plugins

The `plugins` field on `ExtensionConfig` adds a long-lived observer to the editor. A plugin is the right home for behavior that has to follow the editor over time, like logging, focus tracking, or content change reactions.

```ts
plugins?: (this: ExtensionScope<TOptions>) => readonly Plugin[]
```

The option returns the list of plugins the extension adds. Each entry is a `Plugin` instance built with the `Plugin` constructor from the `prosemirror-state` package, imported directly.

### Import plugin

`Plugin` is included in the `prosemirror-state` package used by the Headless Editor, so you do not need to install it separately.

Import it directly in your extension:

```ts
import { Plugin } from 'prosemirror-state';
```

### Example: a focus-tracker plugin

The following plugin watches the editor's focus and blur events and logs them. It is mounted by the editor and lives for the life of the editor instance.

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

### When to ship a plugin

| Use `plugins` when | Use `addExtensions` when |
|---------------------|---------------------------|
| You need to observe or react to editor activity over time. | You only need to add nodes, marks, commands, or shortcuts. |
| The lifetime of the work is tied to the editor. | The lifetime of the work is per-extension. |
| You are wrapping a third-party library that needs to be present alongside the editor. | You are building a small extension. |

> A plugin that needs to change the document must dispatch a command through `editor.execute(name, payload)` rather than mutating state on its own.

---

## Custom DOM Specifications

The `domSpecs` field on `ExtensionConfig` describes how a node or mark is rendered to HTML and how HTML is read back into the schema. The two halves of the field, `toDOM` and `parseDOM`, keep saved content and parsed content in sync.

```ts
domSpecs?: (this: ExtensionScope<TOptions>) => ExtensionDOMSpecs
```

The option returns a `ExtensionDOMSpecs` collection keyed by node name and mark name. Each entry is one descriptor.

### `NodeDOMDescriptor` shape

| Field | Type | Description |
|-------|------|-------------|
| `toDOM(attrs)` | `(attrs) => DOMOutputDescriptor` | Returns the HTML representation of the node. |
| `parseDOM` | `readonly ParseRule[]` | Optional. Rules for parsing HTML into this node. |

### `MarkDOMDescriptor` shape

| Field | Type | Description |
|-------|------|-------------|
| `toDOM(attrs, inline)` | `(attrs, inline) => DOMOutputDescriptor` | Returns the HTML representation of the mark. |
| `parseDOM` | `readonly ParseRule[]` | Optional. Rules for parsing HTML into this mark. |

### `DOMOutputDescriptor` shape

`DOMOutputDescriptor` accepts either a tag-name string or a nested array spec:

```ts
'div'

['div', { class: 'callout' }, 0]

['span', { class: 'highlight', style: 'background-color: yellow' }, 0]
```

`0` is the content slot where the children are rendered.

### `ParseRule` shape

Each entry in `parseDOM` is a rule that matches against an HTML element and reads attributes from it.

| Field | Description |
|-------|-------------|
| `tag` | The CSS selector to match. For example, `div[data-type="callout"]`. |
| `getAttrs(node)` | Function. Reads the attribute values back out of the matched element. |

### Example: a callout with both render and parse

The following extension describes a callout that renders as a `<div data-type="callout" data-variant="...">` and parses the same shape back when HTML is loaded into the editor:

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

---

## Custom Node Views

The `nodeViews` field on `ExtensionConfig` takes over how a node is rendered. A node view is the right home when you want the editor to display a node with your own DOM and your own behavior, not just the default `domSpecs` HTML.

```ts
nodeViews?: (this: ExtensionScope<TOptions>) => Record<string, (node: EditorNode) => NodeViewDescriptor | null>
```

### `NodeViewDescriptor` shape

| Field | Description |
|-------|-------------|
| `dom` | The DOM root this view manages. Required. |
| `contentDOM` | Where child content is rendered. If `null`, the node is treated as atom-like. |
| `update(attrs)` | Called when the node's data changes; return `true` if the view is still valid. |
| `ignoreMutation(mutation)` | Return `true` to tell the editor the mutation came from the view itself. |
| `destroy()` | Cleanup on view teardown. |
| `selectNode()` | Called when the node becomes the editor selection. |
| `deselectNode()` | Called when the node loses the editor selection. |

### `dom` and `contentDOM`

`dom` is the outer wrapper the editor mounts. If your node has editable children, `contentDOM` is where the editor inserts them. If you only need a leaf widget, omit `contentDOM`.

### `update` lifecycle

`update(attrs)` runs whenever the node's data changes. Returning `true` keeps the existing view in place; returning `false` triggers a full rebuild. Use `update` to react to attribute changes (for example, refreshing a label when an attribute changes).

### `ignoreMutation` lifecycle

`ignoreMutation(mutation)` runs for every DOM mutation inside the view. Return `true` when a mutation is the node view's own product. Returning `false` lets the editor treat the mutation as an external edit and respond accordingly.

### Example: a badge with a click handler

Imagine a `badge` block that displays a label and reacts to a click. The node view builds the wrapper element, attaches the click handler, and cleans up on teardown:

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

### Precedence over `domSpecs`

Node views take precedence over DOM specs for rendering. The editor uses `domSpecs` to produce HTML on save; it uses `nodeViews` to mount the running view in the editor surface. If both are defined for the same node, `nodeViews` controls the live render.

---

## Custom Attributes

The `attrs` field on `NodeDefinition` and `MarkDefinition` declares the typed attributes a node or mark carries. Each attribute is described by an `AttributeDefinition` that says what it is called, what type of value it stores, and what default it falls back to.

### `AttributeDefinition` shape

| Field | Type | Description |
|-------|------|-------------|
| `name` | `string` | Unique attribute name within the node or mark. |
| `type` | `'string' \| 'number' \| 'boolean' \| 'enum'` | Storage type. |
| `default` | `unknown` | Optional. Default value when the attribute is not supplied. |
| `required` | `boolean` | Optional. When `true`, the attribute must be supplied explicitly and no default is used. |
| `values` | `readonly string[]` | Required for `type: 'enum'`. Allowed values (non-empty). |

### Example attribute definitions

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

### Default values

When a node or mark is created without an attribute, the editor substitutes the `default` value. Use `null` for attributes that have no meaningful default and treat `null` as "unset" in your NodeView or DOM spec.

---

## Layering a Node View on an Existing Node

Built-in extensions expose an `addNodeView` option so the consuming product can layer its own UI on top of the extension's underlying node structure. The extension keeps ownership of the schema and the data; the product contributes the user-facing wrapper.

```ts
addNodeView?: () => Record<string, NodeViewFactory>
```

### When to use `addNodeView` instead of `nodeViews`

| Use `addNodeView` when | Use `nodeViews` when |
|------------------------|----------------------|
| You are extending an existing built-in extension. | You are defining a new node from scratch. |
| The extension already provides a schema. | You contribute both schema and render. |
| You want the extension to keep ownership of structure. | The node is fully yours. |

### Example: layering a custom UI on a built-in node

A product can mount its own DOM around a built-in node by passing a factory through `addNodeView`. The factory receives the node and returns the DOM the editor should display.

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
