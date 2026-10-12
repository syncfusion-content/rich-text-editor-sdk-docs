import Vue from 'vue';
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.component('ejs-richtexteditor-ui', RichTextEditorUIComponent);

new Vue({
  el: '#app',
  template: `<div>
    <ejs-richtexteditor-ui :focus="onFocus" :blur="onBlur"></ejs-richtexteditor-ui>
    <p id="event-log" style="margin-top: 15px;">Click outside the editor to trigger the blur event.</p>
  </div>`,
  methods: {
    onBlur: function() {
      const logElement = document.getElementById('event-log');
      if (logElement) {
        logElement.innerText = '[blur event]: Editor lost focus.';
      }
    },
    onFocus: function() {
      const logElement = document.getElementById('event-log');
      if (logElement) {
        logElement.innerText = '[focus event]: Editor focused. Click outside the Editor to trigger blur event.';
      }
    }
  }
});
