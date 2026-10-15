import Vue from 'vue';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.component('ejs-richtexteditor-ui', RichTextEditorUIComponent);

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
