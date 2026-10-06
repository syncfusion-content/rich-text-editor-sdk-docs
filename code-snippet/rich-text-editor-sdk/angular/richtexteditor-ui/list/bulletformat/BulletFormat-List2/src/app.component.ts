import { Component } from '@angular/core';
import { RichTextEditorUIModule, SlashCommandService } from '@syncfusion/ej2-angular-richtexteditor-ui';

@Component({
    imports: [RichTextEditorUIModule],
    standalone: true,
    selector: 'app-root',
    providers: [SlashCommandService],
    templateUrl: './app.component.html'
})
export class App {
    public placeholder: string = 'Type something ...';
    public toolbarSettings: object = {
        items: ['BulletFormatList']
    };
    public listSettings: object = {
        bulletFormatListItems: [
            { text: 'Thumbs-Up', listType: '\u{1F44D}' }
        ]
    };
}
