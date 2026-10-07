import Vue from 'vue';
import { RichTextEditorUIPlugin } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.use(RichTextEditorUIPlugin);

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings">
  </ejs-richtexteditor-ui>`,
  data: function () {
    return {
      toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'Formats', 'Alignment', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo'],
        type: 'MultiRow',
        position: 'Top',
        enableFloating: true,
        floatingOffset: 0,
        itemClicked: function (args) {
          console.log('Toolbar item clicked:', args);
        },
        updatedToolbarStatus: function (args) {
          console.log('Toolbar status updated:', args);
        }
      }
    };
  }
});
