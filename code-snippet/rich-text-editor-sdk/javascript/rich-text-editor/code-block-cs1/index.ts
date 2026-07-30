import { RichTextEditor, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, NodeSelection, Table, CodeBlock } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Image,  Link, HtmlEditor, QuickToolbar, Table, CodeBlock );

let editor: RichTextEditor = new RichTextEditor({
        toolbarSettings: {
                items: ['Undo', 'Redo', '|', 'CodeBlock', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|', 'BulletFormatList', 'NumberFormatList', '|', 'Formats', 'Alignments', '|', 'Outdent', 'Indent', '|',
                        'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'EmojiPicker', '|', 'SourceCode']
        },
        codeBlockSettings: {
                languages: [
                    {label: "HTML", language: "html"},
                    {label: "JavaScript", language: "javascript"},
                    {label: "CSS", language: "css"},
                    {label: "Plain Text", language: "plaintext"}
                ],
                defaultLanguage: "plaintext"
        },
        placeholder: 'Type something...'
});
editor.appendTo('#editor');
