var VARIABLES = [
    { name: 'customerName', label: 'Customer Name', value: 'John Smith' },
    { name: 'invoiceNumber', label: 'Invoice Number', value: 'INV-2026-0042' },
    { name: 'dueDate', label: 'Due Date', value: '2026-10-15' }
];

var variableExtension = ej.headlesseditor.defineExtension({
    name: 'variable',

    defineOptions: function () { return { variables: VARIABLES }; },

    marks: function () {
        return [{
            name: 'variable',
            attrs: [
                { name: 'name', type: 'string', default: '' },
                { name: 'value', type: 'string', default: '' }
            ]
        }];
    },

    commands: function () {
        return [{
            name: 'insertVariable',
            canExecute: function (_ctx, payload) {
                return payload && payload.name !== undefined;
            },
            execute: function (_ctx, payload) {
                this.editor.commands.insertText({ text: '{{' + payload.name + '}}' });
            }
        }];
    },

    keyboardShortcuts: function () {
        var cycleIndex = 0;
        return {
            'Mod-Shift-v': function () {
                var next = this.options.variables[cycleIndex % this.options.variables.length];
                cycleIndex += 1;
                this.editor.commands.insertVariable({ name: next.name });
                return true;
            }
        };
    },

    inputRules: function () {
        return [{
            id: 'variable:double-braces',
            pattern: /\{\{(\w+)\}\}$/,
            handler: function (ctx) {
                var name = ctx.match[1];
                var def = null;
                for (var i = 0; i < this.options.variables.length; i++) {
                    if (this.options.variables[i].name === name) { def = this.options.variables[i]; break; }
                }
                if (!def) { return; }
                ctx.dispatchCommand('inputRuleMark', {
                    markType: 'variable',
                    text: ctx.match[0],
                    matchStart: ctx.start,
                    matchEnd: ctx.end,
                    attrs: { name: def.name, value: def.value }
                });
            }
        }];
    },

    domSpecs: function () {
        return {
            marks: {
                variable: {
                    toDOM: function (attrs) {
                        return [
                            'span',
                            { 'data-type': 'variable', 'data-name': attrs['name'] },
                            0
                        ];
                    },
                    parseDOM: [{
                        tag: 'span[data-type="variable"]',
                        getAttrs: function (node) {
                            return {
                                name: node.getAttribute('data-name') || '',
                                value: ''
                            };
                        }
                    }]
                }
            }
        };
    },

    nodeViews: function () {
        return {
            variable: function (node) {
                var dom = document.createElement('span');
                dom.className = 'variable-chip';
                dom.setAttribute('data-name', String(node.attrs['name'] || ''));
                return { dom: dom };
            }
        };
    }
});

var headlessEditor = ej.headlesseditor.HeadlessEditor.create({
    enableTabKey: true,
    extensions: [
        ej.headlesseditor.basicExtensions,
        variableExtension
    ]
});

var container = document.getElementById('headless-editor');
if (container) {
    headlessEditor.mount(container);
}

var toolbar = document.getElementById('variable-toolbar');
if (toolbar) {
    VARIABLES.forEach(function (v) {
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.textContent = 'Insert ' + v.label;
        btn.addEventListener('click', function () {
            headlessEditor.execute('insertVariable', { name: v.name });
        });
        toolbar.appendChild(btn);
    });
}