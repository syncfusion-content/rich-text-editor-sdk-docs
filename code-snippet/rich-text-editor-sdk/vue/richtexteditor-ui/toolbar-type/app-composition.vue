<template>
  <div style="display: flex; gap: 15px;">
    <div id="editor"></div>
    <div class="property-section">
      <p style="margin-bottom: 15px;">Properties</p>
      <div class="editor-toolbar-properties">
        <div class="form-group" style="margin-bottom: 15px;">
          <label class="form-label property-label">Toolbar Type</label>
          <input type="text" id="toolbarType" name="toolbarType" class="form-control" />
        </div>
        
        <div class="form-group" style="margin-bottom: 15px;">
          <label class="form-label property-label">Toolbar Position</label>
          <input type="text" id="toolbarPosition" name="toolbarPosition" class="form-control" />
        </div>
        
        <div class="form-group">
          <input type="checkbox" id="float" checked="false">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { CheckBox } from '@syncfusion/ej2-buttons';

const width = '70%';

const toolbarSettings = {
  items: [
    'Undo', 'Redo', '|',
    'Bold', 'Italic', 'Underline', 'Strikethrough', '|',
    'FontColor', 'BackgroundColor', '|',
    'Formats', 'Alignment', '|',
    'Table', 'Image', 'Link', '|',
    'FontName', 'FontSize', '|',
    'NumberFormatList', 'BulletFormatList', '|',
    'Subscript', 'Superscript'
  ],
  type: 'Expanded',
  position: 'Top'
};

const toolbarTypeData = [
  { text: 'Expanded', value: 'Expanded' },
  { text: 'MultiRow', value: 'MultiRow' },
  { text: 'Scrollable', value: 'Scrollable' }
];

const toolbarPositionData = [
  { text: 'Top', value: 'Top' },
  { text: 'Bottom', value: 'Bottom' }
];

let editor = null;

onMounted(() => {
  editor = new RichTextEditorUI({
    width: width,
    toolbarSettings: toolbarSettings
  });
  editor.appendTo('#editor');

  const toolbarTypeDropdown = new DropDownList({
    dataSource: toolbarTypeData,
    fields: { text: 'text', value: 'value' },
    value: 'Expanded',
    popupHeight: '200px',
    floatLabelType: 'Auto',
    change: function (args) {
      editor.toolbarSettings.type = args.value;
      editor.dataBind();
    }
  });
  toolbarTypeDropdown.appendTo('#toolbarType');

  const toolbarPositionDropdown = new DropDownList({
    dataSource: toolbarPositionData,
    fields: { text: 'text', value: 'value' },
    value: 'Top',
    popupHeight: '150px',
    floatLabelType: 'Auto',
    change: function (args) {
      editor.toolbarSettings.position = args.value;
      editor.dataBind();
    }
  });
  toolbarPositionDropdown.appendTo('#toolbarPosition');

  const floatCheckbox = new CheckBox({
    checked: true,
    label: 'Enable Floating',
    change: function (args) {
      editor.toolbarSettings.enableFloating = args.checked;
      editor.dataBind();
    }
  });
  floatCheckbox.appendTo('#float');
});
</script>
