import * as React from 'react';
import {
    HeadlessEditor,
    basicExtensions,
    defineExtension
} from '@syncfusion/ej2-headless-editor';

const VARIABLES = [
    { name: 'customerName', label: 'Customer Name', value: 'John Smith' },
    { name: 'invoiceNumber', label: 'Invoice Number', value: 'INV-2026-0042' },
    { name: 'dueDate', label: 'Due Date', value: '2026-10-15' }
];

function resolveVariable(variables, name) {
    for (let i = 0; i < variables.length; i++) {
        if (variables[i].name === name) {
            return variables[i];
        }
    }
    return null;
}

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.editorRef = null;
        this.toolbarRef = null;
        // A class-level reference is used so the custom command's
        // `execute` can reach the editor facade.
        this.editorHolder = { current: null };

        const self = this;

        this.variableExtension = defineExtension({
            name: 'variable',

            defineOptions: () => ({ variables: VARIABLES }),

            marks() {
                return [{
                    name: 'variable',
                    attrs: [
                        { name: 'name', type: 'string', default: '' },
                        { name: 'value', type: 'string', default: '' }
                    ]
                }];
            },

            commands() {
                return [{
                    name: 'insertVariable',
                    canExecute(_ctx, payload) {
                        return (
                            payload !== undefined &&
                            typeof payload.name === 'string' &&
                            payload.name.length > 0
                        );
                    },
                    // The custom command dispatches the built-in
                    // `inputRuleMark` command through the editor
                    // facade held in `editorHolder`.
                    execute(_ctx, payload) {
                        const def = resolveVariable(VARIABLES, payload.name);
                        if (!def) {
                            return;
                        }
                        if (self.editorHolder.current) {
                            self.editorHolder.current.execute('inputRuleMark', {
                                markType: 'variable',
                                text: def.value,
                                matchStart: payload.from,
                                matchEnd: payload.to,
                                attrs: { name: def.name, value: def.value }
                            });
                        }
                    }
                }];
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

            inputRules() {
                const _this = this;
                return [{
                    id: 'variable:double-braces',
                    pattern: /\{\{(\w+)\}\}$/,
                    handler(ctx) {
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
                }];
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
                            parseDOM: [{
                                tag: 'span[data-type="variable"]',
                                getAttrs(node) {
                                    const element = node;
                                    return {
                                        name: element.getAttribute('data-name') || '',
                                        value: ''
                                    };
                                }
                            }]
                        }
                    }
                };
            }
        });
    }

    componentDidMount() {
        const editor = HeadlessEditor.create({
            enableTabKey: true,
            extensions: [basicExtensions, this.variableExtension]
        });

        this.editorHolder.current = editor;

        if (this.editorRef) {
            editor.mount(this.editorRef);
        }

        if (this.toolbarRef) {
            const self = this;
            VARIABLES.forEach((v) => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.textContent = `Insert ${v.label}`;
                btn.addEventListener('click', function () {
                    const selection = editor.getSelection();
                    editor.execute('insertVariable', {
                        name: v.name,
                        from: selection.from,
                        to: selection.to
                    });
                });
                self.toolbarRef.appendChild(btn);
            });
        }
    }

    componentWillUnmount() {
        if (this.editorHolder.current) {
            this.editorHolder.current.destroy();
            this.editorHolder.current = null;
        }
    }

    render() {
        return (
            <React.Fragment>
                <div ref={(el) => { this.toolbarRef = el; }} className="variable-toolbar" />
                <p className="variable-hint">
                    Type a <code>{'{{name}}'}</code> token such as <code>{'{{customerName}}'}</code> or press <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd> to cycle through the variables.
                </p>
                <div ref={(el) => { this.editorRef = el; }} className="variable-editor" />
            </React.Fragment>
        );
    }
}
