<template>
  <div>
    <ejs-richtexteditor-ui
      ref="editor"
      :toolbarSettings="toolbarSettings"
      placeholder="Type something ...">
    </ejs-richtexteditor-ui>
    <div class="button-group" style="margin-top: 15px;">
      <button id="boldBtn" @click="applyBold">Bold</button>
      <button id="underlineBtn" @click="applyUnderline">Underline</button>
      <button id="fontSizeBtn" @click="applyFontSize">Font Size 18px</button>
      <button id="fontColorBtn" @click="applyFontColor">Font Color</button>
      <button id="highlightBtn" @click="applyHighlight">Highlight</button>
      <button id="clearFormatBtn" @click="applyClearFormat">Clear Format</button>
    </div>
  </div>
</template>

<script>
import {
  RichTextEditorUIComponent,
  SlashCommand
} from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  
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
};
</script>