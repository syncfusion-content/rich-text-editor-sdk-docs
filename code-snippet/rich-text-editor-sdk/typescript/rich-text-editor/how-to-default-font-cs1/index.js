
var editor = new ej.richtexteditor.RichTextEditor({ 
 fontFamily: {
      default:"Noto Sans", // to define default font-family
        items:[
          {text: "Segoe UI", value: "Segoe UI", class: "e-segoe-ui",  command: "Font", subCommand: "FontName"},
          
          {text: "Noto Sans", value: "Noto Sans",  command: "Font", subCommand: "FontName"},
          {text: "Impact", value: "Impact,Charcoal,sans-serif", class: "e-impact", command: "Font", subCommand: "FontName"},
          {text: "Tahoma", value: "Tahoma,Geneva,sans-serif", class: "e-tahoma", command: "Font", subCommand: "FontName"},
        ]
      },
        toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough','|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
                'Outdent', 'Indent', '|',
                'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        },
        cssClass: "customClass"
  });
editor.appendTo('#editor');


