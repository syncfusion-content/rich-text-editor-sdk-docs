<template>
  <div id="defaultRTE">
    <ejs-richtexteditor :valueTemplate="'vueTemplate'" ref="defaultRTE" :height="340">
      <template v-slot:vueTemplate>
        <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user
          experience to create and update the content.Users can format their content using standard toolbar commands.</p>
      </template>
    </ejs-richtexteditor>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
const data = {
  iframeConfig: {
    enable: true
  }
};
provide('richtexteditor', [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]);
</script>

<style>
    @import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>