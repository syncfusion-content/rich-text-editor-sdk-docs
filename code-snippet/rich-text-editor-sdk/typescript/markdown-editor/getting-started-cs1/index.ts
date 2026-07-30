import { RichTextEditor, Toolbar, Link, Image, MarkdownEditor } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, MarkdownEditor);

let editor: RichTextEditor = new RichTextEditor({ 
    editorMode: 'Markdown'
});

editor.appendTo('#editor');