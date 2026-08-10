/**
 * Rich Text Editor - File browser sample
 */

var hostUrl = 'https://services.syncfusion.com/js/production/';

var editor = new ej.richtexteditor.RichTextEditor({
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

