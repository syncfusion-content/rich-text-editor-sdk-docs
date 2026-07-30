import { RichTextEditor, Toolbar, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, HtmlEditor, QuickToolbar);

let editor: RichTextEditor = new RichTextEditor({
    inlineMode: {
        enable: true,
        onSelection: true
    },
    value: `<p>The sample is configured with inline mode of editor. Initially, the editor is rendered without a <a href="https://ej2.syncfusion.com/home/" target="_blank">toolbar</a>. The toolbar becomes visible only when the content is selected/clicked.</p>`
});
editor.appendTo('#editor');