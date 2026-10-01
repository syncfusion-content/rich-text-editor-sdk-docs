<template>
  <ejs-richtexteditor-ui
    ref="rteObj"
    :toolbarSettings="toolbarSettings"
    :quickToolbarSettings="quickToolbarSettings"
  ></ejs-richtexteditor-ui>
</template>

<script setup>
import { ref } from 'vue';
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

const rteObj = ref(null);

const toolbarSettings = ref({
  // The args shape is `{ item: ToolbarItemModel, event: Event }`.
  itemClicked: (args) => {
    if (args.item && args.item.actionId === 'uppercase') {
      // dispatch the `uppercase` command through the fluent builder
      rteObj.value.ej2Instances.commands().uppercase().apply();
    }
  }
});

const quickToolbarSettings = ref({
  enable: true,
  text: [
    'Bold', 'Italic', 'Underline', '|',
    {
      actionId: 'uppercase',
      id: 'uppercase',
      text: 'UPPERCASE',
      tooltipText: 'Transform selection to UPPERCASE',
      windowsShortcutText: 'Ctrl + Shift + U',
      macShortcutText: '⇧ ⌘ U'
    },
    '|',
    'NumberedList', 'BulletList'
  ]
});
</script>