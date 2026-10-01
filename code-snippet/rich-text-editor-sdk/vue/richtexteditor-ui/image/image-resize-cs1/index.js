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
        imageUrl: '/uploads/',
        resize: true,
        dimension: {
          minWidth: '50px',
          maxWidth: '800px',
          minHeight: '50px',
          maxHeight: '600px'
        }
      },
      quickToolbarSettings: {
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove']
      }
    };
  }
});
