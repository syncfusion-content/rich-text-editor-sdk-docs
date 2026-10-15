import Vue from 'vue';
import { RichTextEditorUIComponent, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.component('ejs-richtexteditor-ui', RichTextEditorUIComponent);

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :slashCommandSettings="slashCommandSettings"
    placeholder="Type / for slash commands...">
  </ejs-richtexteditor-ui>`,
  data: function() {
    return {
      toolbarSettings: {
        items: [
          'Bold', 'Italic', 'Underline', '|',
          'Callout',
          '|',
          'Undo', 'Redo'
        ]
      },
      slashCommandSettings: {
        enable: true,
        items: [
          'Info', 'Success', 'Warning', 'Error', 'Note'
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
});
