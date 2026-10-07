<template>
  <div>
    <ejs-richtexteditor-ui :actionComplete="onActionComplete"></ejs-richtexteditor-ui>
    <button id="clear-btn" class="e-btn" style="margin-top: 15px;" v-on:click="clearLogs">Clear Log</button>
    <div id="log-container" style="margin-top: 15px; padding: 10px; border: 1px solid #ddd; min-height: 50px;">
      <div id="empty-message" style="color: #999; font-style: italic;">No events captured yet. Try typing or formatting some text inside the editor...</div>
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
    onActionComplete: function(args) {
      const logContainer = document.getElementById('log-container');
      const emptyMessage = document.getElementById('empty-message');
      if (!logContainer) { return; }
      // Hide the placeholder text once the first event fires
      if (emptyMessage) {
        emptyMessage.style.display = 'none';
      }
      const timestamp = new Date().toLocaleTimeString();
      const actionLabel = args.action ? args.action : 'Generic Action';
      // Create log row element
      const logRow = document.createElement('div');
      logRow.style.marginBottom = '6px';
      logRow.style.borderLeft = '3px solid #5cb85c';
      logRow.style.paddingLeft = '8px';
      logRow.innerHTML = `<strong style="color: #5cb85c">[${timestamp}] actionComplete</strong> — <em>Action:</em> ${actionLabel}`;
      // Insert new logs at the top of the logging stream
      logContainer.insertBefore(logRow, logContainer.firstChild);
    },
    clearLogs: function() {
      const logContainer = document.getElementById('log-container');
      if (logContainer) {
        logContainer.innerHTML = '<div id="empty-message" style="color: #999; font-style: italic;">No events captured yet. Try typing or formatting some text inside the editor...</div>';
      }
    }
  }
};
</script>