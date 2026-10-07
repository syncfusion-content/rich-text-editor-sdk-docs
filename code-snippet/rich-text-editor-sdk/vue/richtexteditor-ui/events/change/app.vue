<template>
  <div>
    <ejs-richtexteditor-ui ref="editor" :change="onChange"></ejs-richtexteditor-ui>
    <div class="event-log" style="margin-top: 15px;">
      <p id="event-log">Action: None</p>
      <p id="affected-node">Affected Element: None</p>
    </div>
  </div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  
  methods: {
    onChange: function(args) {
      const logElement = document.getElementById('event-log');
      const nodeElement = document.getElementById('affected-node');
      if (logElement && nodeElement) {
        logElement.innerText = `Action: ${args.action || 'Modified'}`;
        if (args.affectedNodes && args.affectedNodes.length > 0) {
          const primaryNode = args.affectedNodes[0];
          nodeElement.innerText = `Affected Element: <${primaryNode.type}>`;
        } else {
          nodeElement.innerText = 'Affected Element: None';
        }
      }
    }
  }
};
</script>