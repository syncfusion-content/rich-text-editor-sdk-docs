<template>
    <div>
        <ejs-richtexteditor></ejs-richtexteditor>       
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, HtmlEditor, ClipboardCleanup } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    name: "App",
    components: {
        "ejs-richtexteditor": RichTextEditorComponent
    },
    provide: {
        richtexteditor: [Toolbar, HtmlEditor, ClipboardCleanup]
    }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>