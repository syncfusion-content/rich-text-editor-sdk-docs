import { RichTextEditorUI } from '@syncfusion/ej2-richtexteditor-ui';
import { CheckBox } from '@syncfusion/ej2-buttons';
import { DropDownList } from '@syncfusion/ej2-dropdowns';

const editor: RichTextEditorUI = new RichTextEditorUI({
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
    }
});
editor.appendTo('#editor');

const toolbarTypeData: Array<{ text: string; value: string }> = [
    { text: 'Expanded', value: 'Expanded' },
    { text: 'MultiRow', value: 'MultiRow' },
    { text: 'Scrollable', value: 'Scrollable' }
];

const toolbarPositionData: Array<{ text: string; value: string }> = [
    { text: 'Top', value: 'Top' },
    { text: 'Bottom', value: 'Bottom' }
];

const toolbarTypeDropdown: DropDownList = new DropDownList({
    dataSource: toolbarTypeData,
    fields: { text: 'text', value: 'value' },
    value: 'Expanded',
    popupHeight: '200px',
    floatLabelType: 'Auto',
    change: function (args: any) {
        editor.toolbarSettings.type = args.value;
        editor.dataBind();
    }
});

toolbarTypeDropdown.appendTo('#toolbarType');

const toolbarPositionDropdown: DropDownList = new DropDownList({
    dataSource: toolbarPositionData,
    fields: { text: 'text', value: 'value' },
    value: 'Top',
    popupHeight: '150px',
    floatLabelType: 'Auto',
    change: function (args: any) {
        editor.toolbarSettings.position = args.value;
        editor.dataBind();
    }
});

toolbarPositionDropdown.appendTo('#toolbarPosition');

const float: CheckBox = new CheckBox({
    checked: true,
    label: 'Enable Floating',
    change: function (args: any) {
        editor.toolbarSettings.enableFloating = args.checked;
        editor.dataBind();
    }
});

float.appendTo('#float');
