var editor = new ej.richtexteditor.RichTextEditor({
    height: 340,
    toolbarSettings: {
        enableFloating: false
    },
    value: " <p>The Rich Text Editor component is WYSIWYG (\"what you see is what you get\") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>\n    <p><b>Key features:</b></p>\n    <ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p></li>\n    <li><p>Capable of handling markdown editing.</p></li>\n    <li><p>Contains a modular library to load the necessary functionality on demand.</p></li>\n    <li><p>Provides a fully customizable toolbar.</p></li>\n    <li><p>Provides HTML view to edit the source directly for developers.</p></li>\n    <li><p>Supports third-party library integration.</p></li>\n    <li><p>Allows preview of modified content before saving it.</p></li>\n    <li><p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p></li>\n   </ul>"
});
editor.appendTo('#editor');

var float = new ej.buttons.CheckBox({
    // set false for enable the checked state at initial rendering
    checked: false,
    label: 'Enable Floating',
    // bind change event
    change: function (args) {
        editor.toolbarSettings.enableFloating = args.checked;
        editor.dataBind();
    }
});
float.appendTo('#float');

