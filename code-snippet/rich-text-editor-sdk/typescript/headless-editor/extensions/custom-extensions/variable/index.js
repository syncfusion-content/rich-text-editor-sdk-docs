var VARIABLES = [
    { name: 'customerName', label: 'Customer Name', value: 'John Smith' },
    { name: 'invoiceNumber', label: 'Invoice Number', value: 'INV-2026-0042' },
    { name: 'dueDate', label: 'Due Date', value: '2026-10-15' }
];

// Resolves a variable definition by name from the option table.
function resolveVariable(variables, name) {
    for (var i = 0; i < variables.length; i++) {
        if (variables[i].name === name) { return variables[i]; }
    }
    return null;
}

// A custom command's `execute` cannot reach the editor facade through
// `ctx` in v1, so the custom command reaches the editor through this
// module-level reference. The reference is set in the preview wiring
// section below, right after `HeadlessEditor.create()` returns.
var editorRef = null;

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
                return (
                    payload !== undefined &&
                    typeof payload.name === 'string' &&
                    payload.name.length > 0
                );
            },
            // The custom command dispatches the built-in
            // `inputRuleMark` command through `editorRef` because a
            // custom command's `execute(ctx, payload)` cannot reach
            // the editor facade through `ctx` in v1.
            execute: function (_ctx, payload) {
                var def = resolveVariable(VARIABLES, payload.name);
                if (!def) { return; }
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
        }];
    },

    keyboardShortcuts: function () {
        // `this.editor` is the real `HeadlessEditor`; cycle through
        // the configured variables and dispatch the registered
        // `insertVariable` command for each press.
        var variables = this.options.variables;
        var cycleIndex = 0;
        return {
            'Mod-Alt-v': function () {
                var editor = this.editor;
                if (!editor) { return false; }
                var def = variables[cycleIndex % variables.length];
                cycleIndex += 1;
                var selection = editor.getSelection();
                return editor.execute('insertVariable', {
                    name: def.name,
                    from: selection.from,
                    to: selection.to
                });
            }
        };
    },

    inputRules: function (thisArg) {
        // Capture `this` so the rule handler below can read
        // `this.options.variables` (the SDK calls the handler without
        // a `this` binding).
        var _this = thisArg || this;
        return [{
            id: 'variable:double-braces',
            pattern: /\{\{(\w+)\}\}$/,
            handler: function (ctx) {
                var name = ctx.match[1];
                var def = resolveVariable(_this.options.variables, name);
                if (!def) {
                    // Unknown variable name — leave the typed
                    // token as ordinary text.
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
        }];
    },

    domSpecs: function () {
        return {
            marks: {
                variable: {
                    toDOM: function (attrs) {
                        return [
                            'span',
                            { 'data-type': 'variable', 'data-name': attrs['name'], 'class': 'variable-chip' },
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
    }
});

var headlessEditor = ej.headlesseditor.HeadlessEditor.create({
    enableTabKey: true,
    extensions: [
        ej.headlesseditor.basicExtensions,
        variableExtension
    ]
});

// Make the editor available to the custom command's `execute`. See
// the note above the declaration of `editorRef` for why this is
// needed.
editorRef = headlessEditor;

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
            var selection = headlessEditor.getSelection();
            headlessEditor.execute('insertVariable', {
                name: v.name,
                from: selection.from,
                to: selection.to
            });
        });
        toolbar.appendChild(btn);
    });
}