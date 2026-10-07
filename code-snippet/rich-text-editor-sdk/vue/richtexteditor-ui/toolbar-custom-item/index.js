import Vue from 'vue';
import { RichTextEditorUIPlugin } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.use(RichTextEditorUIPlugin);

const app = new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    ref="editor"
    :toolbarSettings="toolbarSettings">
  </ejs-richtexteditor-ui>`,
  data: function () {
    const self = this;
    return {
      toolbarSettings: {
        items: [
          'Bold', 'Italic', 'Underline', '|',
          {
            id: 'WordCount',
            actionId: 'wordCount',
            prefixIcon: 'e-icons e-numbering-list',
            tooltipText: 'Word count',
            align: 'Left'
          },
          '|', 'Undo', 'Redo'
        ],
        itemClicked: function(args) {
          if (args.item && args.item.actionId === 'wordCount') {
            const words = self.$refs.editor.ej2Instances.getText().trim().split(/\s+/).filter(Boolean).length;
            alert('Word count: ' + words);
          }
        }
      }
    };
  }
});
