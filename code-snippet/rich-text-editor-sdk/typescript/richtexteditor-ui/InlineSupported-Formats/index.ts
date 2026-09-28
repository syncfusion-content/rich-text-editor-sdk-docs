import { RichTextEditorUI, SlashCommand } from '@syncfusion/ej2-richtexteditor-ui';

RichTextEditorUI.Inject(SlashCommand);

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [ 'Bold', 'Italic', 'Underline', 'Strikethrough', 'Subscript', 'Superscript', 'LowerCase', 'UpperCase', '|', 'InlineCode', '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|', 'ClearFormat'
      ]
    },
    placeholder: 'Type something ...'
  },
);

editor.appendTo('#editor');