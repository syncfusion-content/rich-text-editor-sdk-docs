<template>
    <div>
        <ejs-richtexteditor></ejs-richtexteditor>  
    </div>
</div>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, HtmlEditor, ClipboardCleanup } from "@syncfusion/ej2-vue-richtexteditor";

provide('richtexteditor', [Toolbar, HtmlEditor, ClipboardCleanup]);
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>