import { RichTextEditor, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar);

let editor: RichTextEditor = new RichTextEditor({
    placeholder:"Click link icon in toolbar to add the desired link",
    toolbarSettings: {
        items: ['createLink']},
        actionComplete: function(args){
          if (<String>args.requestType === 'Links') {
            if (args.elements[0].parentNode && (<Element>args.elements[0].parentNode).tagName === 'A'){
              var emberEle=document.createElement('blockquote'); // to add the link
              emberEle.setAttribute('class', 'embedly-card'); // to add the class
              emberEle.appendChild(args.elements[0].parentElement);
              emberEle.appendChild(document.createElement('p'));
              args.range.insertNode(emberEle); // add the link  description to the rte content
            }
        }

        }
});
editor.appendTo('#editor');