<template>
  <ejs-richtexteditor-ui placeholder="Type something ..."></ejs-richtexteditor-ui>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  name: 'App',
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  }
};
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor-ui/index.css";
</style>