<template>
  <ejs-richtexteditor-ui :quickToolbarSettings="quickToolbarSettings"></ejs-richtexteditor-ui>
</template>

<script setup>
import { ref } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

const quickToolbarSettings = ref({
  enable: true,
  enableAppendToBody: true,
  text: ['Bold', 'Italic', 'Underline', '|', 'Formats', '|', 'NumberedList', 'BulletList'],
  image: ['AltText', 'Caption', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove'],
  link:  ['Open', 'Copy', 'Edit', 'Remove'],
  table: ['Header', 'Remove', '|', 'Row', 'Column', '|', 'CellBackgroundColor', 'Align', 'VerticalAlign']
});
</script>