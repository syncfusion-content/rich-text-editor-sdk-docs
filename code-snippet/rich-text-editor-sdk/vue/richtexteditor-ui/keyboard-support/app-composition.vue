<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :keyBindings="keyBindings">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi } from '@syncfusion/ej2-vue-richtexteditor-ui';

const toolbarSettings = {
  items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', 'CodeBlock', '|', 'Undo', 'Redo']
};
const keyBindings = {
  link: 'ctrl+alt+k',
  image: 'ctrl+alt+i',
  'code-block': 'ctrl+shift+c'
};
</script>
