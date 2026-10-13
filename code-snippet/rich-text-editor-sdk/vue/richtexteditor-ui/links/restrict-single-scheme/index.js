import Vue from 'vue';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.component('ejs-richtexteditor-ui', RichTextEditorUIComponent);

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
