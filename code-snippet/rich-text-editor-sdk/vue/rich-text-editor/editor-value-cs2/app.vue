<template>
  <h3>Editor 1</h3>
  <ejs-richtexteditor v-model="editorContent"></ejs-richtexteditor>

  <h3>Editor 2</h3>
  <ejs-richtexteditor v-model="editorContent"></ejs-richtexteditor>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },

  data: function () {
    return {
      editorContent: 'Initial content',
    };
  },
  mounted() {
    // Automatically update editor content after 2 seconds
    setTimeout(() => {
      this.editorContent = 'Updated content after 2 seconds!';
    }, 2000);
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>