import Vue from 'vue';
import { RichTextEditorUIComponent, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.component('ejs-richtexteditor-ui', RichTextEditorUIComponent);

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
