import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, PasteCleanup, Table, Video, Audio } from '@syncfusion/ej2-richtexteditor'; 
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, PasteCleanup, Table, Video, Audio);
import { Mention } from '@syncfusion/ej2-dropdowns';

let emailData: { [key: string]: Object }[] = [
  { Name: 'Selma Rose', EmailId: 'selma@gmail.com' },
  { Name: 'Maria', EmailId: 'maria@gmail.com' },
  { Name: 'Russo Kay', EmailId: 'russo@gmail.com' },
  { Name: 'Robert', EmailId: 'robert@gmail.com' },
  { Name: 'Camden Kate', EmailId: 'camden@gmail.com' },
  { Name: 'Sophia', EmailId: 'sophia@gmail.com' },
  { Name: 'Margaret', EmailId: 'margaret@gmail.com' },
  { Name: 'Ursula Ann', EmailId: 'ursula@gmail.com' },
  { Name: 'Laura Grace', EmailId: 'laura@gmail.com' },
  { Name: 'Albert', EmailId: 'albert@gmail.com' },
  { Name: 'William', EmailId: 'william@gmail.com' },
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
  suggestionCount: 5,

});
emailObj.appendTo('#mentionEditor');