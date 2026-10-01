<template>
  <ejs-richtexteditor-ui :quickToolbarSettings="quickToolbarSettings"></ejs-richtexteditor-ui>
</template>

<script>
import { RichTextEditorUIComponent, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  data() {
    return {
      quickToolbarSettings: {
        enable: true,
        enableAppendToBody: true,
        text: ['Bold', 'Italic', 'Underline', '|', 'Formats', '|', 'NumberedList', 'BulletList'],
        image: ['AltText', 'Caption', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove'],
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