<template>
    <div id="container">
        <div ref="editorElement"></div>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { HeadlessEditor, basicExtensions, placeholderExtension } from "@syncfusion/ej2-headless-editor";

const editorElement = ref(null);
let headlessEditor;

onMounted(() => {
    headlessEditor = HeadlessEditor.create({
        extensions: [basicExtensions, placeholderExtension]
    });

    headlessEditor.mount(editorElement.value);
});

onBeforeUnmount(() => {
    if (headlessEditor && typeof headlessEditor.destroy === "function") {
        headlessEditor.destroy();
    }
});
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/base/index.css";
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/headless-editor/index.css";
</style>
