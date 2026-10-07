<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    placeholder="Type something ...">
  </ejs-richtexteditor-ui>
</template>

<script>
import {
  RichTextEditorUIComponent,
  SlashCommand
} from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  
  data() {
    return {
      toolbarSettings: {
        items: ['FontSize']
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
};
</script>