import Vue from 'vue';
import { RichTextEditorUIPlugin, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    placeholder="Type something...">
  </ejs-richtexteditor-ui>`,
  data: function() {
    return {
      toolbarSettings: {
        items: [
          'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
          'Formats', 'Alignment', 'BulletList', 'NumberedList', '|',
          'Quote', 'CodeBlock', 'HorizontalLine', 'Callout', '|',
          'Undo', 'Redo'
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
});
