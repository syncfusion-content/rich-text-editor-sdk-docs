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
        items: ['FontName']
    };
    public fontFamily: object = {
        items: [
            { text: 'Default', value: 'Default' },
            { text: 'Segoe UI', value: 'Segoe UI, sans-serif' },
            { text: 'Roboto', value: 'Roboto, sans-serif' },
            { text: 'Georgia', value: 'Georgia, serif' },
            { text: 'Courier New', value: 'Courier New, monospace' }
        ]
    };
}
