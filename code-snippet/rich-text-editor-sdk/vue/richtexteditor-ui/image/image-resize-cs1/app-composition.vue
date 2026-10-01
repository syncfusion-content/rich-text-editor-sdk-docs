<template>
  <ejs-richtexteditor-ui
    :imageSettings="imageSettings"
    :quickToolbarSettings="quickToolbarSettings">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi } from '@syncfusion/ej2-vue-richtexteditor-ui';

const imageSettings = {
  uploadUrl: 'https://api.example.com/upload',
  imageUrl: '/uploads/',
  resize: true,
  dimension: {
    minWidth: '50px',
    maxWidth: '800px',
    minHeight: '50px',
    maxHeight: '600px'
  }
};

const quickToolbarSettings = {
  image: ['AltText', 'Caption', '|', 'Align', 'Display', 'WrapText', '|', 'Dimension', 'Replace', 'Remove']
};
</script>