<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :enableHtmlSanitizer="true"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: "<div onmouseover='javascript:alert(1)'>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>"
                }
            ]
        }
];

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css';
</style>
