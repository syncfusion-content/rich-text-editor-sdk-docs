import Vue from 'vue';
import { RichTextEditorUIPlugin, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    placeholder="Type something ...">
  </ejs-richtexteditor-ui>`,
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
});
