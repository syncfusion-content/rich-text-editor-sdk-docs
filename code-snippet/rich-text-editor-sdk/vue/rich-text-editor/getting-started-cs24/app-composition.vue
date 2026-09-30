<template>
  <ejs-richtexteditor ref="defaultRTE" :height="200" placeholder="Type Something">
  </ejs-richtexteditor>
</template>
<script setup>
import { provide } from "vue";  
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
.e-richtexteditor .rte-placeholder {
    font-family: monospace;
  }
</style>