<template>
  <ejs-richtexteditor-ui
    :linkSettings="linkSettings">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi } from '@syncfusion/ej2-vue-richtexteditor-ui';

const linkSettings = {
  allowedProtocols: ['https'],
  defaultProtocol: 'https',
  autoPrependProtocol: true
};
</script>