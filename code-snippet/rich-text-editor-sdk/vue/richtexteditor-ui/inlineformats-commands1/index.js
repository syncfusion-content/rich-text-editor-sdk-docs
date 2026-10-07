import Vue from 'vue';
import { RichTextEditorUIPlugin, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

new Vue({
  el: '#app',
  template: `<div>
    <ejs-richtexteditor-ui
      ref="editor"
      :toolbarSettings="toolbarSettings"
      placeholder="Type something ...">
    </ejs-richtexteditor-ui>
    <div class="button-group" style="margin-top: 15px;">
      <button @click="applyBold">Bold</button>
      <button @click="applyUnderline">Underline</button>
      <button @click="applyFontSize">Font Size 18px</button>
      <button @click="applyFontColor">Font Color</button>
      <button @click="applyHighlight">Highlight</button>
      <button @click="applyClearFormat">Clear Format</button>
    </div>
  </div>`,
  data() {
    return {
      toolbarSettings: {
        items: [
          'Bold', 'Italic', 'Underline', 'Strikethrough',
          '|',
          'FontSize', 'FontName', 'FontColor', 'BackgroundColor',
          '|',
          'InlineCode', 'ClearFormat'
        ]
      }
    };
  },
  methods: {
    applyBold: function() {
      this.$refs.editor.ej2Instances.commands().bold().apply();
    },
    applyUnderline: function() {
      this.$refs.editor.ej2Instances.commands().underline().apply();
    },
    applyFontSize: function() {
      this.$refs.editor.ej2Instances.commands().fontSize().size('18px').apply();
    },
    applyFontColor: function() {
      this.$refs.editor.ej2Instances.commands().fontColor().color('#00A3FF').apply();
    },
    applyHighlight: function() {
      this.$refs.editor.ej2Instances.commands().backgroundColor().color('#FFF7C7').apply();
    },
    applyClearFormat: function() {
      this.$refs.editor.ej2Instances.commands().clearFormat().apply();
    }
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
});
