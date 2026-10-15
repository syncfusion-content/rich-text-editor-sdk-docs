import Vue from 'vue';
import {
    HeadlessEditor,
    basicExtensions,
    defineExtension
} from '@syncfusion/ej2-headless-editor';

var variables = [
    { name: 'customerName', label: 'Customer Name', value: 'John Smith' },
    { name: 'invoiceNumber', label: 'Invoice Number', value: 'INV-2026-0042' },
    { name: 'dueDate', label: 'Due Date', value: '2026-10-15' }
];

function resolveVariable(name) {
    for (var i = 0; i < variables.length; i++) {
        if (variables[i].name === name) {
            return variables[i];
        }
    }
    return null;
}

// Module-level reference so the custom command's `execute`
// can reach the editor facade. The reference is set after
// `HeadlessEditor.create()` returns inside `mounted`.
var editorRef = null;

var variableExtension = defineExtension({
    name: 'variable',

    defineOptions: function () {
        return { variables: variables };
    },

    marks: function () {
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

    commands: function () {
        return [
            {
                name: 'insertVariable',
                canExecute: function (_ctx, payload) {
                    return (
                        payload !== undefined &&
                        typeof payload.name === 'string' &&
                        payload.name.length > 0
                    );
                },
                execute: function (_ctx, payload) {
                    var def = resolveVariable(payload.name);
                    if (!def) {
                        return;
                    }
                    if (editorRef) {
                        editorRef.execute('inputRuleMark', {
                            markType: 'variable',
                            text: def.value,
                            matchStart: payload.from,
                            matchEnd: payload.to,
                            attrs: { name: def.name, value: def.value }
                        });
                    }
                }
            }
        ];
    },

    keyboardShortcuts: function () {
        var configured = this.options.variables;
        var cycleIndex = 0;
        return {
            'Mod-Alt-v': function () {
                var editor = this.editor;
                if (!editor || !configured || configured.length === 0) {
                    return false;
                }
                var variable = configured[cycleIndex % configured.length];
                cycleIndex += 1;
                var selection = editor.getSelection();
                return editor.execute('insertVariable', {
                    name: variable.name,
                    from: selection.from,
                    to: selection.to
                });
            }
        };
    },

    inputRules: function () {
        var extension = this;
        return [
            {
                id: 'variable:double-braces',
                pattern: /\{\{(\w+)\}\}$/,
                handler: function (ctx) {
                    var matchName = ctx.match && ctx.match[1];
                    var def = matchName
                        ? resolveVariable(matchName)
                        : null;
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

    domSpecs: function () {
        return {
            marks: {
                variable: {
                    toDOM: function (attrs) {
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
                            getAttrs: function (node) {
                                var element = node;
                                var name = element.getAttribute('data-name');
                                return {
                                    name: name || '',
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

new Vue({
    el: '#app',

    data: function () {
        return {
            variables: variables,
            editor: null
        };
    },

    mounted: function () {
        var container = this.$el.querySelector('#headless-editor');
        var editor = HeadlessEditor.create({
            enableTabKey: true,
            extensions: [basicExtensions, variableExtension]
        });
        this.editor = editor;
        editorRef = editor;
        editor.mount(container);

        var loader = document.getElementById('loader');
        if (loader) {
            loader.style.display = 'none';
        }
    },

    beforeDestroy: function () {
        if (this.editor && typeof this.editor.destroy === 'function') {
            this.editor.destroy();
        }
        this.editor = null;
        editorRef = null;
    },

    methods: {
        insertVariable: function (name) {
            var editor = this.editor;
            if (!editor) {
                return;
            }
            var selection = editor.getSelection();
            editor.execute('insertVariable', {
                name: name,
                from: selection.from,
                to: selection.to
            });
        }
    }
});
