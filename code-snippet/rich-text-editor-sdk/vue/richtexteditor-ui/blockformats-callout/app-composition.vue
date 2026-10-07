<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :slashCommandSettings="slashCommandSettings"
    placeholder="Type / for slash commands...">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

provide('richtexteditor-ui', [SlashCommand]);

const toolbarSettings = {
  items: [
    'Bold', 'Italic', 'Underline', '|',
    'Callout',
    '|',
    'Undo', 'Redo'
  ]
};

const slashCommandSettings = {
  enable: true,
  items: [
    'Info', 'Success', 'Warning', 'Error', 'Note'
  ]
};
</script>
