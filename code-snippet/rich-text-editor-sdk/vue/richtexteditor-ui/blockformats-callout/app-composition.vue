<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :slashCommandSettings="slashCommandSettings"
    placeholder="Type / for slash commands...">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

EjsRichtexteditorUi.Inject(SlashCommand);

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
