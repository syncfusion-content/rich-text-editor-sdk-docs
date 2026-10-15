import Vue from 'vue';
import { RichTextEditorUIComponent, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.component('ejs-richtexteditor-ui', RichTextEditorUIComponent);

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :listSettings="listSettings"
    placeholder="Type something ...">
  </ejs-richtexteditor-ui>`,
  data() {
    return {
      toolbarSettings: {
        items: ['NumberFormatList']
      },
      listSettings: {
        numberFormatListItems: [
          { text: 'Decimal', listType: 'decimal' },
          { text: 'Roman', listType: 'upper-roman' },
          { text: 'Alpha', listType: 'upper-alpha' }
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
});
