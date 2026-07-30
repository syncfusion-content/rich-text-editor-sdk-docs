import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, PasteCleanup, Table, Video, Audio } from '@syncfusion/ej2-richtexteditor'; 
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, PasteCleanup, Table, Video, Audio);
import { Mention } from '@syncfusion/ej2-dropdowns';

let emailData: { [key: string]: Object }[] = [
  { Name: 'Selma Rose', EmailId: 'selma@gmail.com' },
  { Name: 'Maria', EmailId: 'maria@gmail.com' },
  { Name: 'Russo Kay', EmailId: 'russo@gmail.com' },
  { Name: 'Robert', EmailId: 'robert@gmail.com' },
  { Name: 'Camden Kate', EmailId: 'camden@gmail.com' },
];

let emailObj: Mention;
let defaultRTE: RichTextEditor = new RichTextEditor({
  placeholder: 'Type @ and tag the name',
});
defaultRTE.appendTo('#mention_integration');

// Initialize Mention component.
emailObj = new Mention({
  dataSource: emailData,
  fields: { text: 'Name' },
  target: defaultRTE.inputElement,
  minLength: 3,
});
emailObj.appendTo('#mentionEditor');