<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings">
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
        items: ['Bold', 'Italic', 'Underline', 'Strikethrough', '|', 'Formats', 'Alignment', 'BulletList', 'NumberedList', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo'],
        type: 'MultiRow',
        position: 'Top',
        enableFloating: true,
        floatingOffset: 0,
        itemClicked: function (args) {
          console.log('Toolbar item clicked:', args);
        },
        updatedToolbarStatus: function (args) {
          console.log('Toolbar status updated:', args);
        }
      }
    };
  }
};
</script>
