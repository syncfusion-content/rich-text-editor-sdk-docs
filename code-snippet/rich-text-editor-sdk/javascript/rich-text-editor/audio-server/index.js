var editor = new ej.richtexteditor.RichTextEditor({
        toolbarSettings: {
                items: ['Audio'],
                insertAudioSettings: {
                        saveUrl: "[SERVICE_HOSTED_PATH]/api/uploadbox/SaveFiles",
                        path: "[SERVICE_HOSTED_PATH]/Files/"
                }
        }
});

editor.appendTo('#editor');