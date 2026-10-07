<template>
  <ejs-richtexteditor-ui
    :linkSettings="linkSettings">
  </ejs-richtexteditor-ui>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  
  data() {
    return {
      linkSettings: {
        allowedProtocols: ['https'],
        defaultProtocol: 'https',
        autoPrependProtocol: true
      }
    };
  }
};
</script>