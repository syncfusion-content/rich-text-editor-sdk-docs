import Vue from 'vue';
import { RichTextEditorUIPlugin } from '@syncfusion/ej2-vue-richtexteditor-ui';

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :quickToolbarSettings="quickToolbarSettings">
  </ejs-richtexteditor-ui>`,
  data() {
    return {
      quickToolbarSettings: {
        image: [
          'AltText',
          'Caption',
          '|',
          'Align',
          'Display',
          'WrapText',
          '|',
          'Dimension',
          'Replace',
          'Remove'
        ]
      }
    };
  }
});
