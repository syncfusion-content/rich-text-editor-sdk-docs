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
    public placeholder: string = 'Type / for collapsible sections...';
    public slashCommandSettings: object = {
        enable: true,
        items: [
            'Collapsible Paragraph',
            'Collapsible Heading 1',
            'Collapsible Heading 2',
            'Collapsible Heading 3',
            'Collapsible Heading 4'
        ]
    };
}
