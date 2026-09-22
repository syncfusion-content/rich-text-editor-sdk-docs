var hostUrl = 'https://services.syncfusion.com/js/production/';

var editor = new ej.richtexteditorui.RichTextEditorUI({
    toolbarSettings: {
        items: ['Bold', 'Italic', '|', 'Image', '|', 'Undo', 'Redo']
    },
    imageSettings: {
        allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
        maxFileSize: 30000000,
        uploadUrl: hostUrl + 'api/RichTextEditor/SaveFile',
        removeUrl: hostUrl + 'api/RichTextEditor/DeleteFile',
        imageUrl: hostUrl + 'RichTextEditor/',
        saveFormat: 'Blob',
        display: 'inline',
        resize: true
    },
    beforeFileUpload: function (args) {
        console.log('Before upload:', args);
    },
    fileUploadSuccess: function (args) {
        console.log('Upload succeeded:', args);
    },
    fileUploadFailed: function (args) {
        console.log('Upload failed:', args);
    }
});
editor.appendTo('#editor');
