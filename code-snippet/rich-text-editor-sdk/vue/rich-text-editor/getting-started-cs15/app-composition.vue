<template>
  <div>
    <ejs-richtexteditor ref="defaultRTE" :placeholder="placeholder"></ejs-richtexteditor>
  </div>
</template>

<script setup>
import { provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

const placeholder = "Type Something";
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>

.e-richtexteditor .e-rte-placeholder {
  font-family: monospace;
  color: deeppink;
}

@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>