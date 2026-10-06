<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :tableSettings="tableSettings"
    :placeholder="placeholder">
  </ejs-richtexteditor-ui>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  name: 'App',
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  data: function() {
    return {
      toolbarSettings: {
        items: ['Table']
      },
      tableSettings: {
        resize: false
      },
      placeholder: 'Type something ...'
    };
  }
};
</script>
