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

// ── Preview wiring ──────────────────────────────────────────────────────────

const headlessEditor: HeadlessEditor = HeadlessEditor.create({
    enableTabKey: true,
    extensions: [basicExtensions, variableExtension]
});

const container: HTMLElement | null = document.getElementById('headless-editor');
if (container) {
    headlessEditor.mount(container);
}

const toolbar: HTMLElement | null = document.getElementById('variable-toolbar');
if (toolbar) {
    VARIABLES.forEach((v) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = `Insert ${v.label}`;
        btn.addEventListener('click', () => {
            headlessEditor.execute('insertVariable', { name: v.name });
        });
        toolbar.appendChild(btn);
    });
}