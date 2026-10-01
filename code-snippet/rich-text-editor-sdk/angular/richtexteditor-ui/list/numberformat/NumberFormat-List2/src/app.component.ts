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
    public placeholder: string = 'Type something ...';
    public toolbarSettings: object = {
        items: ['NumberFormatList']
    };
    public listSettings: object = {
        numberFormatListItems: [
            { text: 'Decimal', listType: 'decimal' },
            { text: 'Roman', listType: 'upper-roman' },
            { text: 'Alpha', listType: 'upper-alpha' }
        ]
    };
}
