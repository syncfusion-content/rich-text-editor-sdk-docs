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
        dimension: {
          width: '300px',
          height: 'auto',
          minWidth: '50px',
          maxWidth: '1000px',
          minHeight: '50px',
          maxHeight: '800px'
        }
      },
      quickToolbarSettings: {
        image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove']
      }
    };
  }
});
