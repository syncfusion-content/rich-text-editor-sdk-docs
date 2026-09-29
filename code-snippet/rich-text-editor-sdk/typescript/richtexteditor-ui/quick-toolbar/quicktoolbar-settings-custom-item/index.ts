import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

// The args shape is `{ item: ToolbarItemModel, event: Event }`.
// `ToolbarItemClickedEventArgs` lives in the toolbar-settings model file and
// is the canonical handler-arg type — declared inline here for portability.
interface ClickedArgs {
    item?: { id?: string; actionId?: string };
    event?: Event;
}

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        itemClicked: (args: ClickedArgs): void => {
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