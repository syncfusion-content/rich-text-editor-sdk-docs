import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, BeforeSanitizeHtmlArgs } from '@syncfusion/ej2-richtexteditor';
import { detach } from '@syncfusion/ej2-base';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);

let rteValue: string = `<div>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')</script>`;

let editor: RichTextEditor = new RichTextEditor({
    value: rteValue,
     beforeSanitizeHtml: (e: BeforeSanitizeHtmlArgs) => {
      e.helper = (value: string) => {
        e.cancel = true;
        let temp: HTMLElement = document.createElement('div');
        temp.innerHTML = value;
        let scriptTag: HTMLElement = temp.querySelector('script');
        if (scriptTag) {
            detach(scriptTag);
        }
        return temp.innerHTML;
      }
  }
 });
editor.appendTo('#editor');
