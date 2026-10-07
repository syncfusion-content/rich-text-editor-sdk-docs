<template>
  <div>
    <ejs-richtexteditor-ui ref="rteObj" :destroyed="onDestroyed">
      <p>The Rich Text Editor component is initialized. Click the <strong>Destroy</strong> button to dispose of the component and trigger the <code>destroyed</code> event.</p>
    </ejs-richtexteditor-ui>
    <button id="destroy-btn" class="e-btn" style="margin-top: 15px;" v-on:click="destroyEditor">Destroy Editor</button>
    <p id="event-log" style="margin-top: 10px;">Status: Editor is active. Click the button to destroy.</p>
  </div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  
  methods: {
    destroyEditor: function() {
      this.$refs.rteObj.destroy();
    },
    onDestroyed: function() {
      const logElement = document.getElementById('event-log');
      if (logElement) {
        logElement.innerText = '[destroyed event]: Editor component has been successfully destroyed.';
      }
    }
  }
};
</script>