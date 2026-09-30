<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :codeBlockSettings="codeBlockData"></ejs-blockeditor>
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
            blockType: 'Code',
            content: [
                {
                    contentType: ContentType.Text,  
                    content: 'function greeting() {\n  console.log("Hello, world!");\n}'
                }
            ]
        }
      ],

      codeBlockData: {
        defaultLanguage: 'javascript',
        languages: [
            { language: 'javascript', label: 'JavaScript' },
            { language: 'typescript', label: 'TypeScript' },
            { language: 'html', label: 'HTML' },
            { language: 'css', label: 'CSS' }
        ]
      }

    };
  },
  methods: {
    
  }
};
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css';
</style>
