<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    placeholder="Type something...">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

EjsRichtexteditorUi.Inject(SlashCommand);

const toolbarSettings = {
  items: [
    'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
    'Formats', 'Alignment', 'BulletList', 'NumberedList', '|',
    'Quote', 'CodeBlock', 'HorizontalLine', 'Callout', '|',
    'Undo', 'Redo'
  ]
};
</script>
