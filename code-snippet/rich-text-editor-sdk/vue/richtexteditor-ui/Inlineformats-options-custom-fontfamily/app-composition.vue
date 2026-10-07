<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :fontFamily="fontFamily"
    placeholder="Type something ...">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

provide('richtexteditor-ui', [SlashCommand]);

const toolbarSettings = {
  items: ['FontName']
};

const fontFamily = {
  items: [
    { text: 'Default', value: 'Default' },
    { text: 'Segoe UI', value: 'Segoe UI, sans-serif' },
    { text: 'Roboto', value: 'Roboto, sans-serif' },
    { text: 'Georgia', value: 'Georgia, serif' },
    { text: 'Courier New', value: 'Courier New, monospace' }
  ]
};
</script>