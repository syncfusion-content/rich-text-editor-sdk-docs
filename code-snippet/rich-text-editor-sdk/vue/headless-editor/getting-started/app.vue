<template>
    <div id="container">
        <div ref="editorElement"></div>
    </div>
</template>

<script>
import { HeadlessEditor, basicExtensions, placeholderExtension } from "@syncfusion/ej2-headless-editor";
export default {
    name: "App",
    mounted() {
        this.headlessEditor = HeadlessEditor.create({
            extensions: [basicExtensions, placeholderExtension]
        });
        this.headlessEditor.mount(this.$refs.editorElement);
    },
    beforeUnmount() {
        if (this.headlessEditor && typeof this.headlessEditor.destroy === "function") {
            this.headlessEditor.destroy();
        }
    }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/base/index.css";
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/headless-editor/index.css";
</style>
