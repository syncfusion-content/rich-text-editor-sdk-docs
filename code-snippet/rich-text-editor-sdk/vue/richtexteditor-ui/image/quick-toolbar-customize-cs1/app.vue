<template>
  <ejs-richtexteditor-ui
    :quickToolbarSettings="quickToolbarSettings">
  </ejs-richtexteditor-ui>
</template>

<script>
import {
  RichTextEditorUIComponent
} from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  
  data() {
    return {
      quickToolbarSettings: {
        image: [
          'AltText',
          'Caption',
          '|',
          'Align',
          'Display',
          'WrapText',
          '|',
          'Dimension',
          'Replace',
          'Remove'
        ]
      }
    };
  }
};
</script>