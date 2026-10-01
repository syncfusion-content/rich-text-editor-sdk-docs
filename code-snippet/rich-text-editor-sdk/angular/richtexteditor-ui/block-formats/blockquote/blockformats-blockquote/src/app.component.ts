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
    public placeholder: string = 'Quote a passage...';
    public toolbarSettings: object = {
        items: [
            'Bold', 'Italic', 'Underline', '|',
            'Formats', 'Alignment', '|',
            'Quote', 'CodeBlock', '|',
            'Undo', 'Redo'
        ]
    };
    public slashCommandSettings: object = {
        enable: true,
        items: ['Blockquote']
    };
}
