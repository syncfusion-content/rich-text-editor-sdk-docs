<template>
  <ejs-richtexteditor-ui :quickToolbarSettings="quickToolbarSettings"></ejs-richtexteditor-ui>
</template>

<script setup>
import { ref } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

const quickToolbarSettings = ref({
  enable: true,
  text: [
    'Undo', 'Redo', '|',
    'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
    'FontColor', 'BackgroundColor', '|',
    'Formats', '|',
    'NumberedList', 'BulletList'
  ]
});
</script>