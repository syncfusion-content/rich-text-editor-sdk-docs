<template>
  <div>
    <ejs-richtexteditor-ui :toolbarSettings="toolbarSettings"></ejs-richtexteditor-ui>
    <div id="event-log" style="margin-top: 15px;">
      <p>Active Marks: None</p>
    </div>
  </div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  
  data() {
    return {
      toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough'],
        updatedToolbarStatus: (args) => {
          const logElement = document.getElementById('event-log');
          if (logElement) {
            const activeMarks = Object.keys(args.activeMarks).filter(key => args.activeMarks[key]).join(', ') || 'None';
            logElement.innerHTML = `<p>Active Marks: ${activeMarks}</p>`;
          }
        }
      }
    };
  }
};
</script>