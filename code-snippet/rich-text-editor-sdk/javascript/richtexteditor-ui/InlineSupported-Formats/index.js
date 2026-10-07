var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: [ 'Bold', 'Italic', 'Underline', 'Strikethrough', 'Subscript', 'Superscript', 'LowerCase', 'UpperCase', '|', 'InlineCode', '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|', 'ClearFormat'
      ]
    },
    placeholder: 'Type something ...'
  }
);

editor.appendTo('#editor');
