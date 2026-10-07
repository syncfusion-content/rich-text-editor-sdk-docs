<template>
  <ejs-richtexteditor-ui placeholder="Type something ... "
  :value="value"
  :valueFormat="valueFormat"
  :toolbarSettings="toolbarSettings"
  :imageSettings="imageSettings"></ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi } from '@syncfusion/ej2-vue-richtexteditor-ui';

const value = `<p>Getting started with the Rich Text Editor UI.</p>`;
const hostUrl = 'https://services.syncfusion.com/js/production/';
const valueFormat = 'html';
const toolbarSettings = {
            items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
        };
const imageSettings = {
  allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
  maxFileSize: 30000000,
  uploadUrl: hostUrl + 'api/RichTextEditor/SaveFile',
  imageUrl: hostUrl + 'RichTextEditor/'
}
</script>
