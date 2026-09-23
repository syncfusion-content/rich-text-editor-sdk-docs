import Vue from 'vue';
import { RichTextEditorUIPlugin } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.use(RichTextEditorUIPlugin);

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui placeholder="Type something ..."></ejs-richtexteditor-ui>`
});
