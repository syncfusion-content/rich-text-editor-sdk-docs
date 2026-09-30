<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :undoRedoStack="20"></ejs-blockeditor>
  </div>
</template>

<script>
import { BlockEditorComponent, ContentType } from "@syncfusion/ej2-vue-blockeditor";

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent,
  },
  data() {
    return {
      blocksData: [
          {
              blockType: 'Heading',
              properties: { level: 1},
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'Sample Heading'
                  }
              ]
          },
          {
              blockType: 'Paragraph',
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'This is a sample paragraph block.'
                  }
              ]
          },
          {
              blockType: 'Paragraph'
          }
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css';
</style>
