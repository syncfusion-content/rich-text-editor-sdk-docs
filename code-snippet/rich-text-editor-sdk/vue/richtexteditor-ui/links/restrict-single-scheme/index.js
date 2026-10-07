import Vue from 'vue';
import { RichTextEditorUIPlugin } from '@syncfusion/ej2-vue-richtexteditor-ui';

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :linkSettings="linkSettings">
  </ejs-richtexteditor-ui>`,
  data() {
    return {
      linkSettings: {
        allowedProtocols: ['https'],
        defaultProtocol: 'https',
        autoPrependProtocol: true
      }
    };
  }
});
