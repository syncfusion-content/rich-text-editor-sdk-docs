<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :listSettings="listSettings"
    placeholder="Type something ...">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

provide('richtexteditor-ui', [SlashCommand]);

const toolbarSettings = {
  items: ['NumberFormatList']
};

const listSettings = {
  numberFormatListItems: [
    { text: 'Decimal', listType: 'decimal' },
    { text: 'Roman', listType: 'upper-roman' },
    { text: 'Alpha', listType: 'upper-alpha' }
  ]
};
</script>