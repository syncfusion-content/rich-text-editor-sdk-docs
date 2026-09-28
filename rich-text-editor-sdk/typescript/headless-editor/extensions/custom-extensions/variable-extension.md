---
layout: post
title: Document Variable Extension Example | Headless Editor | Syncfusion
description: A runnable Document Variable custom extension for the Headless Editor that turns {{name}} tokens into styled chips.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Document Variable Extension Example

This page walks through a runnable Document Variable custom extension. Users type a token like `{{customerName}}` and the editor wraps the typed text in a styled chip. The same extension also accepts input from a toolbar button and from a keyboard shortcut.

## What the example demonstrates

- A `variable` mark with `name` and `value` attributes.
- An `insertVariable` command that wraps the built-in `insertText` command.
- A keyboard shortcut that cycles through the variable list.
- An input rule that turns `{{name}}` text into a `variable` mark.
- A NodeView that renders the chip and a `domSpecs` block that round-trips the same HTML.
- A toolbar above the editor with three buttons, one per built-in variable.

## Why a mark and not a node

A variable is metadata attached to typed text, not a self-contained piece of content. The user types `{{customerName}}` and that text remains visible. A mark is the right shape: it decorates the existing text and carries the `name` and `value` attributes for downstream renderers.

## The extension

```typescript
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
                canExecute(_ctx, payload: InsertVariablePayload) {
                    return payload?.name !== undefined;
                },
                execute(_ctx, payload: InsertVariablePayload) {
                    // Inserts the trigger text `{{name}}` at the caret. The
                    // input rule below picks it up and applies the
                    // `variable` mark to it.
                    this.editor?.commands.insertText({ text: `{{${payload.name}}}` });
                }
            }
        ];
    },

    keyboardShortcuts() {
        let cycleIndex = 0;
        return {
            'Mod-Shift-v': () => {
                const next = this.options.variables[cycleIndex % this.options.variables.length];
                cycleIndex += 1;
                this.editor?.commands.insertVariable({ name: next.name });
                return true;
            }
        };
    },

    inputRules() {
        return [
            {
                id: 'variable:double-braces',
                pattern: /\{\{(\w+)\}\}$/,
                handler(ctx) {
                    const name = ctx.match[1];
                    const def = this.options.variables.find((v: VariableDef) => v.name === name);
                    if (!def) {
                        return;
                    }
                    // Apply the `variable` mark to the matched text. The
                    // `text` argument is the text the user actually typed
                    // (`{{customerName}}`); the mark wraps that text with
                    // the chip styling and carries the `name` and `value`
                    // attributes for downstream renderers.
                    ctx.dispatchCommand('inputRuleMark', {
                        markType: 'variable',
                        text: ctx.match[0],
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
                            { 'data-type': 'variable', 'data-name': attrs['name'] },
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
    },

    nodeViews() {
        return {
            variable: (node) => {
                const dom = document.createElement('span');
                dom.className = 'variable-chip';
                dom.setAttribute('data-name', String(node.attrs['name'] ?? ''));
                return { dom };
            }
        };
    }
});
```

## Running it

```html
<div id="variable-toolbar"></div>
<div id="headless-editor"></div>
```

```typescript
const headlessEditor: HeadlessEditor = HeadlessEditor.create({
    enableTabKey: true,
    extensions: [basicExtensions, variableExtension]
});

const container: HTMLElement | null = document.getElementById('headless-editor');
if (container) {
    headlessEditor.mount(container);
}
```

A full, runnable preview is available in the samples folder:

[`/code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/custom-extensions/variable`]({{ '/code-snippet/rich-text-editor-sdk/typescript/headless-editor/extensions/custom-extensions/variable' | relative_url }})

## What each contributor does

| Contributor | Role in this example |
|-------------|----------------------|
| `defineOptions` | Returns the list of variables consumers can choose from. |
| `marks` | Declares the `variable` mark with `name` and `value` attributes. |
| `commands` | Declares `insertVariable`, which inserts the trigger text and lets the input rule apply the mark. |
| `keyboardShortcuts` | Binds <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> to cycle through the variable list. |
| `inputRules` | Applies the `variable` mark to `{{name}}` text the user types. |
| `domSpecs` | Renders the mark as a `<span data-type="variable">` and parses the same shape back. |
| `nodeViews` | Renders the chip with a styled DOM wrapper. |

## Try it

In the runnable preview:

- Click any **Insert** button at the top of the editor to drop a `{{name}}` token at the caret.
- Type `{{customerName}}`, `{{invoiceNumber}}`, or `{{dueDate}}` and watch it convert into a chip.
- Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>V</kbd> to cycle through the variable list.

## See also

- [Custom Marks](custom-marks)
- [Custom Commands](custom-commands)
- [Custom Keyboard Shortcuts](custom-keyboard-shortcuts)
- [Custom Input Rules](custom-input-rules)
- [Custom DOM Specifications](custom-dom-specs)
- [Custom Node Views](custom-node-views)
- [Real-World Example](example)