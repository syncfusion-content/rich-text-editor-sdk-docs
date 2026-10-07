var editor = new ej.richtexteditorui.RichTextEditorUI({
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

var toolbarTypeData = [
    { text: 'Expanded', value: 'Expanded' },
    { text: 'MultiRow', value: 'MultiRow' },
    { text: 'Scrollable', value: 'Scrollable' }
];

var toolbarPositionData = [
    { text: 'Top', value: 'Top' },
    { text: 'Bottom', value: 'Bottom' }
];

var toolbarTypeDropdown = new ej.dropdowns.DropDownList({
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

var toolbarPositionDropdown = new ej.dropdowns.DropDownList({
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

var float = new ej.buttons.CheckBox({
    checked: true,
    label: 'Enable Floating',
    change: function (args) {
        editor.toolbarSettings.enableFloating = args.checked;
        editor.dataBind();
    }
});

float.appendTo('#float');
