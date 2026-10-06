<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    placeholder="Type something ...">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

provide('richtexteditor-ui', [SlashCommand]);

const toolbarSettings = {
  items: [
    'Bold', 'Italic', 'Underline', 'Strikethrough',
    'Subscript', 'Superscript', 'LowerCase', 'UpperCase',
    '|', 'InlineCode',
    '|', 'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    '|', 'ClearFormat'
  ]
};
</script>