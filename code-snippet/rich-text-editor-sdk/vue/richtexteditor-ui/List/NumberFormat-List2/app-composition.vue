<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :listSettings="listSettings"
    placeholder="Type something ...">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

EjsRichtexteditorUi.Inject(SlashCommand);

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