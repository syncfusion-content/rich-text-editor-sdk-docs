<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :fontColor="fontColor"
    :backgroundColor="backgroundColor">
  </ejs-richtexteditor-ui>
</template>

<script>
import {
  RichTextEditorUIComponent,
  SlashCommand
} from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  
  data() {
    return {
      toolbarSettings: {
        items: ['FontColor', 'BackgroundColor']
      },
      fontColor: {
        default: '#DC2626',
        mode: 'Palette',
        columns: 5,
        modeSwitcher: true
      },
      backgroundColor: {
        default: '#FFF7C7',
        mode: 'Picker',
        columns: 5,
        modeSwitcher: false
      }
    };
  },
  provide: {
    'richtexteditor-ui': [SlashCommand]
  }
};
</script>