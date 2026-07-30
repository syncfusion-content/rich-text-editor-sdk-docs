import { RichTextEditor, Toolbar, HtmlEditor,  Image, Table, Link } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, HtmlEditor, Image, Table, Link);

let editor: RichTextEditor = new RichTextEditor({
    value: `<table border="1" style="width:100%; border-collapse: collapse;">
    <tr>
        <th>Department</th>
        <th>Details</th>
    </tr>
    <tr>
        <td>Sales</td>
        <td>
        <table border="1" style="width:100%; border-collapse: collapse;">
            <tr>
            <th>Employee</th>
            <th>Target</th>
            </tr>
            <tr>
            <td>John Doe</td>
            <td>$50,000</td>
            </tr>
            <tr>
            <td>Jane Smith</td>
            <td>$60,000</td>
            </tr>
        </table>
        </td>
    </tr>
    <tr>
        <td>Marketing</td>
        <td>Campaign planning in progress</td>
    </tr>
    </table>`,
    toolbarSettings: {
        items: [
            'Undo',
            'Redo',
            '|',
            'Bold',
            'Italic',
            'Underline',
            'StrikeThrough',
            '|',
            'Formats',
            'Alignments',
            '|',
            'NumberFormatList',
            'BulletFormatList',
            '|',
            'CreateLink',
            'Image',
            'CreateTable',
            '|',
            'SourceCode',
        ],
    }});
editor.appendTo('#editor');