import Vue from 'vue';
import { RichTextEditorUIPlugin, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.use(RichTextEditorUIPlugin);

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui
    ref="rteObj"
    :toolbarSettings="toolbarSettings"
    :quickToolbarSettings="quickToolbarSettings"
  ></ejs-richtexteditor-ui>`,
  data() {
    return {
      toolbarSettings: {
        // The args shape is `{ item: ToolbarItemModel, event: Event }`.
        itemClicked: function(args) {
          if (args.item && args.item.actionId === 'uppercase') {
            // dispatch the `uppercase` command through the fluent builder
            this.$refs.rteObj.ej2Instances.commands().uppercase().apply();
          }
        }
      },
      quickToolbarSettings: {
        enable: true,
        text: [
          'Bold', 'Italic', 'Underline', '|',
          {
            actionId: 'uppercase',
            id: 'uppercase',
            text: 'UPPERCASE',
            tooltipText: 'Transform selection to UPPERCASE',
            windowsShortcutText: 'Ctrl + Shift + U',
            macShortcutText: '⇧ ⌘ U'
          },
          '|',
          'NumberedList', 'BulletList'
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
});
