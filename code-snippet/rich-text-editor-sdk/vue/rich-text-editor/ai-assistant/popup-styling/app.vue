<template>
  <div>
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <ejs-richtexteditor 
            id="default" 
            ref="rteInstance" 
            :toolbarSettings="toolbarSettings"
            @aiAssistantRequest="onPromptRequest">
          </ejs-richtexteditor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Audio, HtmlEditor, AIAssistant } from "@syncfusion/ej2-vue-richtexteditor";

export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },
  data: function() {
    return {
      toolbarSettings: {
        items: ['AICommands', 'AIQuery']
      }
    };
  },
  methods: {
    onPromptRequest: function(event) {
      setTimeout(() => {
        const rteInstance = this.$refs.rteInstance.ej2Instances;
        rteInstance.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', false);
        rteInstance.addAIPromptResponse('Demonstration of the AI Assistant Popup styling.', true);
      }, 5000);
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Audio, HtmlEditor, AIAssistant]
  }
}
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css";
</style>