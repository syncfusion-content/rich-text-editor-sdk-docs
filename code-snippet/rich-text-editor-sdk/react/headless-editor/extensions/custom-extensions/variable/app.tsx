import { useEffect, useRef } from 'react';
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

interface InsertVariableArgs {
    name: string;
    from: number;
    to: number;
}

function resolveVariable(
    variables: readonly VariableDef[],
    name: string
): VariableDef | undefined {
    return variables.find((v) => v.name === name);
}

export default function App() {
    const editorRef = useRef<HTMLDivElement>(null);
    const toolbarRef = useRef<HTMLDivElement>(null);
    // A module-level reference is used so the custom command's
    // `execute` can reach the editor facade. The reference is set
    // after `HeadlessEditor.create()` returns inside `useEffect`.
    const editorHolder: { current: HeadlessEditor | null } = { current: null };

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
                    // `inputRuleMark` command through the editor
                    // facade held in `editorHolder`.
                    execute(_ctx: any, payload: InsertVariableArgs) {
                        const def = resolveVariable(VARIABLES, payload.name);
                        if (!def) {
                            return;
                        }
                        editorHolder.current?.execute('inputRuleMark', {
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
                        toDOM(attrs: Record<string, any>) {
                            return [
                                'span',
                                { 'data-type': 'variable', 'data-name': attrs['name'], 'class': 'variable-chip' },
                                0
                            ];
                        },
                        parseDOM: [
                            {
                                tag: 'span[data-type="variable"]',
                                getAttrs(node: Node) {
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

    useEffect(() => {
        const editor = HeadlessEditor.create({
            enableTabKey: true,
            extensions: [basicExtensions, variableExtension]
        });

        editorHolder.current = editor;

        if (editorRef.current) {
            editor.mount(editorRef.current);
        }

        if (toolbarRef.current) {
            VARIABLES.forEach((v) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.textContent = `Insert ${v.label}`;
                btn.addEventListener('click', () => {
                    const selection = editor.getSelection();
                    editor.execute('insertVariable', {
                        name: v.name,
                        from: selection.from,
                        to: selection.to
                    });
                });
                toolbarRef.current.appendChild(btn);
            });
        }

        return () => editor.destroy();
    }, []);

    return (
        <>
            <div ref={toolbarRef} className="variable-toolbar" />
            <p className="variable-hint">
                Type a <code>{'{{name}}'}</code> token such as <code>{'{{customerName}}'}</code> or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> to cycle through the variables.
            </p>
            <div ref={editorRef} className="variable-editor" />
        </>
    );
}
