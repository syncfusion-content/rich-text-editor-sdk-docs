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

// Resolves a variable definition by name from the option table.
function resolveVariable(
    variables: readonly VariableDef[],
    name: string
): VariableDef | undefined {
    return variables.find((v) => v.name === name);
}

let editorRef: HeadlessEditor | null = null;

// Reusable payload used by the custom command and by the keyboard
// shortcut so both paths share the same arguments.
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
                // The custom command dispatches the built-in
                // `inputRuleMark` command through `editorRef`
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
        // `this.editor` is the real `HeadlessEditor`; cycle through
        // the configured variables and dispatch the registered
        // `insertVariable` command for each press.
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
                    // Replace the typed token with the display value
                    // and apply the `variable` mark.
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

// ── Preview wiring ──────────────────────────────────────────────────────────

const headlessEditor: HeadlessEditor = HeadlessEditor.create({
    enableTabKey: true,
    extensions: [basicExtensions, variableExtension]
});

editorRef = headlessEditor;

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
            const selection = headlessEditor.getSelection();
            headlessEditor.execute('insertVariable', {
                name: v.name,
                from: selection.from,
                to: selection.to
            });
        });
        toolbar.appendChild(btn);
    });
}
