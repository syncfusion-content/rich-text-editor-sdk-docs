import Vue from 'vue';
import { RichTextEditorUIPlugin, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :slashCommandSettings="slashCommandSettings"
    placeholder="Type / for collapsible sections...">
  </ejs-richtexteditor-ui>`,
  data: function() {
    return {
      slashCommandSettings: {
        enable: true,
        items: [
          'Collapsible Paragraph',
          'Collapsible Heading 1',
          'Collapsible Heading 2',
          'Collapsible Heading 3',
          'Collapsible Heading 4'
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
});
