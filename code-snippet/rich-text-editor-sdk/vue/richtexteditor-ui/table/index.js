import Vue from 'vue';
import { RichTextEditorUIPlugin } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.use(RichTextEditorUIPlugin);

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :tableSettings="tableSettings"
    :placeholder="placeholder">
  </ejs-richtexteditor-ui>`,
  data: function () {
    return {
      toolbarSettings: {
        items: ['Table']
      },
      tableSettings: {
        resize: false
      },
      placeholder: 'Type something ...'
    };
  }
});
