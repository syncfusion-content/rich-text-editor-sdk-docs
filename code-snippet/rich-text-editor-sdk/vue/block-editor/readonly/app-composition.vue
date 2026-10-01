<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :readOnly="true"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'The Block Editor supports various content types. When the readOnly property is set to true, it prevents users from editing the content, making the editor display-only.'
                }
            ]
        }
];

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css';
</style>
