<template>
  <ejs-richtexteditor-ui
    :toolbarSettings="toolbarSettings"
    :fontColor="fontColor"
    :backgroundColor="backgroundColor">
  </ejs-richtexteditor-ui>
</template>

<script setup>
import { RichTextEditorUIComponent as EjsRichtexteditorUi, SlashCommand } from '@syncfusion/ej2-vue-richtexteditor-ui';

EjsRichtexteditorUi.Inject(SlashCommand);

const toolbarSettings = {
  items: ['FontColor', 'BackgroundColor']
};

const fontColor = {
  default: '#DC2626',
  mode: 'Palette',
  columns: 5,
  modeSwitcher: true
};

const backgroundColor = {
  default: '#FFF7C7',
  mode: 'Picker',
  columns: 5,
  modeSwitcher: false
};
</script>