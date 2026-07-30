import WProofreader from '@webspellchecker/wproofreader-sdk-js';

var editor = new ej.richtexteditor.RichTextEditor({
        created: function () {
                // WProofreader configuration
                WProofreader.init({
                        container: this.inputElement,
                        lang: 'en_US',
                        serviceId: 'YOUR_SERVICE_ID_HERE',
                });
        },
        value: `<p>Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.</p>`,
});

editor.appendTo('#editor');