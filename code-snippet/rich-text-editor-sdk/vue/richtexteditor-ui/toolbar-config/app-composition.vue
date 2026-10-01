<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi } from '@syncfusion/ej2-vue-richtexteditor-ui';

const toolbarSettings = {
  items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'Formats', 'Alignment', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo'],
  type: 'MultiRow',
  position: 'Top',
  enableFloating: true,
  floatingOffset: 0,
  itemClicked: function (args) {
    console.log('Toolbar item clicked:', args);
  },
  updatedToolbarStatus: function (args) {
    console.log('Toolbar status updated:', args);
  }
};
</script>
