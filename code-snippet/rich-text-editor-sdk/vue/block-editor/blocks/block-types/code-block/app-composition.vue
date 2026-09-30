<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :codeBlockSettings="codeBlockData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
     {
        blockType: 'Code',
        content: [
            {
                contentType: ContentType.Text,  
                content: 'function greeting() {\n  console.log("Hello, world!");\n}'
            }
        ]
    }
];

const codeBlockData = {
        defaultLanguage: 'javascript',
        languages: [
            { language: 'javascript', label: 'JavaScript' },
            { language: 'typescript', label: 'TypeScript' },
            { language: 'html', label: 'HTML' },
            { language: 'css', label: 'CSS' }
        ]
    };

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css';
</style>
