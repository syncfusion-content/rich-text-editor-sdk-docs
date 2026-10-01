<template>
  <ejs-richtexteditor-ui
    :quickToolbarSettings="quickToolbarSettings">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi } from '@syncfusion/ej2-vue-richtexteditor-ui';

const quickToolbarSettings = {
  image: [
    'AltText',
    'Caption',
    '|',
    'Align',
    'Display',
    'WrapText',
    '|',
    'Dimension',
    'Replace',
    'Remove'
  ]
};
</script>