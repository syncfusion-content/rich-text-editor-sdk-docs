<template>
  <div>
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
  </div>
</template>

<script setup>
import { provide } from 'vue';
import { ref } from 'vue';
import {
  RichTextEditorUIComponent as EjsRichtexteditorUi,
  SlashCommand
} from '@syncfusion/ej2-vue-richtexteditor-ui';

provide('richtexteditor-ui', [SlashCommand]);

const editor = ref(null);

const toolbarSettings = {
  items: [
    'Bold', 'Italic', 'Underline', 'Strikethrough',
    '|',
    'FontSize', 'FontName', 'FontColor', 'BackgroundColor',
    '|',
    'InlineCode', 'ClearFormat'
  ]
};

const applyBold = () => {
  editor.value.ej2Instances.commands().bold().apply();
};

const applyUnderline = () => {
  editor.value.ej2Instances.commands().underline().apply();
};

const applyFontSize = () => {
  editor.value.ej2Instances.commands().fontSize().size('18px').apply();
};

const applyFontColor = () => {
  editor.value.ej2Instances.commands().fontColor().color('#00A3FF').apply();
};

const applyHighlight = () => {
  editor.value.ej2Instances.commands().backgroundColor().color('#FFF7C7').apply();
};

const applyClearFormat = () => {
  editor.value.ej2Instances.commands().clearFormat().apply();
};
</script>