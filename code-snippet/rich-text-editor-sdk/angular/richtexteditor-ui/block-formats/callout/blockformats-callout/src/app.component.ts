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
    public placeholder: string = 'Type / for slash commands...';
    public toolbarSettings: object = {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            'Callout',
            '|',
            'Undo', 'Redo'
        ]
    };
    public slashCommandSettings: object = {
        enable: true,
        items: [
            'Info', 'Success', 'Warning', 'Error', 'Note'
        ]
    };
}
