<template>
  <div>
    <div id="ribbon">
      <button id="ribbonBold" type="button" @click="onBoldClick"><b>B</b></button>
      <button id="ribbonItalic" type="button" @click="onItalicClick"><i>I</i></button>
      <button id="ribbonUnderline" type="button" @click="onUnderlineClick"><u>U</u></button>
      <select id="ribbonHeading" @change="onHeadingChange">
        <option value="paragraph">Normal</option>
        <option value="heading1">Heading 1</option>
        <option value="heading2">Heading 2</option>
        <option value="heading3">Heading 3</option>
      </select>
      <input id="ribbonColor" type="color" title="Font color" @input="onColorChange" />
    </div>
    <ejs-richtexteditor-ui
      ref="editor"
      :toolbarSettings="toolbarSettings">
    </ejs-richtexteditor-ui>
  </div>
</template>

<script>
import { RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

export default {
  name: 'App',
  components: {
    'ejs-richtexteditor-ui': RichTextEditorUIComponent
  },
  data: function() {
    return {
      toolbarSettings: {
        enable: false
      }
    };
  },
  methods: {
    onBoldClick: function() {
      this.$refs.editor.ej2Instances.commands().bold().apply();
    },
    onItalicClick: function() {
      this.$refs.editor.ej2Instances.commands().italic().apply();
    },
    onUnderlineClick: function() {
      this.$refs.editor.ej2Instances.commands().underline().apply();
    },
    onHeadingChange: function(e) {
      const value = e.target.value;
      if (value === 'paragraph') {
        this.$refs.editor.ej2Instances.commands().paragraph().apply();
      } else if (value === 'heading1') {
        this.$refs.editor.ej2Instances.commands().heading1().apply();
      } else if (value === 'heading2') {
        this.$refs.editor.ej2Instances.commands().heading2().apply();
      } else if (value === 'heading3') {
        this.$refs.editor.ej2Instances.commands().heading3().apply();
      }
    },
    onColorChange: function(e) {
      this.$refs.editor.ej2Instances.commands().fontColor().color(e.target.value).apply();
    }
  }
};
</script>
