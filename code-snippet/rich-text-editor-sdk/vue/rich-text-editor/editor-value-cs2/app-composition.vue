<template>
  <h3>Editor 1</h3>
  <ejs-richtexteditor v-model="editorContent"></ejs-richtexteditor>

  <h3>Editor 2</h3>
  <ejs-richtexteditor v-model="editorContent"></ejs-richtexteditor>
</template>

<script setup>
import {ref, provide } from "vue";  
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

const editorContent = ref("Initial content");

// Automatically update content after 2 seconds
onMounted(() => {
  setTimeout(() => {
    editorContent.value = "Updated content after 2 seconds!";
  }, 2000);
});
provide('richtexteditor',  [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>