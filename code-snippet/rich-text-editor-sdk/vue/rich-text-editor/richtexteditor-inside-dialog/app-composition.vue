<template>
  <div>
    <ejs-button @click="openDialog">Open Dialog</ejs-button>
    <ejs-dialog
      ref="dialog"
      :width="'350px'"
      :height="'400px'"
      :showCloseIcon="true"
      :visible="false"
      :open="onDialogOpen"
      :header="headerTemplate"
      :footerTemplate="footerTemplate"
    >
      <div><ejs-richtexteditor ref="editor"></ejs-richtexteditor></div>
    </ejs-dialog>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor,QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

const headerTemplate = 'Dialog Header';
const footerTemplate= 'Dialog Footer';
const onDialogOpen() = {
    this.$refs.editor.refreshUI();
},
const openDialog() = {
    this.$refs.dialog.show();
},
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>