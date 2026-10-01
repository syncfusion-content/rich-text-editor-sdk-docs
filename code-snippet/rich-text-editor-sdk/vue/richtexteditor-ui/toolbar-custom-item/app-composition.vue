<template>
  <ejs-richtexteditor-ui
    ref="editor"
    :toolbarSettings="toolbarSettings">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { ref } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi } from '@syncfusion/ej2-vue-richtexteditor-ui';

const editor = ref(null);

const onItemClicked = (args) => {
  if (args.item && args.item.actionId === 'wordCount') {
    const words = editor.value.ej2Instances.getText().trim().split(/\s+/).filter(Boolean).length;
    alert('Word count: ' + words);
  }
};

const toolbarSettings = {
  items: [
    'Bold', 'Italic', 'Underline', '|',
    {
      id: 'WordCount',
      actionId: 'wordCount',
      prefixIcon: 'e-icons e-numbering-list',
      tooltipText: 'Word count',
      align: 'Left'
    },
    '|', 'Undo', 'Redo'
  ],
  itemClicked: onItemClicked
};
</script>
