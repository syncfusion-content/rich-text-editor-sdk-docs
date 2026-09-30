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

<script>
import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { CheckBox } from '@syncfusion/ej2-buttons';

export default {
  name: 'App',
  data: function() {
    return {
      width: '70%',
      editor: null,
      toolbarSettings: {
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
      },
      toolbarTypeData: [
        { text: 'Expanded', value: 'Expanded' },
        { text: 'MultiRow', value: 'MultiRow' },
        { text: 'Scrollable', value: 'Scrollable' }
      ],
      toolbarPositionData: [
        { text: 'Top', value: 'Top' },
        { text: 'Bottom', value: 'Bottom' }
      ],
      toolbarTypeDropdown: null,
      toolbarPositionDropdown: null,
      floatCheckbox: null
    };
  },
  mounted: function() {
    const self = this;
    
    this.editor = new RichTextEditorUI({
      width: this.width,
      toolbarSettings: this.toolbarSettings
    });
    this.editor.appendTo('#editor');
    
    this.toolbarTypeDropdown = new DropDownList({
      dataSource: this.toolbarTypeData,
      fields: { text: 'text', value: 'value' },
      value: 'Expanded',
      popupHeight: '200px',
      floatLabelType: 'Auto',
      change: function (args) {
        self.editor.toolbarSettings.type = args.value;
        self.editor.dataBind();
      }
    });
    this.toolbarTypeDropdown.appendTo('#toolbarType');

    this.toolbarPositionDropdown = new DropDownList({
      dataSource: this.toolbarPositionData,
      fields: { text: 'text', value: 'value' },
      value: 'Top',
      popupHeight: '150px',
      floatLabelType: 'Auto',
      change: function (args) {
        self.editor.toolbarSettings.position = args.value;
        self.editor.dataBind();
      }
    });
    this.toolbarPositionDropdown.appendTo('#toolbarPosition');

    this.floatCheckbox = new CheckBox({
      checked: true,
      label: 'Enable Floating',
      change: function (args) {
        self.editor.toolbarSettings.enableFloating = args.checked;
        self.editor.dataBind();
      }
    });
    this.floatCheckbox.appendTo('#float');
  }
};
</script>
