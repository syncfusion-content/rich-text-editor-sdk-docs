import * as React from 'react';
import {
    HeadlessEditor,
    basicExtensions,
    defineExtension,
    placeholderExtension
} from '@syncfusion/ej2-headless-editor';

interface VariableDef {
    name: string;
    label: string;
    value: string;
}

interface InsertVariableArgs {
    name: string;
    from: number;
    to: number;
}

interface VariableEditorProps {}

var VARIABLES: VariableDef[] = [
    {
        name: 'customerName',
        label: 'Customer Name',
        value: 'John Smith'
    },
    {
        name: 'invoiceNumber',
        label: 'Invoice Number',
        value: 'INV-2026-0042'
    },
    {
        name: 'dueDate',
        label: 'Due Date',
        value: '2026-10-15'
    }
];

function resolveVariable(
    variables: VariableDef[],
    name: string
): VariableDef | undefined {
    for (var i = 0; i < variables.length; i++) {
        if (variables[i].name === name) {
            return variables[i];
        }
    }

    return undefined;
}

var editorRef: HeadlessEditor | null = null;

var variableExtension = defineExtension({
    name: 'variable',

    defineOptions: function () {
        return {
            variables: VARIABLES
        };
    },

    marks: function () {
        return [
            {
                name: 'variable',
                attrs: [
                    {
                        name: 'name',
                        type: 'string',
                        default: ''
                    },
                    {
                        name: 'value',
                        type: 'string',
                        default: ''
                    }
                ]
            }
        ];
    },

    commands: function () {
        return [
            {
                name: 'insertVariable',

                canExecute: function (
                    _ctx: any,
                    payload: InsertVariableArgs
                ) {
                    return !!(
                        payload &&
                        typeof payload.name === 'string' &&
                        payload.name.length > 0
                    );
                },

                execute: function (
                    _ctx: any,
                    payload: InsertVariableArgs
                ) {
                    if (!editorRef || !payload) {
                        return;
                    }

                    var definition = resolveVariable(
                        VARIABLES,
                        payload.name
                    );

                    if (!definition) {
                        return;
                    }

                    editorRef.execute('inputRuleMark', {
                        markType: 'variable',
                        text: definition.value,
                        matchStart: payload.from,
                        matchEnd: payload.to,
                        attrs: {
                            name: definition.name,
                            value: definition.value
                        }
                    });
                }
            }
        ];
    },

    keyboardShortcuts: function () {
        var cycleIndex = 0;
        var variables = VARIABLES;

        return {
            'Mod-Alt-v': function () {
                var editor = this.editor;

                if (!editor || variables.length === 0) {
                    return false;
                }

                var definition =
                    variables[cycleIndex % variables.length];

                cycleIndex++;

                var selection = editor.getSelection();

                return editor.execute('insertVariable', {
                    name: definition.name,
                    from: selection.from,
                    to: selection.to
                });
            }
        };
    },

    inputRules: function (thisArg: any) {
        var extension = thisArg || this;

        return [
            {
                id: 'variable:double-braces',

                pattern: /\{\{(\w+)\}\}$/,

                handler: function (ctx: any) {
                    var name = ctx.match[1];

                    var definition = resolveVariable(
                        extension.options.variables,
                        name
                    );

                    if (!definition) {
                        return;
                    }

                    ctx.dispatchCommand('inputRuleMark', {
                        markType: 'variable',
                        text: definition.value,
                        matchStart: ctx.start,
                        matchEnd: ctx.end,
                        attrs: {
                            name: definition.name,
                            value: definition.value
                        }
                    });
                }
            }
        ];
    },

    domSpecs: function () {
        return {
            marks: {
                variable: {
                    toDOM: function (attrs: any) {
                        return [
                            'span',
                            {
                                'data-type': 'variable',
                                'data-name': attrs.name,
                                'class': 'variable-chip'
                            },
                            0
                        ];
                    },

                    parseDOM: [
                        {
                            tag: 'span[data-type="variable"]',

                            getAttrs: function (node: any) {
                                var element = node as HTMLElement;

                                return {
                                    name:
                                        element.getAttribute('data-name') || '',
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

class VariableEditor extends React.Component<VariableEditorProps, {}> {
    private editorContainer: React.RefObject<HTMLDivElement>;
    private toolbarContainer: React.RefObject<HTMLDivElement>;
    private headlessEditor: HeadlessEditor | null = null;

    constructor(props: VariableEditorProps) {
        super(props);

        this.editorContainer = React.createRef<HTMLDivElement>();
        this.toolbarContainer = React.createRef<HTMLDivElement>();

        this.handleInsertVariable = this.handleInsertVariable.bind(this);
    }

    componentDidMount() {
        var editor = HeadlessEditor.create({
            enableTabKey: true,
            extensions: [
                basicExtensions,
                variableExtension,
                placeholderExtension
            ]
        });

        this.headlessEditor = editor;
        editorRef = editor;

        if (this.editorContainer.current) {
            editor.mount(this.editorContainer.current);
        }

        this.renderToolbar();
    }

    componentWillUnmount() {
        if (editorRef === this.headlessEditor) {
            editorRef = null;
        }

        if (this.headlessEditor) {
            this.headlessEditor.destroy();
            this.headlessEditor = null;
        }

        if (this.toolbarContainer.current) {
            while (this.toolbarContainer.current.firstChild) {
                this.toolbarContainer.current.removeChild(
                    this.toolbarContainer.current.firstChild
                );
            }
        }
    }

    private handleInsertVariable(definition: VariableDef) {
        var editor = this.headlessEditor;

        if (!editor) {
            return;
        }

        var selection = editor.getSelection();

        editor.execute('insertVariable', {
            name: definition.name,
            from: selection.from,
            to: selection.to
        });
    }

    private renderToolbar() {
        var toolbar = this.toolbarContainer.current;

        if (!toolbar) {
            return;
        }

        for (var i = 0; i < VARIABLES.length; i++) {
            (function (definition: VariableDef, component: VariableEditor) {
                var button = document.createElement('button');

                button.type = 'button';
                button.textContent = 'Insert ' + definition.label;

                button.addEventListener('click', function () {
                    component.handleInsertVariable(definition);
                });

                toolbar.appendChild(button);
            })(VARIABLES[i], this);
        }
    }

    render() {
    return (
        <div className="control-section">
            <div className="variable-hint">
                Type <code>{'{{customerName}}'}</code> in the editor
                to convert it into a variable chip, click a button
                to insert one, or press <kbd>Mod</kbd> + <kbd>Alt</kbd> + <kbd>V</kbd>
                to cycle through the list.
            </div>

            <div
                id="variable-toolbar"
                className="variable-toolbar"
                ref={this.toolbarContainer}
            />

            <div
                id="headless-editor"
                className="variable-editor"
                ref={this.editorContainer}
            />
        </div>
    );
}
}

export default VariableEditor;