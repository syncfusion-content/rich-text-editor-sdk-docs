import Vue from 'vue';
import { DropDownList } from '@syncfusion/ej2-dropdowns';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { RichTextEditorUIPlugin, RichTextEditorUIComponent } from '@syncfusion/ej2-vue-richtexteditor-ui';

Vue.component('ejs-richtexteditor-ui', RichTextEditorUIComponent);

new Vue({
  el: '#app',
  template: `<div style="display: flex; gap: 15px;">
    <ejs-richtexteditor-ui
      ref="editor"
      :width="width"
      :toolbarSettings="toolbarSettings">
    </ejs-richtexteditor-ui>
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
  `,
  data: function () {
    return {
      width: '70%',
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
      ]
    };
  },
  mounted: function () {
    const self = this;

    const toolbarTypeDropdown = new DropDownList({
      dataSource: this.toolbarTypeData,
      fields: { text: 'text', value: 'value' },
      value: 'Expanded',
      popupHeight: '200px',
      floatLabelType: 'Auto',
      change: function (args) {
        self.$refs.editor.ej2Instances.toolbarSettings.type = args.value;
        self.$refs.editor.ej2Instances.dataBind();
      }
    });
    toolbarTypeDropdown.appendTo('#toolbarType');

    const toolbarPositionDropdown = new DropDownList({
      dataSource: this.toolbarPositionData,
      fields: { text: 'text', value: 'value' },
      value: 'Top',
      popupHeight: '150px',
      floatLabelType: 'Auto',
      change: function (args) {
        self.$refs.editor.ej2Instances.toolbarSettings.position = args.value;
        self.$refs.editor.ej2Instances.dataBind();
      }
    });
    toolbarPositionDropdown.appendTo('#toolbarPosition');

    const floatCheckbox = new CheckBox({
      checked: true,
      label: 'Enable Floating',
      change: function (args) {
        self.$refs.editor.ej2Instances.toolbarSettings.enableFloating = args.checked;
        self.$refs.editor.ej2Instances.dataBind();
      }
    });
    floatCheckbox.appendTo('#float');
  }
});
