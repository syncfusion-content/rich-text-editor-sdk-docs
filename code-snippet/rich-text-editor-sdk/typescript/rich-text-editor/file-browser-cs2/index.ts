

import { RichTextEditor, HtmlEditor, Toolbar, QuickToolbar, Image, FileManager } from '@syncfusion/ej2-richtexteditor';
RichTextEditor.Inject(HtmlEditor, Toolbar, QuickToolbar, Image, FileManager);

let hostUrl: string = 'https://services.syncfusion.com/js/production/';

let editor: RichTextEditor = new RichTextEditor({
    fileManagerSettings: {
        enable: true,
        ajaxSettings: {
            url: hostUrl + 'api/RichTextEditor/FileOperations',
			getImageUrl: hostUrl + 'api/RichTextEditor/GetImage',
			uploadUrl: hostUrl + 'api/RichTextEditor/Upload',
			downloadUrl: hostUrl + 'api/RichTextEditor/Download'
        }
    },
    toolbarSettings: {
        items: ['FileManager']
    }
});
editor.appendTo('#editor');



