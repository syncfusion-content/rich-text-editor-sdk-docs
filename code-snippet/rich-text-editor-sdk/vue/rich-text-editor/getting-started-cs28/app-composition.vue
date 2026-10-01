<template>
  <ejs-richtexteditor :value="value" :beforeSanitizeHtml="beforeSanitizeHtml"></ejs-richtexteditor>
</template>

<script setup>
import { provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
import { detach } from "@syncfusion/ej2-base";

const value = `<div>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')<\/script>`;
const beforeSanitizeHtml = (e) => {
  e.helper = (value) => {
    e.cancel = true;
    let temp = document.createElement("div");
    temp.innerHTML = value;
    let scriptTag = temp.querySelector("script");
    if (scriptTag) {
      detach(scriptTag);
    }
    return temp.innerHTML;
  };
};
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>