import Vue from 'vue';
import { RichTextEditorUIPlugin, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    placeholder="Insert code snippets...">
  </ejs-richtexteditor-ui>`,
  data: function() {
    return {
      toolbarSettings: {
        items: [
          'Bold', 'Italic', 'Underline', '|',
          'Formats', 'Alignment', '|',
          'CodeBlock', 'Quote', 'HorizontalLine', '|',
          'Undo', 'Redo'
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
});
