<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :slashCommandSettings="slashCommandSettings"
    placeholder="Quote a passage...">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

EjsRichtexteditorUi.Inject(SlashCommand);

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
