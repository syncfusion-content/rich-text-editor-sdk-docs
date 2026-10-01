<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        blockType: 'BulletList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Features of the Block Editor'
            }
        ]
    },
    {
        blockType: 'NumberedList',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Step 1: Initialize the Block Editor'
            }
        ]
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Review documentation'
            }
        ],
        properties: { isChecked: true }
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Implement drag and drop functionality'
            }
        ],
        properties: { isChecked: false}
    }
];

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css';
</style>
