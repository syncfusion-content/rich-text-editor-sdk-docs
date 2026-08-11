

import { RichTextEditor, HtmlEditor, Toolbar, QuickToolbar, Image, FileManager } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(HtmlEditor, Toolbar, QuickToolbar, Image, FileManager);

let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';

let editor: RichTextEditor = new RichTextEditor({
    fileManagerSettings: {
        enable: true,
        path: '/Pictures/Food',
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'
        }
    },
    toolbarSettings: {
        items: ['FileManager']
    }
});
editor.appendTo('#editor');



