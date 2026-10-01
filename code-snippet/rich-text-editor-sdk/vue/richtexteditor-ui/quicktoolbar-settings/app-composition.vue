<template>
  <ejs-richtexteditor-ui
    :quickToolbarSettings="quickToolbarSettings"
    :placeholder="placeholder"
  ></ejs-richtexteditor-ui>
</template>

<script setup>
import { ref } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

const placeholder = ref('Type something ...');
const quickToolbarSettings = ref({
  enable: true,
  text: [
    'Undo', 'Redo', '|',
    'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
    'FontColor', 'BackgroundColor', '|',
    'Formats', '|',
    'NumberedList', 'BulletList'
  ],
  image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove'],
  link:  ['Open', 'Copy', 'Edit', 'Remove'],
  table: ['Header', 'Remove', '|', 'Row', 'Column', '|', 'CellBackgroundColor', 'Align', 'VerticalAlign']
});
</script>