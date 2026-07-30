var rteValue = `<div>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`;

var editor = new ej.richtexteditor.RichTextEditor({
  value: rteValue,
  beforeSanitizeHtml: (e) => {
    if (e.selectors && e.selectors.tags) {
      e.selectors.tags = e.selectors.tags.filter((tag) => tag !== 'iframe:not(.e-rte-embed-url)');
      e.selectors.tags = [('iframe[src^="https://"]')];
    }
  }
});
editor.appendTo('#editor');