<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor id="default" ref="rteInstance" :toolbarSettings="toolbarSettings" :aiAssistantSettings="aiAssistantSettings"></ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { provide, ref } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, AIAssistant } from "@syncfusion/ej2-vue-richtexteditor";
const rteInstance = ref(null);
const toolbarSettings = {
            items: ['AICommands', 'AIQuery']
        };
const aiAssistantSettings = {
        popupMaxHeight: 500,
        popupWidth: 500
    };
const richtexteditor = [Toolbar, Link, Image, HtmlEditor, AIAssistant];
provide('richtexteditor', richtexteditor);
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>