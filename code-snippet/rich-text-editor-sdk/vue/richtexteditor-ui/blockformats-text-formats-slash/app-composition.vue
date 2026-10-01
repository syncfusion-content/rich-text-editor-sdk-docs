<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :slashCommandSettings="slashCommandSettings">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

EjsRichtexteditorUi.Inject(SlashCommand);

const toolbarSettings = {
  items: ['Formats', 'Alignment', 'Quote', 'CodeBlock', 'HorizontalLine', 'Callout']
};

const slashCommandSettings = {
  enable: true,
  items: [
    'Paragraph',
    'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4',
    'Blockquote',
    'Info', 'Success', 'Warning', 'Error', 'Note',
    'Collapsible Paragraph',
    'Collapsible Heading 1', 'Collapsible Heading 2',
    'Collapsible Heading 3', 'Collapsible Heading 4'
  ]
};
</script>
