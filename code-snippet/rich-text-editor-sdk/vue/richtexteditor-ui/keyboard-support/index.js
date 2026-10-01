import Vue from 'vue';
import { RichTextEditorUIPlugin } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.use(RichTextEditorUIPlugin);

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :keyBindings="keyBindings">
  </ejs-richtexteditor-ui>`,
  data: function () {
    return {
      toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', 'CodeBlock', '|', 'Undo', 'Redo']
      },
      keyBindings: {
        link: 'ctrl+alt+k',
        image: 'ctrl+alt+i',
        'code-block': 'ctrl+shift+c'
      }
    };
  }
});
