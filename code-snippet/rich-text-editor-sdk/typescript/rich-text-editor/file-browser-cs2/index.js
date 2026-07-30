/**
 * Rich Text Editor - File browser sample
 */

var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';

var editor = new ej.richtexteditor.RichTextEditor({
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

