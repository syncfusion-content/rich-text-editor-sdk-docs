<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    placeholder="Insert code snippets...">
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
    'CodeBlock', 'Quote', 'HorizontalLine', '|',
    'Undo', 'Redo'
  ]
};
</script>
