/**
 * Custom cross-site scripting sample
 */
var rteValue = `<div>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`;

var editor = new ej.richtexteditor.RichTextEditor({
  value: rteValue,
  beforeSanitizeHtml: (e) => {
    e.helper = (value) => {
      e.cancel = true;
      var temp = document.createElement('div');
      temp.innerHTML = value;
      var scriptTag = temp.querySelector('script');
      if (scriptTag) {
        ej.base.detach(scriptTag);
      }
      return temp.innerHTML;
    }
  }
});
editor.appendTo('#editor');

