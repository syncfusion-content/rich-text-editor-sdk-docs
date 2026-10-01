<template>
  <div>
    <ejs-richtexteditor-ui :focus="onFocus" :blur="onBlur"></ejs-richtexteditor-ui>
    <p id="event-log" style="margin-top: 15px;">Click outside the editor to trigger the blur event.</p>
  </div>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi } from '@syncfusion/ej2-vue-richtexteditor-ui';

const onBlur = () => {
  const logElement = document.getElementById('event-log');
  if (logElement) {
    logElement.innerText = '[blur event]: Editor lost focus.';
  }
};

const onFocus = () => {
  const logElement = document.getElementById('event-log');
  if (logElement) {
    logElement.innerText = '[focus event]: Editor focused. Click outside the Editor to trigger blur event.';
  }
};
</script>