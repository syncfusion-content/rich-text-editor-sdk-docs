import Vue from 'vue';
import { RichTextEditorUIPlugin, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :fontSize="fontSize"
    placeholder="Type something ...">
  </ejs-richtexteditor-ui>`,
  data() {
    return {
      toolbarSettings: {
        items: ['FontSize']
      },
      fontSize: {
        items: [
          { text: 'Default', value: 'Default' },
          { text: '10', value: '10px' },
          { text: '12', value: '12px' },
          { text: '14', value: '14px' },
          { text: '16', value: '16px' },
          { text: '18', value: '18px' },
          { text: '24', value: '24px' },
          { text: '32', value: '32px' }
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
});
