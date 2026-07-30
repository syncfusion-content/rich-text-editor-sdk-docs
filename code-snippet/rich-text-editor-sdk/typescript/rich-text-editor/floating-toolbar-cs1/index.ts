


import { RichTextEditor, Toolbar, HtmlEditor } from '@syncfusion/ej2-richtexteditor';
import { CheckBox, ChangeEventArgs } from '@syncfusion/ej2-buttons';

RichTextEditor.Inject(Toolbar, HtmlEditor);

let editor: RichTextEditor = new RichTextEditor({
   height: 340,
   toolbarSettings: {
      enableFloating: false
   },
   value: ` <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
    <p><b>Key features:</b></p>
    <ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>
    <li><p>Capable of handling markdown editing.</p></li>
    <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>
    <li><p>Provides a fully customizable toolbar.</p></li>
    <li><p>Provides HTML view to edit the source directly for developers.</p></li>
    <li><p>Supports third-party library integration.</p></li>
    <li><p>Allows preview of modified content before saving it.</p></li>
    <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>
    </ul>`});
editor.appendTo('#editor');

let float: CheckBox = new CheckBox({
    // set false for enable the checked state at initial rendering
    checked: false,
    label: 'Enable Floating',
    // bind change event
    change: (args: ChangeEventArgs) => {
        editor.toolbarSettings.enableFloating = (args as any).checked;
        editor.dataBind();
    }
});
float.appendTo('#float');



