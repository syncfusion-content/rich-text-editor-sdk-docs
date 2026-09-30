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

<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Image,
  Count,
  HtmlEditor,
  QuickToolbar,
} from '@syncfusion/ej2-vue-richtexteditor';

export default {
  name: 'App',
  components: {
    'ejs-button': ButtonComponent,
    'ejs-dialog': DialogComponent,
    'ejs-richtexteditor': RichTextEditorComponent,
  },
  data() {
    return {
      headerTemplate: 'Dialog Header',
      footerTemplate: 'Dialog Footer',
    };
  },
  methods: {
    onDialogOpen() {
      this.$refs.editor.refreshUI();
    },
    openDialog() {
      this.$refs.dialog.show();
    },
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar],
  },
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>