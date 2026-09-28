---
layout: post
title: Custom Extension Real-World Example | Headless Editor | Syncfusion
description: A complete mention extension example exercising every contributor in the Headless Editor extension configuration.
platform: rich-text-editor-sdk
control: Headless Editor
documentation: ug
domainurl: https://help.syncfusion.com/rich-text-editor-sdk
---

# Custom Extension Real-World Example

This page walks through a single `defineExtension` block that wires every contributor on `ExtensionConfig`. The example is a `mention` block extension: a user types `@` and selects a name from a popup, and the editor inserts an inline mention node that renders as a chip and survives parsing.

## The extension

```typescript
import { defineExtension } from '@syncfusion/ej2-headless-editor';

const mentionExtension = defineExtension({
    name: 'mention',

    defineOptions() {
        return {
            trigger: '@',
            sources: async (query) => loadUsers(query)
        };
    },

    addExtensions() {
        return [];
    },

    priority: 10,

    nodes() {
        return [
            {
                name: 'mention',
                group: 'inline',
                inline: true,
                content: '',
                attrs: [
                    { name: 'id', type: 'string', default: '' },
                    { name: 'label', type: 'string', default: '' }
                ]
            }
        ];
    },

    commands() {
        return [
            {
                name: 'openMentionMenu',
                canExecute() { return true; },
                execute() { /* ... */ }
            },
            {
                name: 'closeMentionMenu',
                canExecute() { return true; },
                execute() { /* ... */ }
            },
            {
                name: 'insertMention',
                canExecute(_ctx, payload: { id: string; label: string }) {
                    return payload?.id !== undefined;
                },
                execute(_ctx, payload: { id: string; label: string }) { /* ... */ }
            }
        ];
    },

    keyboardShortcuts() {
        return {
            'Mod-Shift-m': () => this.editor.commands.openMentionMenu()
        };
    },

    inputRules() {
        return [];
    },

    domSpecs() {
        return {
            nodes: {
                mention: {
                    toDOM(attrs) {
                        return [
                            'span',
                            { 'data-type': 'mention', 'data-id': attrs['id'] },
                            `@${attrs['label']}`
                        ];
                    },
                    parseDOM: [
                        {
                            tag: 'span[data-type="mention"]',
                            getAttrs(node) {
                                const element = node as HTMLElement;
                                return {
                                    id: element.getAttribute('data-id'),
                                    label: element.textContent?.replace(/^@/, '') ?? ''
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
            mention: (node) => {
                const dom = document.createElement('span');
                dom.className = 'mention-chip';
                dom.textContent = `@${node.attrs['label']}`;
                return { dom };
            }
        };
    },

    onRegister() {
        this.editor?.events.on('mention:opened', (e) => console.log('opened', e));
    },

    onReady() {
        console.log('mention extension ready');
    },

    onDestroy() {
        console.log('mention extension destroyed');
    }
});
```

## What each contributor does

| Contributor | Role in this example |
|-------------|----------------------|
| `defineOptions` | Returns the option shape: trigger character and an async source for user lookup. |
| `addExtensions` | Returns zero nested extensions. |
| `priority` | `10` so the mention node is added after the inline nodes it lives next to. |
| `nodes` | Declares the `mention` inline node with `id` and `label` attributes. |
| `commands` | Declares `openMentionMenu`, `closeMentionMenu`, and `insertMention`. |
| `keyboardShortcuts` | Binds <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd> to open the menu. |
| `inputRules` | Returns an empty list. The mention trigger is implemented via `keyboardShortcuts`. |
| `domSpecs` | Renders the node as a `<span data-type="mention">` and parses the same shape back. |
| `nodeViews` | Renders the chip with a styled DOM wrapper. |
| `onRegister` | Subscribes to an extension event when the editor wires up. |
| `onReady` | Logs once the editor surface is ready. |
| `onDestroy` | Logs on editor teardown. |

## Running it

Pass `mentionExtension` to `HeadlessEditor.create()` along with the built-in extensions the menu needs (typically `paragraphExtension`, `textExtension`, `boldExtension`):

```typescript
import { HeadlessEditor } from '@syncfusion/ej2-headless-editor';

const editor = HeadlessEditor.create({
    enableTabKey: true,
    extensions: [
        mentionExtension
    ]
});
```

This example is intentionally compact. A production mention extension would add a popup menu component, fetch results from `options.sources`, and call `editor.execute('insertMention', { id, label })` with the chosen user. The contributor shape above is the contract for adding that behavior.

## See also

- [Define an Extension](define-extension)
- [Configure an Extension](configure)
- [Extend an Extension](extend)
- [Extension Options](options)
- [Extension Lifecycle](lifecycle)
- [Extension Priority](priority)
- [Custom Nodes](custom-nodes)
- [Custom Commands](custom-commands)
- [Custom Keyboard Shortcuts](custom-keyboard-shortcuts)
- [Custom Input Rules](custom-input-rules)
- [Custom DOM Specifications](custom-dom-specs)
- [Custom Node Views](custom-node-views)