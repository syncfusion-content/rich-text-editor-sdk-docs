import Vue from 'vue';
import { RichTextEditorUIPlugin, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.use(RichTextEditorUIPlugin);

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :quickToolbarSettings="quickToolbarSettings"
    :placeholder="placeholder"
  ></ejs-richtexteditor-ui>`,
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
});
