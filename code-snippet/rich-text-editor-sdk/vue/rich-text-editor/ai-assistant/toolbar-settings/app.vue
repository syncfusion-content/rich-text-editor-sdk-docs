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
                headerToolbarSettings: ['AIcommands', 'Clear', 'Close'],
        promptToolbarSettings: ['Edit'],
        responseToolbarSettings: ['Copy', '|', 'Insert'],
        prompts: [
			{ 
				prompt: 'What is Essential Studio ?',
				response: 'Essential Studio is a software toolkit by Syncfusion that offers a variety of UI controls, frameworks, and libraries for developing applications on web, desktop, and mobile platforms. It aims to streamline application development with customizable, pre-built components.'
			}
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