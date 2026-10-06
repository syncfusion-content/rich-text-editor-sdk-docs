<template>
  <ejs-richtexteditor-ui
    :slashCommandSettings="slashCommandSettings"
    placeholder="Type / for collapsible sections...">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

provide('richtexteditor-ui', [SlashCommand]);

const slashCommandSettings = {
  enable: true,
  items: [
    'Collapsible Paragraph',
    'Collapsible Heading 1',
    'Collapsible Heading 2',
    'Collapsible Heading 3',
    'Collapsible Heading 4'
  ]
};
</script>
