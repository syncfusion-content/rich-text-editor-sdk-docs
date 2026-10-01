<template>
  <ejs-richtexteditor-ui
    :quickToolbarSettings="quickToolbarSettings"
    :placeholder="placeholder"
  ></ejs-richtexteditor-ui>
</template>

<script>
import { RichTextEditorUIComponent, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  data() {
    return {
      placeholder: 'Type something ...',
      quickToolbarSettings: {
        enable: true,
        text: [
          'Undo', 'Redo', '|',
          'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
          'FontColor', 'BackgroundColor', '|',
          'Formats', '|',
          'NumberedList', 'BulletList'
        ],
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove'],
        link:  ['Open', 'Copy', 'Edit', 'Remove'],
        table: ['Header', 'Remove', '|', 'Row', 'Column', '|', 'CellBackgroundColor', 'Align', 'VerticalAlign']
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
};
</script>