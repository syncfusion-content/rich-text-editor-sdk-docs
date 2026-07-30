/**
 * Prevention of XSS attack sample
 */
var rteValue = `<div onmouseover='javascript:alert(1)'>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`;

var editor = new ej.richtexteditor.RichTextEditor({
   value: rteValue
});
editor.appendTo("#editor");