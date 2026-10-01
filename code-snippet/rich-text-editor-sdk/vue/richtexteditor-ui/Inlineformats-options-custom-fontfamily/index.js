import Vue from 'vue';
import { RichTextEditorUIPlugin, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :fontFamily="fontFamily"
    placeholder="Type something ...">
  </ejs-richtexteditor-ui>`,
  data() {
    return {
      toolbarSettings: {
        items: ['FontName']
      },
      fontFamily: {
        items: [
          { text: 'Default', value: 'Default' },
          { text: 'Segoe UI', value: 'Segoe UI, sans-serif' },
          { text: 'Roboto', value: 'Roboto, sans-serif' },
          { text: 'Georgia', value: 'Georgia, serif' },
          { text: 'Courier New', value: 'Courier New, monospace' }
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
});
