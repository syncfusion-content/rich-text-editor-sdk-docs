<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                <ejs-richtexteditor ref="rteObj" :height="340" :quickToolbarSettings="quickToolbarSettings" :value="rteValue" :toolbarSettings = "toolbarSettings" ></ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Audio, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    name: "App",
    components: {
        "ejs-richtexteditor":RichTextEditorComponent
    },
     data: function() {
        return {
            rteValue: `<p><b>Get started with Quick Toolbar to click on an audio</b></p>
                    <p>Using the quick toolbar, users can replace, display, and delete the selected audio.</p>
                    <p><audio controls><source src="https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Audio.wav" type="audio/mp3" /></audio></p>`,
            toolbarSettings: {
                items: ['Audio']
            },
            quickToolbarSettings: {
                showOnRightClick: true,
                audio: ['AudioReplace', 'Remove', 'AudioLayoutOption']
            }
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Audio, HtmlEditor, QuickToolbar]
    }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>