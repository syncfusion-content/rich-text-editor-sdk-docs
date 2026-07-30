import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, BeforeSanitizeHtmlArgs } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

let rteValue: string = `<div>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`;

let editor: RichTextEditor = new RichTextEditor({
    value: rteValue,
     beforeSanitizeHtml: (e: BeforeSanitizeHtmlArgs) => {
      if (e.selectors && e.selectors.tags) {
        e.selectors.tags = e.selectors.tags.filter((tag: string) => tag !== 'iframe:not(.e-rte-embed-url)');
        e.selectors.tags = [('iframe[src^="https://"]')];
    }
  }
 });
editor.appendTo('#editor');
