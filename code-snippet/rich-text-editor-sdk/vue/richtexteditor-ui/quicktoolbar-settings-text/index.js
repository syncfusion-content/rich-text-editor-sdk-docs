import Vue from 'vue';
import { RichTextEditorUIComponent, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.component('ejs-richtexteditor-ui', RichTextEditorUIComponent);

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui :quickToolbarSettings="quickToolbarSettings"></ejs-richtexteditor-ui>`,
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
});
