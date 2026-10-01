<template>
  <ejs-richtexteditor-ui
    :slashCommandSettings="slashCommandSettings"
    placeholder="Type / for collapsible sections...">
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
      slashCommandSettings: {
        enable: true,
        items: [
          'Collapsible Paragraph',
          'Collapsible Heading 1',
          'Collapsible Heading 2',
          'Collapsible Heading 3',
          'Collapsible Heading 4'
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
};
</script>
