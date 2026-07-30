/**
 * Rich Text Editor - RemoveUrl sample
 */

var editor = new ej.richtexteditor.RichTextEditor({
    insertVideoSettings: {
        saveUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Save',
        removeUrl: 'https://ej2.syncfusion.com/services/api/uploadbox/Remove'
    },
    toolbarSettings: {
        items: ['Video']
    }
});
editor.appendTo('#editor');

