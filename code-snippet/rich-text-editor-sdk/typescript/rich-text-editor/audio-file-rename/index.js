var editor = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
                items: ['Audio']
        },
        value:`<p>The Rich Text Editor is WYSIWYG ("what you see is what you get") editor useful to create and edit content, and return the valid <a href="https://ej2.syncfusion.com/home/" target="_blank">HTML markup</a> or <a href="https://ej2.syncfusion.com/home/" target="_blank">markdown</a> of the content</p>`,
        insertAudioSettings: {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/Rename",
        path: "[SERVICE_HOSTED_PATH]/Files/"
        },
        fileUploadSuccess: onFileUploadSuccess
});

editor.appendTo('#editor');

function onFileUploadSuccess (args) {
        alert("Get the new file name here");
        if (args.e.currentTarget.getResponseHeader('name') != null) {
            args.file.name = args.e.currentTarget.getResponseHeader('name');
            var filename = document.querySelectorAll(".e-file-name")[0];
            filename.innerHTML = args.file.name.replace(document.querySelectorAll(".e-file-type")[0].innerHTML, '');
            filename.title = args.file.name;
        }
}