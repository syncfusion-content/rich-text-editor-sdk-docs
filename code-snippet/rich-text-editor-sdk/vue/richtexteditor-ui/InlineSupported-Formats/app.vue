<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    placeholder="Type something ...">
  </ejs-richtexteditor-ui>
</template>

<script>
import {
  RichTextEditorUIComponent,
  SlashCommand
} from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  
  data() {
    return {
      toolbarSettings: {
        items: [
          'Bold', 'Italic', 'Underline', 'Strikethrough',
          'Subscript', 'Superscript', 'LowerCase', 'UpperCase',
          '|', 'InlineCode',
          '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
          '|', 'ClearFormat'
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
};
</script>