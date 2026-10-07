<template>
  <div>
    <ejs-richtexteditor-ui :focus="onFocus" :blur="onBlur"></ejs-richtexteditor-ui>
    <p id="event-log" style="margin-top: 15px;">Click inside the editor to trigger the focus event.</p>
  </div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  
  methods: {
    onFocus: function() {
      const logElement = document.getElementById('event-log');
      if (logElement) {
        logElement.innerText = '[focus event]: Editor focused.';
      }
    },
    onBlur: function() {
      const logElement = document.getElementById('event-log');
      if (logElement) {
        logElement.innerText = '[blur event]: Editor lost focus. Click inside the Editor to focus again.';
      }
    }
  }
};
</script>