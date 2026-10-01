import Vue from 'vue';
import { RichTextEditorUIPlugin } from '@syncfusion/ej2-vue-richtexteditor-ui';

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :imageSettings="imageSettings"
    :quickToolbarSettings="quickToolbarSettings">
  </ejs-richtexteditor-ui>`,
  data() {
    return {
      imageSettings: {
        uploadUrl: 'https://api.example.com/upload',
        imageUrl: '/uploads/'
      },
      quickToolbarSettings: {
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove']
      }
    };
  }
});
