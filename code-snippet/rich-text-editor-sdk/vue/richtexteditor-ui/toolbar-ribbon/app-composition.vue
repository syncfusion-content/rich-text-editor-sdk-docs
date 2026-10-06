<template>
  <div>
    <div id="ribbon">
      <button id="ribbonBold" type="button" @click="onBoldClick"><b>B</b></button>
      <button id="ribbonItalic" type="button" @click="onItalicClick"><i>I</i></button>
      <button id="ribbonUnderline" type="button" @click="onUnderlineClick"><u>U</u></button>
      <select id="ribbonHeading" @change="onHeadingChange">
        <option value="paragraph">Normal</option>
        <option value="heading1">Heading 1</option>
        <option value="heading2">Heading 2</option>
        <option value="heading3">Heading 3</option>
      </select>
      <input id="ribbonColor" type="color" title="Font color" @input="onColorChange" />
    </div>
    <ejs-richtexteditor-ui
      ref="editor"
      :toolbarSettings="toolbarSettings">
    </ejs-richtexteditor-ui>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi } from '@syncfusion/ej2-vue-richtexteditor-ui';

const editor = ref(null);

const toolbarSettings = {
  enable: false
};

const onBoldClick = () => {
  editor.value.ej2Instances.commands().bold().apply();
};

const onItalicClick = () => {
  editor.value.ej2Instances.commands().italic().apply();
};

const onUnderlineClick = () => {
  editor.value.ej2Instances.commands().underline().apply();
};

const onHeadingChange = (e) => {
  const value = e.target.value;
  if (value === 'paragraph') {
    editor.value.ej2Instances.commands().paragraph().apply();
  } else if (value === 'heading1') {
    editor.value.ej2Instances.commands().heading1().apply();
  } else if (value === 'heading2') {
    editor.value.ej2Instances.commands().heading2().apply();
  } else if (value === 'heading3') {
    editor.value.ej2Instances.commands().heading3().apply();
  }
};

const onColorChange = (e) => {
  editor.value.ej2Instances.commands().fontColor().color(e.target.value).apply();
};
</script>
