


import { RichTextEditor, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-richtexteditor';
  RichTextEditor.Inject(Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar);

  // Build data to be used in At.JS config.
  let employeeList: { [key: string]: Object }[] = [
      { id: 'emp01', name: 'Jacob', email: 'jacob@mail.com' },
      { id: 'emp02', name: 'Isabella', email: 'isabella@mail.com' },
      { id: 'emp03', name: 'Ethan', email: 'ethan@mail.com' },
      { id: 'emp04', name: 'Emma', email: 'emma@mail.com' },
      { id: 'emp05', name: 'Michael', email: 'michael@mail.com' },
      { id: 'emp06', name: 'Olivia', email: 'olivia@mail.com' },
      { id: 'emp07', name: 'Jeniffer', email: 'jeniffer@mail.com' }
  ];

  let config: Object = {
      at: "@",
      callbacks: {
        beforeReposition: function (offset) {
            offset.left = this.rect().left - (leftBarWdith + leftPadding);
        }
      },
      data: employeeList,
      displayTpl: '<li>${name} <small>${email}</small></li>',
      limit: 200
  };
let leftBarWdith : number = window.parent.document.getElementById('doc-left-toc').offsetWidth;
let leftPadding : number = +getComputedStyle(window.parent.document.getElementById('md-cnt')).paddingRight.match(/\d/g).join('');
  let editor: RichTextEditor = new RichTextEditor({
      toolbarSettings: {
          items: ['|', 'Undo', 'Redo', '|',
              'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
              'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
              'SubScript', 'SuperScript', '|',
              'LowerCase', 'UpperCase', '|',
              'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
              'Outdent', 'Indent', '|', 'CreateLink', '|', 'Image', '|', 'SourceCode']
      },
      placeholder:"Type @ to get the e-mail list",
      created: (args: any) => {
          let textArea: HTMLElement = editor.contentModule.getEditPanel() as HTMLElement;
          $(textArea).atwho(config); // to get the popup of the email list
          $(textArea).on('keydown', function(e) {
            if(e.keyCode == 13 && $(textArea).atwho('isSelecting'))
              return false
          })
      }
  });
  editor.appendTo('#editor');



