<template>
  <ejs-richtexteditor ref="defaultRTE" :height="200" placeholder="Type Something">
  </ejs-richtexteditor>
</template>
<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
.e-richtexteditor .rte-placeholder {
  font-family: monospace;
}
</style>