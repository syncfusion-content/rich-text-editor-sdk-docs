<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :slashCommandSettings="slashCommandSettings"
    placeholder="Quote a passage...">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

provide('richtexteditor-ui', [SlashCommand]);

const toolbarSettings = {
  items: [
    'Bold', 'Italic', 'Underline', '|',
    'Formats', 'Alignment', '|',
    'Quote', 'CodeBlock', '|',
    'Undo', 'Redo'
  ]
};

const slashCommandSettings = {
  enable: true,
  items: ['Blockquote']
};
</script>
