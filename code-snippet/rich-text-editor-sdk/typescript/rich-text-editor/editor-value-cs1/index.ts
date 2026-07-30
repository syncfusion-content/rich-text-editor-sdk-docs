import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar} from '@syncfusion/ej2-richtexteditor';
 
// Inject the required modules
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar);
 
// Define the toolbar settings
const toolbarSettings: any = {
   items: [
     'Bold',
     'Italic',
     'Underline',
     '|',
     'Formats',
     'Alignments',
     'OrderedList',
     'UnorderedList',
     '|',
     'CreateLink',
     'Image',
     '|',
     'SourceCode',
     '|',
     'Undo',
     'Redo',
   ],
 };
 
  let editor: RichTextEditor = new RichTextEditor({
   toolbarSettings: toolbarSettings,
 });
 
  editor.appendTo('#editor');
 
 // Set initial value
 editor.value = '<p>Welcome to Syncfusion RichTextEditor!</p>';
 
 // Function to get editor content
 function getEditorContent() {
   const editorValue = editor.value;
   document.getElementById('editorValue')!.textContent = editorValue;
 }
 
 // Add event listener to the button
 document.getElementById('getValueBtn')!.addEventListener('click', getEditorContent);