


import { RichTextEditor, Toolbar, Image,  Link, HtmlEditor, QuickToolbar, NodeSelection } from '@syncfusion/ej2-richtexteditor';
import { UploadingEventArgs } from '@syncfusion/ej2-inputs';
RichTextEditor.Inject(Toolbar, Image,  Link, HtmlEditor, QuickToolbar );

let editor: RichTextEditor = new RichTextEditor({
        height: 400,
        toolbarSettings: {
        items: ['Undo', 'Redo', '|',
                'Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor', '|',
                'SubScript', 'SuperScript', '|',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', '|', 'OrderedList', 'UnorderedList', '|',
                'Indent', 'Outdent', '|', 'Image', '|', 'SourceCode',
                '|', 'ClearFormat', 'Print']
        },
         insertImageSettings: {
            saveUrl: "https://aspnetmvc.syncfusion.com/services/api/uploadbox/Save",
            path: "../Images/"
        },
        imageUploading: onImageUploading
    });
    editor.appendTo("#editor");

    function onImageUploading(args: UploadingEventArgs): void {
    console.log("file is uploading");
    let imgSize = 500000;
    let sizeInBytes: number = args.fileData.size;
    if ( imgSize < sizeInBytes ) {
        args.cancel = true;
    }
    }



