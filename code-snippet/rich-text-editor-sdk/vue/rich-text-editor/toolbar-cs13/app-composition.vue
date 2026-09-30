<template>
    <div class="control-section">
      <ejs-richtexteditor :enableResize="true" :value="rteValue"></ejs-richtexteditor>
    </div>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, Resize, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";

const rteValue = `<p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>`;
provide('richtexteditor', [Toolbar, Link, Image, Resize, HtmlEditor]);
</script>

<style>

.e-richtexteditor {
  max-width: 880px;
  min-width: 250px;
  min-height: 250px;
  max-height: 400px;
}

@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>