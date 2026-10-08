


import { RichTextEditor, Toolbar, MarkdownEditor } from '@syncfusion/ej2-richtexteditor';

RichTextEditor.Inject(Toolbar, MarkdownEditor);

let editor: RichTextEditor = new RichTextEditor({
    editorMode: 'Markdown',
    toolbarSettings: {
        items: ['Bold', 'Italic', 'StrikeThrough', '|',
            'Formats', 'OrderedList', 'UnorderedList', '|',
            'CreateLink', 'Image', '|','Undo', 'Redo']
    }});
editor.appendTo('#editor');

document.onkeyup = function (e) {
    if (e.altKey && e.keyCode === 84 /* t */) {
        // press alt+t to focus the component.
        editor.focusIn();
    }
};



