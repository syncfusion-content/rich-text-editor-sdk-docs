import Vue from 'vue';
import { RichTextEditorUIPlugin } from '@syncfusion/ej2-vue-richtexteditor-ui';

new Vue({
  el: '#app',
  template: `<div>
    <ejs-richtexteditor-ui :created="onCreated"></ejs-richtexteditor-ui>
    <p id="event-log" style="margin-top: 15px;">Status: Waiting for editor to be created...</p>
  </div>`,
  methods: {
    onCreated: function() {
      const logElement = document.getElementById('event-log');
      if (logElement) {
        const timestamp = new Date().toLocaleTimeString();
        logElement.innerText = `[created event]: Editor initialized successfully at ${timestamp}.`;
      }
    }
  }
});
