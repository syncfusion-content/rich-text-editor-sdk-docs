import { Component } from '@angular/core';
import { RichTextEditorUIModule, SlashCommand } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    providers: [SlashCommand],
    templateUrl: './app.component.html'
})
export class App {
    public value: string = '<p>Getting started with the Rich Text Editor UI.</p>';
    public valueFormat: string = 'html';
    public hostUrl: string = 'https://services.syncfusion.com/js/production/';
    public toolbarSettings: object = {
        items: ['Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignment', '|', 'Link', 'Image', 'Table', '|', 'Undo', 'Redo']
    };
    public imageSettings: object = {
        allowedTypes: ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp'],
        maxFileSize: 30000000,
        uploadUrl: this.hostUrl + 'api/RichTextEditor/SaveFile',
        removeUrl: this.hostUrl + 'api/RichTextEditor/DeleteFile',
        imageUrl: this.hostUrl + 'RichTextEditor/'
    };
}
