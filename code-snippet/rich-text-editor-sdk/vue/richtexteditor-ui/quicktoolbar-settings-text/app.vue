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
        text: [
          'Undo', 'Redo', '|',
          'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
          'FontColor', 'BackgroundColor', '|',
          'Formats', '|',
          'NumberedList', 'BulletList'
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
};
</script>