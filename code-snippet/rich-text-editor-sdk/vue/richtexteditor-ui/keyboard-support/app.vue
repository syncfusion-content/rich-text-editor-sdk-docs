<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :keyBindings="keyBindings">
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
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', 'CodeBlock', '|', 'Undo', 'Redo']
      },
      keyBindings: {
        link: 'ctrl+alt+k',
        image: 'ctrl+alt+i',
        'code-block': 'ctrl+shift+c'
      }
    };
  }
};
</script>
