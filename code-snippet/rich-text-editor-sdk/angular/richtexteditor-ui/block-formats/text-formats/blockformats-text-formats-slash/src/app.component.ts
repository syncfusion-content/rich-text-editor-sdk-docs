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
    public toolbarSettings: object = {
        items: ['Formats', 'Alignment', 'Quote', 'CodeBlock', 'HorizontalLine', 'Callout']
    };
    public slashCommandSettings: object = {
        enable: true,
        items: [
            'Paragraph',
            'Heading 1', 'Heading 2', 'Heading 3', 'Heading 4',
            'Blockquote',
            'Info', 'Success', 'Warning', 'Error', 'Note',
            'Collapsible Paragraph',
            'Collapsible Heading 1', 'Collapsible Heading 2',
            'Collapsible Heading 3', 'Collapsible Heading 4'
        ]
    };
}
