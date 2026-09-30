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
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'This is a paragraph with no indentation (indent: 0)'
                }
            ],
            indent: 0
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'This paragraph has one level of indentation (indent: 1)'
                }
            ],
            indent: 1
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'This paragraph has two levels of indentation (indent: 2)'
                }
            ],
            indent: 2
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Back to no indentation'
                }
            ],
            indent: 0
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
