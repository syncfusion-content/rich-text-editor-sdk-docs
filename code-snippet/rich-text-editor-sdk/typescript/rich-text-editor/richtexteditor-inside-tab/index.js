let tabObj = new ej.navigations.Tab({
  items: [
    { header: { text: 'Tab 1' }, content: '#tab1Content' },
    { header: { text: 'Tab 2' }, content: '#tab2Content' },
    { header: { text: 'Tab 3' }, content: '#tab3Content' },
  ],
});
tabObj.appendTo('#element');

let editor1 = new ej.richtexteditor.RichTextEditor({});
editor1.appendTo('#tab1Content');

let editor2 = new ej.richtexteditor.RichTextEditor({});
editor2.appendTo('#tab2Content');

let editor3 = new ej.richtexteditor.RichTextEditor({});
editor3.appendTo('#tab3Content');
