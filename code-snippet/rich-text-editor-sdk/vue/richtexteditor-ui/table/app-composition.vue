<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :tableSettings="tableSettings"
    :placeholder="placeholder">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi } from '@syncfusion/ej2-vue-richtexteditor-ui';

const toolbarSettings = {
  items: ['Table']
};
const tableSettings = {
  resize: false
};
const placeholder = 'Type something ...';
</script>
