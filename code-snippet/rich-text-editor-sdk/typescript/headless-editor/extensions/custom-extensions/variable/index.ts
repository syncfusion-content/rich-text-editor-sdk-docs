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

    // Define the variable mark and its attributes.
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

    // Register the custom insertion command.
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

    // Cycle through available variables using Ctrl+Alt+V.
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

    // Convert {{customerName}} into a variable chip.
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

                    // Leave unknown variables as ordinary text.
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

    // Define HTML rendering and parsing for variable marks.
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

// Create the Headless Editor with the custom extension.
var headlessEditor = HeadlessEditor.create({
    enableTabKey: true,

    extensions: [
        basicExtensions,
        variableExtension,
        placeholderExtension
    ]
});

// Make the editor accessible to the custom command.
editorRef = headlessEditor;

// Mount the editor.
var container = document.getElementById('headless-editor');

if (container) {
    headlessEditor.mount(container);
}

// Generate the variable toolbar.
var toolbar = document.getElementById('variable-toolbar');

if (toolbar) {
    for (var i = 0; i < VARIABLES.length; i++) {
        (function (definition: VariableDef) {
            var button = document.createElement('button');

            button.type = 'button';
            button.textContent = 'Insert ' + definition.label;

            button.addEventListener('click', function () {
                var selection = headlessEditor.getSelection();

                headlessEditor.execute('insertVariable', {
                    name: definition.name,
                    from: selection.from,
                    to: selection.to
                });
            });

            toolbar.appendChild(button);
        })(VARIABLES[i]);
    }
}