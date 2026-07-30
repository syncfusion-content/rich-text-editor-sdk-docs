<template>
    <ejs-richtexteditor
      ref="editor"
      editorMode="Markdown"
      :value="rteValue"
      :toolbarSettings="toolbarSettings"
    ></ejs-richtexteditor>
</template>

<script setup>
import { provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Table, Image, MarkdownEditor } from '@syncfusion/ej2-vue-richtexteditor';

const toolbarSettings = {
    items: [ 'Bold',
        'Italic',
        'StrikeThrough',
        '|',
        'Formats',
        'OrderedList',
        'UnorderedList',
        'CreateLink',
        'Image',
        'CreateTable',
         '|',
        'Undo',
        'Redo']
};
const rteValue=`The Markdown Editor supports keyboard shortcuts to format text, insert tables, links, and images, and to perform common editing actions such as undo and redo.`;
provide('richtexteditor', [Toolbar, Link, Image, Table, MarkdownEditor]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css";
</style>
