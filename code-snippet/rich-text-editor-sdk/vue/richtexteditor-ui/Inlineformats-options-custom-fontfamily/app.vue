<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :fontFamily="fontFamily"
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
        items: ['FontName']
      },
      fontFamily: {
        items: [
          { text: 'Default', value: 'Default' },
          { text: 'Segoe UI', value: 'Segoe UI, sans-serif' },
          { text: 'Roboto', value: 'Roboto, sans-serif' },
          { text: 'Georgia', value: 'Georgia, serif' },
          { text: 'Courier New', value: 'Courier New, monospace' }
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
};
</script>