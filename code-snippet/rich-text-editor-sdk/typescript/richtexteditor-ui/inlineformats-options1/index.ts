import { RichTextEditorUI, SlashCommand } from '@syncfusion/ej2-richtexteditor-ui';

RichTextEditorUI.Inject(SlashCommand);

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: ['FontColor', 'BackgroundColor']
    },
    fontColor: {
        default: '#DC2626',
        mode: 'Palette',
        columns: 5,
        modeSwitcher: true
    },
    backgroundColor: {
        default: '#FFF7C7',
        mode: 'Picker',
        columns: 5,
        modeSwitcher: false
    }
});

editor.appendTo('#editor');