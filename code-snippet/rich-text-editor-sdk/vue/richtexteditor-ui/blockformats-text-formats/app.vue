<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    placeholder="Type something...">
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
        items: [
          'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
          'Formats', 'Alignment', 'BulletList', 'NumberedList', '|',
          'Quote', 'CodeBlock', 'HorizontalLine', 'Callout', '|',
          'Undo', 'Redo'
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
};
</script>
