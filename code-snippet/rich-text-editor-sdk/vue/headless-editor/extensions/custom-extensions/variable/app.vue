<template>
    <div class="variable-demo">
        <p class="variable-hint">
            Type <code v-pre>{{customerName}}</code> in the editor to create a variable chip,
            choose a button to insert one, or press <kbd>Mod</kbd>+<kbd>Alt</kbd>+<kbd>V</kbd>
            to cycle through the variables.
        </p>
        <div class="variable-toolbar" role="toolbar" aria-label="Insert a document variable">
            <button
                v-for="variable in variables"
                :key="variable.name"
                type="button"
                @click="insertVariable(variable.name)"
            >
                Insert {{ variable.label }}
            </button>
        </div>
        <div ref="editorContainer" class="variable-editor"></div>
    </div>
</template>

<script>
import { defineComponent, markRaw } from 'vue';
import {
    HeadlessEditor,
    basicExtensions,
    defineExtension
} from '@syncfusion/ej2-headless-editor';

const variables = [
    { name: 'customerName', label: 'Customer Name', value: 'John Smith' },
    { name: 'invoiceNumber', label: 'Invoice Number', value: 'INV-2026-0042' },
    { name: 'dueDate', label: 'Due Date', value: '2026-10-15' }
];

let editorRef = null;

function resolveVariable(name) {
    return variables.find((variable) => variable.name === name);
}

const variableExtension = defineExtension({
    name: 'variable',

    defineOptions: () => ({
        variables
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
                canExecute(_ctx, payload) {
                    return typeof payload?.name === 'string' && payload.name.length > 0;
                },
                execute(_ctx, payload) {
                    const variable = resolveVariable(payload.name);
                    if (!variable) {
                        return;
                    }
                    editorRef?.execute('inputRuleMark', {
                        markType: 'variable',
                        text: variable.value,
                        matchStart: payload.from,
                        matchEnd: payload.to,
                        attrs: { name: variable.name, value: variable.value }
                    });
                }
            }
        ];
    },

    keyboardShortcuts() {
        const configuredVariables = this.options.variables;
        let cycleIndex = 0;
        return {
            'Mod-Alt-v': () => {
                const editor = this.editor;
                if (!editor || configuredVariables.length === 0) {
                    return false;
                }
                const variable = configuredVariables[cycleIndex % configuredVariables.length];
                cycleIndex += 1;
                const selection = editor.getSelection();
                return editor.execute('insertVariable', {
                    name: variable.name,
                    from: selection.from,
                    to: selection.to
                });
            }
        };
    },

    inputRules() {
        const extension = this;
        return [
            {
                id: 'variable:double-braces',
                pattern: /\{\{(\w+)\}\}$/,
                handler(ctx) {
                    const variable = extension.options.variables.find(
                        (item) => item.name === ctx.match[1]
                    );
                    if (!variable) {
                        return;
                    }
                    ctx.dispatchCommand('inputRuleMark', {
                        markType: 'variable',
                        text: variable.value,
                        matchStart: ctx.start,
                        matchEnd: ctx.end,
                        attrs: { name: variable.name, value: variable.value }
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
                            {
                                'data-type': 'variable',
                                'data-name': attrs.name,
                                class: 'variable-chip'
                            },
                            0
                        ];
                    },
                    parseDOM: [
                        {
                            tag: 'span[data-type="variable"]',
                            getAttrs(node) {
                                const element = node;
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

export default defineComponent({
    name: 'App',

    data() {
        return {
            variables,
            editor: null
        };
    },

    mounted() {
        const container = this.$refs.editorContainer;
        const editor = HeadlessEditor.create({
            enableTabKey: true,
            extensions: [basicExtensions, variableExtension]
        });
        this.editor = markRaw(editor);
        editorRef = editor;
        editor.mount(container);
    },

    beforeUnmount() {
        this.editor?.destroy();
        this.editor = null;
        editorRef = null;
    },

    methods: {
        insertVariable(name) {
            const editor = this.editor;
            if (!editor) {
                return;
            }
            const selection = editor.getSelection();
            editor.execute('insertVariable', {
                name,
                from: selection.from,
                to: selection.to
            });
        }
    }
});
</script>


<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/base/base.css";
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/headless-editor/index.css";

.variable-demo {
    margin: 50px auto;
}

.variable-toolbar {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
    margin-bottom: 12px;
    background: #f9fafb;
}

.variable-toolbar button {
    padding: 6px 12px;
    border: 1px solid #d1d5db;
    border-radius: 4px;
    background: #ffffff;
    cursor: pointer;
    font-size: 13px;
}

.variable-toolbar button:hover {
    background: #f3f4f6;
}

.variable-chip {
    display: inline-block;
    padding: 1px 6px;
    margin: 0 1px;
    background: #dbeafe;
    color: #1e40af;
    border-radius: 4px;
    font-family: monospace;
    font-size: 0.95em;
}

.variable-editor {
    min-height: 160px;
    padding: 12px;
    border: 1px solid #e5e7eb;
    border-radius: 6px;
}

.variable-hint {
    margin-bottom: 8px;
    color: #6b7280;
    font-size: 12px;
}
</style>
