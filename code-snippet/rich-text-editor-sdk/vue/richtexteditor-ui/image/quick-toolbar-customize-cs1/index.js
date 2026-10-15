import Vue from 'vue';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.component('ejs-richtexteditor-ui', RichTextEditorUIComponent);

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
