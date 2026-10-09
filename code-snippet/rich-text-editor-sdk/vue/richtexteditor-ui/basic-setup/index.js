import Vue from 'vue';
import { RichTextEditorUIPlugin, RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.component('ejs-richtexteditor-ui', RichTextEditorUIComponent);

new Vue({
  el: '#app',
  template: `<ejs-richtexteditor-ui placeholder="Type something ... "
  :value="value"
  :valueFormat="valueFormat"
  :toolbarSettings="toolbarSettings"
  :imageSettings="imageSettings"></ejs-richtexteditor-ui>`,
  data: function () {
    const hostUrl = 'https://services.syncfusion.com/js/production/';
        return {
            value: '<p>Getting started with the Rich Text Editor UI.</p>',
            valueFormat: 'html',
            toolbarSettings: {
                items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
            },
            imageSettings: {
                allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
                maxFileSize: 30000000,
                uploadUrl: hostUrl + 'api/RichTextEditor/SaveFile',
                imageUrl: hostUrl + 'RichTextEditor/'
            }
      };
    }
});
