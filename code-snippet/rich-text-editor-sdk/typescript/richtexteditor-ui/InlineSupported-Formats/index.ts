import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';

const editor: RichTextEditorUI = new RichTextEditorUI({
    toolbarSettings: {
        items: [ 'Bold', 'Italic', 'Underline', 'Strikethrough', 'Subscript', 'Superscript', 'LowerCase', 'UpperCase', '|', 'InlineCode', '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|', 'ClearFormat'
      ]
    },
    placeholder: 'Type something ...'
  },
);

editor.appendTo('#editor');