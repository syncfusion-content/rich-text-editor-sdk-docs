<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :slashCommandSettings="slashCommandSettings">
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
        items: ['Formats', 'Alignment', 'Quote', 'CodeBlock', 'HorizontalLine', 'Callout']
      },
      slashCommandSettings: {
        enable: true,
        items: [
          'Paragraph',
          'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4',
          'Blockquote',
          'Info', 'Success', 'Warning', 'Error', 'Note',
          'Collapsible Paragraph',
          'Collapsible Heading 1', 'Collapsible Heading 2',
          'Collapsible Heading 3', 'Collapsible Heading 4'
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
};
</script>
