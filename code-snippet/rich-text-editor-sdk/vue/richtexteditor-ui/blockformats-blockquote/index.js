import Vue from 'vue';
import { RichTextEditorUIComponent, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.component('ejs-richtexteditor-ui', RichTextEditorUIComponent);

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :slashCommandSettings="slashCommandSettings"
    placeholder="Quote a passage...">
  </ejs-richtexteditor-ui>`,
  data: function() {
    return {
      toolbarSettings: {
        items: [
          'Bold', 'Italic', 'Underline', '|',
          'Formats', 'Alignment', '|',
          'Quote', 'CodeBlock', '|',
          'Undo', 'Redo'
        ]
      },
      slashCommandSettings: {
        enable: true,
        items: ['Blockquote']
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
});
