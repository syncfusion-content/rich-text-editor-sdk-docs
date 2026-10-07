var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        itemClicked: function (args) {
            if (args.item && args.item.actionId === 'uppercase') {
                // dispatch the `uppercase` command through the fluent builder
                editor.commands().uppercase().apply();
            }
        }
    },
    quickToolbarSettings: {
        enable: true,
        text: [
            'Bold', 'Italic', 'Underline', '|',
            {
                actionId: 'uppercase',
                id: 'uppercase',
                text: 'UPPERCASE',
                tooltipText: 'Transform selection to UPPERCASE',
                windowsShortcutText: 'Ctrl + Shift + U',
                macShortcutText: '⇧ ⌘ U'
            },
            '|',
            'NumberedList', 'BulletList'
        ]
    }
});

editor.appendTo('#editor');
