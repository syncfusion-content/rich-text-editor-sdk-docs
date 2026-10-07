<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :listSettings="listSettings"
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
        items: ['BulletFormatList']
      },
      listSettings: {
        bulletFormatListItems: [
          { text: 'Thumbs-Up', listType: '\u{1F44D}' }
        ]
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
};
</script>