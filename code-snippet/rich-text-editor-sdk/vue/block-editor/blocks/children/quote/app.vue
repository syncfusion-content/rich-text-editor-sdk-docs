<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
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
              id: 'security-quote',
              blockType: 'Quote',
              properties: {
              children: [
                  { 
                      parentId: 'security-quote',
                      blockType: 'Heading',
                      properties: { level: 3},
                      content: [{
                          contentType: ContentType.Text,
                          content: 'Security Notice'
                      }]
                  },
                  { 
                      parentId: 'security-quote',
                      blockType: 'Paragraph',
                      content: [{
                          contentType: ContentType.Text,
                          content: 'Always validate user input before processing to prevent security vulnerabilities.'
                      }]
                  },
                  { 
                      parentId: 'security-quote',
                      blockType: 'Paragraph',
                      content: [{
                          contentType: ContentType.Text,
                          content: 'Use HTTPS for all data transmission'
                      }],
                  },
                  { 
                      parentId: 'security-quote',
                      blockType: 'Paragraph',
                      content: [{
                          contentType: ContentType.Text,
                          content: 'Implement proper authentication mechanisms'
                      }],
                  },
                  { 
                      parentId: 'security-quote',
                      blockType: 'Paragraph',
                      content: [{
                          contentType: ContentType.Text,
                          content: 'Regularly update dependencies and libraries'
                      }],
                  }
              ]
              }
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
