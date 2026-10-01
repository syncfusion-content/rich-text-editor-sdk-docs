import Vue from 'vue';
import { RichTextEditorUIPlugin, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

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
        items: ['BulletFormatList']
      },
      listSettings: {
        bulletFormatListItems: [
          { text: 'Thumbs-Up', listType: '\u{1F44D}' }
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
});
