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
<script>
import { RichTextEditorComponent, Toolbar, Link, Audio, HtmlEditor, AIAssistant  } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    name: "App",
    components: {
        "ejs-richtexteditor":RichTextEditorComponent
    },
     data: function() {
        return {
            toolbarSettings: {
                items: ['AICommands', 'AIQuery']
            },
            aiAssistantSettings: {
                commands: [
                    { text: 'Rewrite', prompt: 'Rewrite the content to be more refined.' },
                    { text: 'Elaborate', prompt: 'Expand on the following content with more detail and explanation:' },
                    {
                        text: 'Change Tone',
                        items: [
                            { text: 'Professional', prompt: 'Rewrite the following content in a professional tone:' },
                            { text: 'Casual', prompt: 'Rewrite the following content in a casual, conversational tone:' },
                            { text: 'Direct', prompt: 'Rewrite the following content to be more direct and to the point:' },
                        ],
                    },
                ]
            }
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Audio, HtmlEditor, AIAssistant]
    }
}
</script>
<style>
    @import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>