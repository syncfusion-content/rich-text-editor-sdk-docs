var editor = new ej.richtexteditor.RichTextEditor({
    toolbarSettings: {
        items: ['Video']
    },
    insertVideoSettings: {
        saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
        path: "../Files/",
        maxFileSize: 30000000
    }
});

editor.appendTo('#editor');